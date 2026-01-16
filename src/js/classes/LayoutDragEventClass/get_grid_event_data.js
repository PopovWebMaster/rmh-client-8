
import store from './../../redux/store.js';

export const get_grid_event_data = ( gridEventId ) => {
    let { layout } = store.getState();
    let { gridDayEventsListById } = layout;

    let {
        // cutPart,
        // dayNum,
        durationTime,
        eventId,
        firstSegmentId,
        // id,
        isKeyPoint,
        // is_premiere,
        // notes,
        // pushIt,
        startTime,
    } = gridDayEventsListById[ gridEventId ];

    // console.dir( gridDayEventsListById[ 'gridEventId' ] );
    // console.dir( gridDayEventsListById[ gridEventId ] );


    return {
        firstSegmentId,
        isKeyPoint,
        eventId,
        startTime,
        durationTime,
    };

};