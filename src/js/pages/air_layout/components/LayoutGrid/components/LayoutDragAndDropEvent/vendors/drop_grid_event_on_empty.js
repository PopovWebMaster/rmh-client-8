
import store from './../../../../../../../redux/store.js';

import { set_grid_event_changes_to_store } from './../../../vendors/set_grid_event_changes_to_store.js';

export const drop_grid_event_on_empty = ( startTimeNext ) => {

    let { layoutDragEvent } = store.getState();
    let { dragStartGridEventId } = layoutDragEvent;

    set_grid_event_changes_to_store( dragStartGridEventId, { startTime: startTimeNext } );

}