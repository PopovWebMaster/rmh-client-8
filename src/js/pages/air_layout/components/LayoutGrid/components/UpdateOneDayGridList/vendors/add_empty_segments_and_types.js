
import { get_data_for_completed_segment }   from './get_data_for_completed_segment.js';
import { get_data_for_empty_segment }       from './get_data_for_empty_segment.js';

export const add_empty_segments_and_types = ( sectors_arr ) => {

    let result = [];

    for( let sectorIndex = 0; sectorIndex < sectors_arr.length; sectorIndex++ ){

        let {
            sector_start_time,
            sector_completed_duration,
            sector_duration,
            sector_list,
        } = sectors_arr[ sectorIndex ];

        let list = [];
        let next_point = sector_start_time;



        if( sectorIndex === 0 ){
            if( sector_start_time > 0 ){
                let empty_segment = get_data_for_empty_segment( 0, sector_start_time - 1 );
                list.push( empty_segment );
            };
        };


        for( let i = 0; i < sector_list.length; i++ ){
            let {
                startTime,
                durationTime,
            } = sector_list[ i ];

            if( next_point === startTime ){
                list.push( get_data_for_completed_segment( sector_list[ i ] ) );
                next_point = next_point + durationTime + 1;
                // next_point = next_point + durationTime;




            }else{
                let empty_segment = get_data_for_empty_segment( next_point, startTime );

                list.push( empty_segment );
                list.push( get_data_for_completed_segment( sector_list[ i ] ) );

                next_point = next_point + durationTime + empty_segment.durationTime;

            };
        };

        let last_empty_segment = get_data_for_empty_segment( next_point, sector_start_time + sector_duration );

        if( last_empty_segment.durationTime > 0 ){
            list.push( last_empty_segment );
        };

        result.push({
            sector_start_time,
            sector_completed_duration,
            sector_duration,
            sector_list: list,
        });


    };

    return result;

};