
import store from './../../../../../../../redux/store.js';

import { START_FROM } from './../../../../../../../config/scheduleResult.js';
import { empty_elem_is_neighbor } from './empty_elem_is_neighbor.js';

export const empty_elem_is_aparticipant = ( params  ) => {
    let {
        durationTime, 
        startTime,
    } = params

    let { scheduleResultDragEvent } = store.getState();
    let { 
        dragStartDuration,
        dragStartFrom,
        dragStartStartTime,
    } = scheduleResultDragEvent;

    let result = false;

    if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){

        // let is_neighbor = empty_elem_is_neighbor({
        //     durationTime, 
        //     startTime,
        //     dragStartStartTime,
        //     dragStartDuration,
        // });

        // if( is_neighbor ){

        // }else{
            if( durationTime >= dragStartDuration ){
                result = true;
            };
        // };

    }else{
        if( durationTime >= dragStartDuration ){
            result = true;
        };
    };



    return result;
}