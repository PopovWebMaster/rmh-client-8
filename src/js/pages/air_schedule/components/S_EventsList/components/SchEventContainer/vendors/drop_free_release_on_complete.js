
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_free_release_on_complete = ( gridEventId ) => {

    let { scheduleResultDragEvent, scheduleResult } = store.getState();
    let { 
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
        dragStartCategoryId,
        dragStartFileName,
    } = scheduleResultDragEvent;

    let { scheduleEventsList } = scheduleResult;

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();

    StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );

    StoreScheduleResultEvents.AddReleaseAsLinkedFile({
        gridEventId,
        category_id:    dragStartCategoryId,
        eventId:        dragStartEventId,
        name:           dragStartFileName,
        duration:       dragStartDuration,
        startTime:      dragStartStartTime,
    });

    StoreScheduleResultEvents.SetListToStore( true );

};