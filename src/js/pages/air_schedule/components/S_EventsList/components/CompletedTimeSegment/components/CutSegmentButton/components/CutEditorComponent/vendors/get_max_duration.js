
import store from './../../../../../../../../../redux/store.js';
import { convert_time_str_to_sec } from './../../../../../../../../../helpers/convert_time_str_to_sec.js';

export const get_max_duration = ( gridEventId ) => {

    let result = 0;

    let { layout } = store.getState();
    let { eventListById, gridDayEventsListById } = layout;

    if( gridDayEventsListById[ gridEventId ] ){
        let { eventId } = gridDayEventsListById[ gridEventId ];
        if( eventListById[ eventId ] ){
            let { durationTime } = eventListById[ eventId ];
            result = convert_time_str_to_sec( durationTime );
        };
    };

    return result;


};