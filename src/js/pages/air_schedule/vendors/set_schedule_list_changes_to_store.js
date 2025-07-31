
import store from './../../../redux/store.js';
import { setScheduleEventsList } from './../../../redux/scheduleResultSlise.js';

export const set_schedule_list_changes_to_store = ( gridEventId, objWithChanges, chackFlag = true ) => {
    if( chackFlag ){

        let { scheduleResult } = store.getState();
        let {
            scheduleEventsList

        } = scheduleResult; 

        let newArr = [];

        for( let i = 0; i <scheduleEventsList.length; i++ ){
            if( scheduleEventsList[ i ].gridEventId === gridEventId ){

                newArr.push( { ...scheduleEventsList[ i ], ...objWithChanges } );
            }else{
                newArr.push( { ...scheduleEventsList[ i ] } );
            };
        };
        

        store.dispatch( setScheduleEventsList( newArr ) );
    };
}