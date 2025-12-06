
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_free_release_on_complete = ( gridEventId ) => {

    let { scheduleResultDragEvent } = store.getState();
    let { 
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
        // dragStartCategoryId,
        dragStartFileName,
    } = scheduleResultDragEvent;

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    StoreScheduleResultEvents.CreateNewGridEvent({
        startTime:      dragStartStartTime,
        eventId:        dragStartEventId,
    });

    StoreScheduleResultEvents.NewGridEventGroup.AddFreeRelease({
        name:       dragStartFileName,
        duration:   dragStartDuration,
        startTime:  dragStartStartTime,
    });

    StoreScheduleResultEvents.AddReleasesFromNewGridEvent( gridEventId );
    StoreScheduleResultEvents.SetListToStore( true );




};