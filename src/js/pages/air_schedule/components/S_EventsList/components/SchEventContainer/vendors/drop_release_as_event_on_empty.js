import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_release_as_event_on_empty = ( startTime ) => {
    let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
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
        eventId:        dragStartEventId,
        durationTime:   dragStartDuration,
    });

    StoreScheduleResultEvents.AddLinkedFileReleasesToNewGridEvent();

    // console.dir( dragStartDuration );
    // StoreScheduleResultEvents.AddFreeRelease({
    //     name:       dragStartFileName,
    //     duration:   dragStartDuration - dragStartLinkedFileDuration,
    //     startTime:  dragStartStartTime,
    // });

    StoreScheduleResultEvents.AddNewGridEvent();
};