
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';


export const drop_free_release_on_empty = ( startTime ) => {

    let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
    let { 
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
    } = scheduleResultDragEvent;

    let { gridCurrentDay } = layout;
    let { scheduleEventsList } = scheduleResult;

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();

    StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
    let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
        gridCurrentDay,
        isAKeyPoint:    false,
        startTime:      startTime,
        eventId:        dragStartEventId,
        durationTime:   dragStartDuration,
    });

    StoreScheduleResultEvents.SetListToStore( true );

}