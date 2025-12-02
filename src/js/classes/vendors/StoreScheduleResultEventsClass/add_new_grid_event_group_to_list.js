
import { adjust_startTime_in_list_v2 } from './adjust_startTime_in_list_v2.js';
import { add_push_it_data_to_list } from './add_push_it_data_to_list.js';

export const add_new_grid_event_group_to_list = ( list, NewGridEventGroup ) => {

    let result = {
        isError: false,
        newList: [],
    };

    let list_with_push_it = add_push_it_data_to_list( list );

    let newList = [ ...list_with_push_it ];

    let vrem = {};
    for( let i = 0; i < NewGridEventGroup.scheduleEventsGroup.length; i++ ){
        newList.push( NewGridEventGroup.scheduleEventsGroup[ i ].GetData() );
        vrem = { ...NewGridEventGroup.scheduleEventsGroup[ i ].GetData() }
    };

    let sortList = newList.sort( ( a, b ) => {
        if( a.startTime > b.startTime ){ return 1 }else{ return -1 };
    } );


    result = adjust_startTime_in_list_v2( sortList );

    return result;

};