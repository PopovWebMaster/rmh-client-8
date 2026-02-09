import store from './../../../../../../../../../redux/store.js';

import { cleare_altKey_list } from './../../../../../../../components/S_EventsList/components/SchEventContainer/vendors/cleare_altKey_list.js';
import { get_alt_event_data } from './get_alt_event_data.js';
import { add_alt_event_to_store } from './add_alt_event_to_store.js';

export const drop_schedule_event_on_bufer = () => {

    let { scheduleResultDragEvent, scheduleResult } = store.getState();

    let { scheduleEventsListByGridEventId } = scheduleResult;
    let { altKayList } = scheduleResultDragEvent;

    let altGroup = [];

    for( let gridEventId in altKayList ){
        altGroup.push( structuredClone( scheduleEventsListByGridEventId[ gridEventId ] ) );
    };

    cleare_altKey_list();

    let alt_event = get_alt_event_data( altGroup );

    add_alt_event_to_store( alt_event );


}