
import { get_data_for_completed_segment }   from './get_data_for_completed_segment.js';
import { get_data_for_empty_segment }       from './get_data_for_empty_segment.js';

export const add_empty_segments_and_types_v2 = ( sectors_arr ) => {

    let result = [];

    for( let sectorIndex = 0; sectorIndex < sectors_arr.length; sectorIndex++ ){

        let {
            sector_start_time,
            sector_completed_duration,
            sector_duration,
            sector_list,
        } = sectors_arr[ sectorIndex ];

        let list = [];
        let next_startTime = sector_start_time;

        for( let i = 0; i < sector_list.length; i++ ){
            let {
                startTime,
                durationTime,
            } = sector_list[ i ];

            if( startTime === sector_start_time ){
                list.push( get_data_for_completed_segment( sector_list[ i ] ) );
                next_startTime = next_startTime + durationTime + 1;

            }else{

                if( startTime > next_startTime ){

                    let empty_segment = get_data_for_empty_segment( next_startTime, startTime );
                    list.push( empty_segment );
                };
                list.push( get_data_for_completed_segment( sector_list[ i ] ) );
                next_startTime = startTime + durationTime + 1;
                
            };


            if( i === sector_list.length - 1 ){
                if( sector_start_time + sector_duration + 1 > next_startTime ){ 
                    // let empty_segment = get_data_for_empty_segment( next_startTime, sector_start_time + sector_duration + 1 );
                    let empty_segment = get_data_for_empty_segment( next_startTime, sector_start_time + sector_duration );

                    list.push( empty_segment );
                };
            };

        };

        result.push({
            sector_start_time,
            sector_completed_duration,
            sector_duration,
            sector_list: list,
        });
    };

    if( result.length === 1 ){
        if( result[ 0 ].sector_list.length === 0 ){
            let sector_duration = result[ 0 ].sector_duration;
            result[ 0 ].sector_list.push( get_data_for_empty_segment( 0, sector_duration ) );
        };
    };


    



    return result;

};