
import store from './../../redux/store.js';

export const get_start_time_limit = ( gridEventId ) => {

    let { layout } = store.getState();
    let {
        gridCurrentDay,
        gridDayEventsList,
        gridDayEventsListById,
    } = layout;

    let {
        // durationTime,
        // eventId,
        // startTime,
        firstSegmentId,

    } = gridDayEventsListById[ gridEventId ];

    let list = gridDayEventsList[ gridCurrentDay ];

    let minStartTime = 0;
    let maxStartTime = 24*60*60;

    if( firstSegmentId === null ){

    }else{
        for( let i = 0; i < list.length; i++ ){
            if( list[ i ].id === gridEventId ){
                if( list[ i ].firstSegmentId === gridEventId ){
                    if( list[ i + 1 ] ){
                        for( let z = i + 1; z <list.length; z++ ){
                            if( list[ z ].firstSegmentId === firstSegmentId || list[ z ].isKeyPoint === true ){
                                maxStartTime = list[ z ].startTime;
                                break;
                            };
                        };
                    };
                }else{
                    if( list[ i - 1 ] ){
                        for( let y = i - 1; y >=0; y-- ){
                            if( list[ y ].firstSegmentId === firstSegmentId || list[ y ].isKeyPoint === true ){
                                minStartTime = list[ y ].startTime;
                                break;
                            };
                        };
                    };
                    if( list[ i + 1 ] ){
                        for( let z = i + 1; z < list.length; z++ ){
                            if( list[ z ].firstSegmentId === firstSegmentId || list[ z ].isKeyPoint === true ){
                                maxStartTime = list[ z ].startTime;
                                break;
                            };
                        };
                    };
                };
                break;
            };
        };
    };

    return {
        minStartTime,
        maxStartTime,
    };

};