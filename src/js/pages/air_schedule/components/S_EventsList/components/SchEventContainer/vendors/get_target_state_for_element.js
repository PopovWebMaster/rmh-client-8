
import { complet_element_is_target } from './complet_element_is_target.js';
import { empty_element_is_target } from './empty_element_is_target.js';

export const get_target_state_for_element = ( params ) => {
    let {
        durationTime,
        eventId,
        eventType,
        gridEventId,
        isEmpty,
        isCompletd,

    } = params;

    let result = false;

    if( isEmpty ){
        result = empty_element_is_target( { durationTime } );
    }else{
        result = complet_element_is_target({
            eventId,
            eventType,
            gridEventId,
        });
    };
    return result;

};