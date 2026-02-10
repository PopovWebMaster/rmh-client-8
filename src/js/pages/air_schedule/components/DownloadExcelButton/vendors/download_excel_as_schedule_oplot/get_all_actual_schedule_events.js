
import store from './../../../../../../redux/store.js';

export const get_all_actual_schedule_events = ( used_events_by_id ) => {

    let { scheduleResult } = store.getState();
    let { scheduleEventsList } = scheduleResult;

    let result = [];

    let list = [];
    for( let i = 0; i < scheduleEventsList.length; i++ ){
        let { eventId } = scheduleEventsList[ i ];
        if( used_events_by_id[ eventId ] ){
            list.push( structuredClone( scheduleEventsList[ i ] ) );
        };
    };

    result = list.sort( ( a, b ) => {
        if( a.startTime > b.startTime ){
            return 1;
        }else{
            return -1;
        };
    } );

    return result;


};