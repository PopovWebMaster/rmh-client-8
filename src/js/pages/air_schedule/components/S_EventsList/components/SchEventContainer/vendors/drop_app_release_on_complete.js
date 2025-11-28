
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_app_release_on_complete = ( gridEventId ) => {

        let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
        let { 
            // dragStartDuration,
            // dragStartStartTime,
            // dragStartEventId,
            dragStartReleaseId,
        } = scheduleResultDragEvent;
    
        let { scheduleEventsList } = scheduleResult;
    
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();

        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.AddRelease( gridEventId, dragStartReleaseId );
        StoreScheduleResultEvents.SetListToStore( true );



};