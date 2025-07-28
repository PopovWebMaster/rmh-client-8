import store from './../../../redux/store.js';

export const get_grid_event_by_id = ( grid_event_id ) => {

    let { scheduleResult, layout } = store.getState();
    
    let { scheduleEventsListByGridEventId } = scheduleResult;
    let { gridDayEventsListById } = layout;


    let result = null;

    if( gridDayEventsListById[ grid_event_id ] ){
        result = { ...gridDayEventsListById[ grid_event_id ] };
    }else{


    };

    
    // if( scheduleEventsListByGridEventId[ grid_event_id ] ){
    //     result = { ...scheduleEventsListByGridEventId[ grid_event_id ] };
    // }else{


    // };

    return result;


};