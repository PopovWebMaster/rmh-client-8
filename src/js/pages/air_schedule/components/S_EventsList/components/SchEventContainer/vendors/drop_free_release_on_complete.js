
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

import { get_event_by_id } from './../../../../../../../helpers/get_event_by_id.js';


export const drop_free_release_on_complete = ( gridEventId ) => {

    let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
    let { 
        // dragStartFrom,
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
        dragStartCategoryId,
        dragStartFileName,
    } = scheduleResultDragEvent;

    let { gridCurrentDay } = layout;
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