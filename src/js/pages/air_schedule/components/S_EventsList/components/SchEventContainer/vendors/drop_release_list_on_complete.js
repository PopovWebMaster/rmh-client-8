import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_release_list_on_complete = ( gridEventId ) => {
    let { scheduleResultDragEvent } = store.getState();
    let { 
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
        dragStartLinkedFileDuration,
        dragStartFileName,
    } = scheduleResultDragEvent;

    // let { scheduleEventsList } = scheduleResult;

    console.dir( dragStartFileName );

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    StoreScheduleResultEvents.CreateNewGridEvent({
        startTime:      dragStartStartTime,
        eventId:        dragStartEventId,
    });
    StoreScheduleResultEvents.AddFreeRelease({
        name:       dragStartFileName,
        duration:   dragStartDuration - dragStartLinkedFileDuration,
        startTime:  dragStartStartTime,
    });

    StoreScheduleResultEvents.AddReleasesFromNewGridEvent( gridEventId );
    StoreScheduleResultEvents.SetListToStore( true );

    // StoreScheduleResultEvents.CreateNewGridEvent({
    //     startTime:      dragStartStartTime,
    //     eventId:        dragStartEventId,
    // });
    // StoreScheduleResultEvents.AddFreeRelease({
    //     name:       dragStartFileName,
    //     duration:   dragStartDuration,
    //     startTime:  dragStartStartTime,
    // });

    // StoreScheduleResultEvents.AddReleasesFromNewGridEvent( gridEventId );
    // StoreScheduleResultEvents.SetListToStore( true );
}