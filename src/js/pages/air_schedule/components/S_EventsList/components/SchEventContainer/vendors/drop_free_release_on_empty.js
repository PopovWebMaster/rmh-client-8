
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';


export const drop_free_release_on_empty = ( startTime ) => {

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
    });

    StoreScheduleResultEvents.AddLinkedFileReleasesToNewGridEvent();

    // console.dir( dragStartDuration );
    StoreScheduleResultEvents.AddFreeRelease({
        name:       dragStartFileName,
        duration:   dragStartDuration - dragStartLinkedFileDuration,
        startTime:  dragStartStartTime,
    });

    StoreScheduleResultEvents.AddNewGridEvent();

    

    /*

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();

    StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
    let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
        gridCurrentDay,
        isAKeyPoint:    false,
        startTime:      startTime,
        eventId:        dragStartEventId,
        durationTime:   dragStartDuration + dragStartLinkedFileDuration,
    });

    StoreScheduleResultEvents.AddReleaseAsLinkedFile({
        gridEventId: ScheduleEvent.id,
        category_id: dragStartCategoryId,
        eventId: dragStartEventId,
        name: dragStartFileName,
        duration: dragStartDuration,
        startTime: dragStartStartTime,
    });


    StoreScheduleResultEvents.SetListToStore( true );

    */

}