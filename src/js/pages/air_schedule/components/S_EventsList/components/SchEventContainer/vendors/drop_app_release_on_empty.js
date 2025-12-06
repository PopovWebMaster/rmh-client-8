

import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_app_release_on_empty = ( startTime, event_id ) => {

    let { scheduleResultDragEvent } = store.getState();
    let { 
        dragStartReleaseId,
    } = scheduleResultDragEvent;


    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    StoreScheduleResultEvents.CreateNewGridEvent({
        startTime:      startTime,
        eventId:        event_id,
    });
    
    StoreScheduleResultEvents.NewGridEventGroup.AddLinkedFilesFromEvent();
    StoreScheduleResultEvents.NewGridEventGroup.AddAppRelease( dragStartReleaseId );

    StoreScheduleResultEvents.AddNewGridEvent();





};