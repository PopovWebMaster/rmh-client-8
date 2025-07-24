import store from './../../../redux/store.js';

export const get_grid_event_by_id = ( grid_event_id ) => {

    let { scheduleResult } = store.getState();
    
    let { scheduleEventsListByGridEventId } = scheduleResult;
    let result = null;

    
    if( scheduleEventsListByGridEventId[ grid_event_id ] ){
        result = { ...scheduleEventsListByGridEventId[ grid_event_id ] };
    }else{


    };

    return result;


};