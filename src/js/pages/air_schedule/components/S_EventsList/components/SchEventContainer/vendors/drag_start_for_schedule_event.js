
import start from './../../../../../../../redux/store.js';

import { START_FROM } from './../../../../../../../config/scheduleResult.js';
import { ScheduleReleaseDragEventClass } from './../../../../../../../classes/ScheduleReleaseDragEventClass.js';


export const drag_start_for_schedule_event = ( gridEventId ) => {

    let { scheduleResult } = start.getState();
    let { scheduleEventsListByGridEventId } = scheduleResult;

    let {
        durationTime,
        eventId,
        startTime,
    } = scheduleEventsListByGridEventId[ gridEventId ]

    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
    ScheduleReleaseDragEvent.SetStartFrom( START_FROM.SCHEDULE_EVENT );
    ScheduleReleaseDragEvent.DragStart.SetStartTime( startTime );
    ScheduleReleaseDragEvent.DragStart.SetDuration( durationTime );
    ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
    ScheduleReleaseDragEvent.DragStart.SetGridEventId( gridEventId );
    ScheduleReleaseDragEvent.DragStart.SetToStore();

}