import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_release_list_on_empty = ( startTime, event_id ) => {
 let { scheduleResultDragEvent } = store.getState();
    let { 
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
        dragStartCategoryId,
        dragStartFileName,
        dragStartLinkedFileDuration,
    } = scheduleResultDragEvent;

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    StoreScheduleResultEvents.CreateNewGridEvent({
        startTime:      startTime,
        eventId:        event_id,
    });

    StoreScheduleResultEvents.AddLinkedFileReleasesToNewGridEvent();

    // console.dir( dragStartDuration );
    StoreScheduleResultEvents.AddFreeRelease({
        name:       dragStartFileName,
        duration:   dragStartDuration - dragStartLinkedFileDuration,
        startTime:  dragStartStartTime,
    });

    StoreScheduleResultEvents.AddNewGridEvent();

}