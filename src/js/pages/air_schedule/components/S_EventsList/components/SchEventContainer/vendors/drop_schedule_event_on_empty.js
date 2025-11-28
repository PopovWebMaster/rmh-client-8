

import store from './../../../../../../../redux/store.js';

// import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

import { set_schedule_list_changes_to_store } from './../../../../../vendors/set_schedule_list_changes_to_store.js';

export const drop_schedule_event_on_empty = ( startTimeNext ) => {

    let { scheduleResultDragEvent } = store.getState();
    let { dragStartGridEventId } = scheduleResultDragEvent;

    set_schedule_list_changes_to_store( dragStartGridEventId, { startTime: startTimeNext } );

}