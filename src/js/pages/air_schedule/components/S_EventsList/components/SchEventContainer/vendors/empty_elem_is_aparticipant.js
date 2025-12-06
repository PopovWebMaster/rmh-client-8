
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
        dragStartGridEventId,

        dragStartMinStartTime,
        dragStartMaxStartTime,
    } = scheduleResultDragEvent;


    let result = false;

    if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){

        if( startTime >= dragStartMinStartTime && startTime < dragStartMaxStartTime ){
            if( durationTime >= dragStartDuration ){
                result = true;
            };
        };



    }else{
        if( durationTime >= dragStartDuration ){
            result = true;
        };
    };



    return result;
}