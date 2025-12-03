
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_app_release_on_complete = ( gridEventId ) => {

        let { scheduleResultDragEvent } = store.getState();
        let { 
            dragStartReleaseId,
        } = scheduleResultDragEvent;

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateList();

        StoreScheduleResultEvents.AddRelease( gridEventId, dragStartReleaseId );
        StoreScheduleResultEvents.SetListToStore( true );



};