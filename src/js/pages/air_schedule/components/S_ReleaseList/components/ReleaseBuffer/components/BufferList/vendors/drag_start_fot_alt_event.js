
import store from './../../../../../../../../../redux/store.js';

import { ScheduleReleaseDragEventClass } from './../../../../../../../../../classes/ScheduleReleaseDragEventClass.js';

import { START_FROM } from './../../../../../../../../../config/scheduleResult.js';

export const drag_start_fot_alt_event = ( alt_id ) => {
    let { scheduleResultDragEvent } = store.getState();
    let { altGridEventsListById } = scheduleResultDragEvent;

    let {
        duration,
        gridEventsGroup,
        id,
        eventId,
    } = altGridEventsListById[ alt_id ];

    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
    
    ScheduleReleaseDragEvent.SetStartFrom( START_FROM.ALT_GRID_EVENT );
    ScheduleReleaseDragEvent.DragStart.SetDuration( duration );
    ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
    ScheduleReleaseDragEvent.DragStart.SetAltEventId( id );

    ScheduleReleaseDragEvent.DragStart.SetToStore();


}