
import store from './../../../redux/store.js';
import { 
    setAirFiles,
    setAirFilesByEventId,
    setFilterItems,
    setFilterItemsByEventId,
    setCurrentFilterEventId,
 } from './../../../redux/airFilesSlice.js';

import { get_event_data_by_id } from './get_event_data_by_id.js';

export const set_air_files_to_store = ( airFiles ) => {

    let airFilesByEventId = {};
    for( let name in airFiles ){
        let { event_id } = airFiles[ name ];
        let item = { ...airFiles[ name ] };
        item.name = name;

        if( airFilesByEventId[ event_id ] ){
            airFilesByEventId[ event_id ].push( item );
        }else{
            airFilesByEventId[ event_id ] = [ item ];
        };
    };

    if( airFilesByEventId[ null ] ){

    }else{
        airFilesByEventId[ null ] = [];
    };



    let filterItems = [];
    let filterItemsByEventId = {};

    for( let event_id in airFilesByEventId ){
        let item = {
            event: get_event_data_by_id( event_id ),
            count: airFilesByEventId[ event_id ].length,
        };
        filterItems.push( item );
        filterItemsByEventId[ event_id ] = item;
    };

    let filterItems_sort = filterItems.sort( ( a, b ) => {
        if( a.event.id === null && b.event.id === null ){
            return -1;
        }else if( a.event.id === null ){
            return -1;
        }else if( b.event.id === null ){
            return 1;
        }else{
            if( a.event.id > b.event.id ){
                return -1;
            }else{
                return 1;
            };
        };
    });

    store.dispatch( setAirFiles( airFiles ) );
    store.dispatch( setAirFilesByEventId( airFilesByEventId ) );
    store.dispatch( setFilterItems( filterItems_sort ) );
    store.dispatch( setFilterItemsByEventId( filterItemsByEventId ) );

    set_current_filter_event_id( filterItems_sort, filterItemsByEventId );



    



}

function set_current_filter_event_id( filterItems, filterItemsByEventId ){
    let { airFiles } = store.getState();
    let { currentFilterEventId } = airFiles;
    if( filterItemsByEventId[ currentFilterEventId ] ){

    }else{
        let eventId = null;
        if( filterItems.length > 0 ){
            eventId = filterItems[ 0 ].event.id;
        };
        store.dispatch( setCurrentFilterEventId( eventId ) );
    };

}