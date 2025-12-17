
import store from './../../../../redux/store.js';

import { TimePointClass } from './../TimePointClass.js';
import { get_full_day_info_from_day_seconds } from './../../../../helpers/get_full_day_info_from_day_seconds.js';
import { get_used_week_day_nums } from './get_used_week_day_nums.js';


export const get_week_point_list = ( event_id, SubApplication ) => {

    let result =  [ [], [], [], [], [], [], [], ];
    let week_point_list =  [ [], [], [], [], [], [], [], ];

    let releaseList = SubApplication.GetReleaseList();
    let period_from = SubApplication.period_from;
    let period_to = SubApplication.period_to;


    let usedDayNum = get_used_week_day_nums( period_from, period_to );



    let { layout } = store.getState();
    let { gridDayEventsList, gridDayEventsListById } = layout;

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

                    

                    if( usedDayNum[ dayNum ] === true ){
                        week_point_list[ dayNum ].push( TimePoint.GetData() );
                        obj[ startTime ] = true;
                    };

                    

                    // TimePoints.AddPoint( startTime );
                    
                };
            };
        };
    };


    for( let i = 0; i < releaseList.length; i++ ){
        let { grid_event_id, time_sec, duration_sec, date } = releaseList[ i ];
        if( gridDayEventsListById[ grid_event_id ] ){

        }else{
            // console.dir( 'нашёл' );
            // console.dir( releaseList[ i ] );

            let date_to = new Date( date );
            let seconds_to = date_to.getTime()/1000;

            let dateInfo = get_full_day_info_from_day_seconds( seconds_to );
            // dayNum

            let TimePoint = new TimePointClass({ 
                time_sec:       time_sec,
                grid_event_id:  grid_event_id,
                duration:       duration_sec,
            });

            week_point_list[ dateInfo.dayNum ].push( TimePoint.GetData() );

            // console.dir( dateInfo );

        };

    }





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