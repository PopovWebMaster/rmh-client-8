
import store from './../../../redux/store.js';
import { convert_time_str_to_sec } from './../../../helpers/convert_time_str_to_sec.js'

export const get_events_tree_list = ( maxDuration = null ) => {

    let result = [];

    let { layout } = store.getState();
    let { eventList, eventListById } = layout;

    let obj = {};
    for( let i = 0; i < eventList.length; i++ ){

        let { category_id, id } = eventList[ i ];
        if( category_id !== null ){
            if( obj[ category_id ] ){

            }else{
                obj[ category_id ] = [];
            };
            if( id !== null ){
                obj[ category_id ].push( structuredClone( eventListById[ id ] ) );
            };
        };
        
    };

    let arr = [];
    for( let category_id in obj ){
        let item = {
            category_id,
            isOpen: false,
            eventsList: [],
        };

        let list = [];
        for( let i = 0; i < obj[ category_id ].length; i++ ){
            let ev_item = { ...obj[ category_id ][ i ] };
            let isActive = true;
            if( maxDuration !== null ){
                let durSec = convert_time_str_to_sec( ev_item.durationTime );
                isActive = durSec <= maxDuration? true: false;
            };
            ev_item.isActive = isActive;
            list.push( ev_item );
        };

        let list_sort = list.sort( ( a, b ) => {
            if( a.name > b.name ){
                return 1;
            }else{
                return -1;
            };
        } );
        item.eventsList = [ ...list_sort ];

        arr.push( item );

    };

    result = arr.sort( ( a, b ) => {
        if( Number( a.category_id ) > Number( b.category_id  ) ){
            return 1;
        }else{
            return -1;
        };
    } );

    return result;

}