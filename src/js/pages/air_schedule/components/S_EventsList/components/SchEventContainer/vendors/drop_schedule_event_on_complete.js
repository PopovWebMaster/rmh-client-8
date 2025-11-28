

import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

export const drop_schedule_event_on_complete = ( gridEventId ) => {

    /*
        Решил, что пока это не нужно
    
    */

    let { scheduleResultDragEvent, scheduleResult } = store.getState();
    let { dragStartGridEventId } = scheduleResultDragEvent;
    let { scheduleEventsListByGridEventId, scheduleEventsList } = scheduleResult;
    let { releases } = scheduleEventsListByGridEventId[ dragStartGridEventId ];


    console.dir( scheduleEventsListByGridEventId[ dragStartGridEventId ] );

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    
    StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );

}