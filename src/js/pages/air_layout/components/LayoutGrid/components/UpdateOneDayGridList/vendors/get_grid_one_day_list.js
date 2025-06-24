
import { get_data_for_completed_segment }   from './get_data_for_completed_segment.js';
import { get_data_for_empty_segment }       from './get_data_for_empty_segment.js';

export const get_grid_one_day_list = ( day_array ) => {

    let result = [];
    let next_point = 0;
    let last_point = 24 * 60 * 60 - 1;

    for( let i = 0; i < day_array.length; i++ ){
        let {
            startTime,
            durationTime,
        } = day_array[ i ];

        if( next_point === startTime ){
            result.push( get_data_for_completed_segment( day_array[ i ] ) );
            next_point = next_point + durationTime;

        }else{
            if( startTime > next_point ){

                result.push( get_data_for_empty_segment( next_point, startTime ) );
                result.push( get_data_for_completed_segment( day_array[ i ] ) );

                next_point = next_point + durationTime;

            }else{
                console.error( 'Внимание, ошибка в get_grid_one_day_list !!!!!!!!' );
                console.error( 'startTime меньше чем next_point' );
            };

        };

    };

    result.push( get_data_for_empty_segment( next_point, last_point ) );

    return result;
};