// import { complet_element_is_target } from './complet_element_is_target.js';
// import { empty_element_is_target } from './empty_element_is_target.js';

// import store from './../../../../../../../redux/store.js';

// import { START_FROM } from './../../../../../../../config/scheduleResult.js';
import { empty_elem_is_aparticipant } from './empty_elem_is_aparticipant.js';
import { complete_elem_is_aparticipant } from './complete_elem_is_aparticipant.js';

export const target_event_is_aparticipant = ( params ) => {
    let {
        startTime,
        durationTime,
        eventId,
        eventType,
        gridEventId,
        isEmpty,
        isCompletd,

    } = params;
    // let { scheduleResultDragEvent } = store.getState();
    // let { dragStartFrom } = scheduleResultDragEvent;

    let result = false;

    if( isEmpty ){
        // result = true;
        result = empty_elem_is_aparticipant({
            durationTime, 
            startTime,
        });
    }else{
        // result = true;
        result = complete_elem_is_aparticipant({
            gridEventId,
        });
    };


    return result;

}