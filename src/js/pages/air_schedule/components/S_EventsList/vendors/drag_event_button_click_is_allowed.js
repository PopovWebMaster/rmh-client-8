
import store from './../../../../../redux/store.js'

export const drag_event_button_click_is_allowed = ( e ) => {
    let { scheduleResultDragEvent } = store.getState();
    let { altKayList } = scheduleResultDragEvent;

    let result = true;

    let arr = Object.keys( altKayList );
    if( arr.length > 0  ){
        result = false;
    }else{
        if( e.altKey === true || e.shiftKey === true || e.ctrlKey === true ){
            result = false;
        };
    };

    return result;
    
}