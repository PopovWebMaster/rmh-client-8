
import store from './../../../../redux/store.js';

import { TimePointClass } from './../TimePointClass.js';

export const get_week_point_list = ( TimePoints, event_id ) => {
    let result =  [ [], [], [], [], [], [], [], ];

    let { layout } = store.getState();
    let { gridDayEventsList } = layout;

    for( let dayNum = 0; dayNum < 7; dayNum++ ){
        for( let i = 0; i < gridDayEventsList[ dayNum ].length; i++ ){
            let {
                id,
                durationTime,
                eventId,
                firstSegmentId,
                startTime,
            } = gridDayEventsList[ dayNum ][ i ];

            if( eventId === event_id ){
                if( firstSegmentId === null || firstSegmentId === id ){

                    let TimePoint = new TimePointClass({ 
                        time_sec:       startTime,
                        grid_event_id:  id,
                        duration:       durationTime,
                    });

                    result[ dayNum ].push( TimePoint.GetData() );

                    TimePoints.AddPoint( startTime );
                    
                };
            };
        };
    };

    return result;
    
};