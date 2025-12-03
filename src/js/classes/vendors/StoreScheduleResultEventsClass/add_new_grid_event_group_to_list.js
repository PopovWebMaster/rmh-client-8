
import { adjust_startTime_in_list_v2 } from './adjust_startTime_in_list_v2.js';
import { add_push_it_data_to_list } from './add_push_it_data_to_list.js';

export const add_new_grid_event_group_to_list = ( list, NewGridEventGroup ) => {

    let result = {
        isError: false,
        newList: [],
    };

    let margeList = [ ...list ];
    for( let i = 0; i < NewGridEventGroup.scheduleEventsGroup.length; i++ ){
        let data = NewGridEventGroup.scheduleEventsGroup[ i ].GetData()
        margeList.push( data );
    };

    let margeListSort = margeList.sort( ( a, b ) => {
        if( a.startTime > b.startTime ){ return 1 }else{ return -1 };
    } );

    result = adjust_startTime_in_list_v2( margeListSort, false );

    return result;

};