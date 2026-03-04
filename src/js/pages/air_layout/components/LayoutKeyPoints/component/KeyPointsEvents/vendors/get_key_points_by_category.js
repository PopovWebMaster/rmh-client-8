
import { get_event_by_id } from './../../../../../../../helpers/get_event_by_id.js';

export const get_key_points_by_category = ( eventList ) => { // eventList можно взять из store, но не хочу, и так сойдёт

    let obj = {};

    let result = {};

    for( let i = 0; i < eventList.length; i++ ){
        let { category_id, id } = eventList[ i ];
        if( obj[ category_id ] ){
        }else{
            obj[ category_id ] = [];
        };
        let item = get_event_by_id( id );
        item.isUsed = false;
        obj[ category_id ].push( structuredClone( item ) );
    };

    for( let category_id in obj ){
        let list = obj[ category_id ].sort( ( a, b ) => {
            if( a.name > b.name ){
                return 1;
            }else{
                return -1;
            };
        } );

        result[ category_id ] = [ ...list ];
    };

    return result;


};