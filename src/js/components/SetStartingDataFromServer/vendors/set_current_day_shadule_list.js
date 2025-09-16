
import store from './../../../redux/store.js';

import { setScheduleEventsList } from './../../../redux/scheduleResultSlise.js';

export const set_current_day_shadule_list = ( response ) => {
    
    let { currentDaySchaduleList } = response;

    if( currentDaySchaduleList ){

        let arr = [];
        for( let i = 0; i < currentDaySchaduleList.length; i++ ){
            let item = { ...currentDaySchaduleList[ i ] };
            item.notes = item.notes === null? '': item.notes;
            item.finalNotes = item.finalNotes === null? '': item.finalNotes;

            arr.push( item );


        };

        store.dispatch( setScheduleEventsList( arr ) );
    };
}