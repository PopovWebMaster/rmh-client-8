

import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_app_release_on_empty = ( startTime, event_id ) => {

    let { scheduleResultDragEvent } = store.getState();
    // let { gridCurrentDay } = layout;
    // let { scheduleEventsList } = scheduleResult;

    let { 
        // dragStartDuration,
        // // dragStartEventId,
        // dragStartFileName,
        // dragStartStartTime,
        dragStartReleaseId,
    } = scheduleResultDragEvent;


    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    StoreScheduleResultEvents.CreateNewGridEvent({
        startTime:      startTime,
        eventId:        event_id,
    });
    StoreScheduleResultEvents.AddLinkedFileReleasesToNewGridEvent();
    StoreScheduleResultEvents.AddAppRelease({
        releaseId: dragStartReleaseId
    });

    StoreScheduleResultEvents.AddNewGridEvent();





    // StoreScheduleResultEvents.SetListToStore( true );

    // let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
    //     gridCurrentDay,
    //     isAKeyPoint:    false,
    //     startTime:      startTime,
    //     eventId:        event_id,
    //     durationTime:   dragStartDuration,
    // });
    // StoreScheduleResultEvents.AddRelease( ScheduleEvent.id, dragStartReleaseId );
    // StoreScheduleResultEvents.SetListToStore( true );




    /*

    if( dragStartEventId === null ){
        if( event_id !== null ){

            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            // StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
            StoreScheduleResultEvents.CreateList();

            console.dir( '!!!!!!!!');
            

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

        console.dir( '!!!!!!!!');
        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        // StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
        StoreScheduleResultEvents.CreateList();

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
*/

};