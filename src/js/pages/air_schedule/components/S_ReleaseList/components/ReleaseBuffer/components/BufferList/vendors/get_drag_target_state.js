
import store from './../../../../../../../../../redux/store.js';
import { START_FROM } from './../../../../../../../../../config/scheduleResult.js'

export const get_drag_target_state = () => {
    let result = false;

    let { scheduleResultDragEvent } = store.getState();

    let { dragStartFrom, altKayList } = scheduleResultDragEvent;

    
    if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){
        let arr = Object.keys( altKayList );
        if( arr.length > 0 ){
            result = true;
        };
    };
    

    return result;


};