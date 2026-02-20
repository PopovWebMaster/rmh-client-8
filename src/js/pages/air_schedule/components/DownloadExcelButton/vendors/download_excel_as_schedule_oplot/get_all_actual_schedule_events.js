
import store from './../../../../../../redux/store.js';

export const get_all_actual_schedule_events = ( used_events_by_id, highlight_files_by_name  ) => {

    let { scheduleResult } = store.getState();
    let { scheduleEventsList } = scheduleResult;

    let result = [];

    let list = [];
    for( let i = 0; i < scheduleEventsList.length; i++ ){
        let { eventId } = scheduleEventsList[ i ];
        if( used_events_by_id[ eventId ] ){
            let { cellBackground, textColor } = used_events_by_id[ eventId ];
            let item = structuredClone( scheduleEventsList[ i ] );

            item.cellBackground = cellBackground;
            item.textColor = textColor;

            list.push( structuredClone( item ) );
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