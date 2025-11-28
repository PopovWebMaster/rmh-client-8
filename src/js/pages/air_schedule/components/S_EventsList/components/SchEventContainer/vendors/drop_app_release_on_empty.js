

import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_app_release_on_empty = ( startTime, event_id = null ) => {

    let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
    let { gridCurrentDay } = layout;
    let { scheduleEventsList } = scheduleResult;

    let { 
        dragStartDuration,
        dragStartEventId,
        dragStartReleaseId,
    } = scheduleResultDragEvent;

    if( dragStartEventId === null ){
        if( event_id !== null ){

            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );

            let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
                gridCurrentDay,
                isAKeyPoint: false,
                startTime: startTime,
                eventId: event_id,
                durationTime: dragStartDuration,
            });
            StoreScheduleResultEvents.AddRelease( ScheduleEvent.id, dragStartReleaseId );
            StoreScheduleResultEvents.SetListToStore( true );
        };
    }else{
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );

        let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
            gridCurrentDay,
            isAKeyPoint: false,
            startTime: startTime,
            eventId: dragStartEventId,
            durationTime: dragStartDuration,
        });
        StoreScheduleResultEvents.AddRelease( ScheduleEvent.id, dragStartReleaseId );
        StoreScheduleResultEvents.SetListToStore( true );
    };


};