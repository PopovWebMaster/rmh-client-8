
import store from './../../../../redux/store.js';

import { TimePointClass } from './../TimePointClass.js';

export const get_week_point_list = ( /*TimePoints,*/ event_id ) => {

    let result =  [ [], [], [], [], [], [], [], ];
    let week_point_list =  [ [], [], [], [], [], [], [], ];


    let { layout } = store.getState();
    let { gridDayEventsList } = layout;

    let obj = {};
    let all_time_points = [];

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

                    week_point_list[ dayNum ].push( TimePoint.GetData() );

                    obj[ startTime ] = true;

                    // TimePoints.AddPoint( startTime );
                    
                };
            };
        };
    };



    let arr = [];

    for( let sec in obj ){
        arr.push( Number( sec ) );
    };

    all_time_points = arr.sort( ( a, b ) => {
        if( a > b ){ return 1 };
        if( a < b ){ return -1 };
        if( a === b ){ return 1 };
    } );


    return {
        all_time_points,
        week_point_list,
    };
    
};