
import store from './../../../redux/store.js';
import { setScheduleEventsList, setScheduleEventsListIsChanged } from './../../../redux/scheduleResultSlise.js';

import { StoreScheduleResultEventsClass } from './../../../classes/StoreScheduleResultEventsClass.js';

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

         let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateList({
            gridEventsList: newArr,
        });

        StoreScheduleResultEvents.UpdateData();
        StoreScheduleResultEvents.SetListToStore( true );
        

        // store.dispatch( setScheduleEventsList( newArr ) );
        // store.dispatch( setScheduleEventsListIsChanged( true ) );


    };
}