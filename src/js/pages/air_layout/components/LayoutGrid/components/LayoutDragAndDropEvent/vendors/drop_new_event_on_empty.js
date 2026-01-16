
import store from './../../../../../../../redux/store.js';
import { create_new_grid_event_on_server } from './../../../vendors/create_new_grid_event_on_server.js';

export const drop_new_event_on_empty = ( startTimeNext, callback = () => {} ) => {
    let { layoutDragEvent, layout } = store.getState();
    let { dragStartEventId, dragStartDuration } = layoutDragEvent;
    let { gridCurrentDay } = layout;

    create_new_grid_event_on_server({
        dayNum: gridCurrentDay,
        isAKeyPoint: false,
        startTime: startTimeNext,
        eventId: dragStartEventId,
        durationTime: dragStartDuration,
        callback,
    });

}