
import { divide_day_into_sectors_v2 } from './divide_day_into_sectors_v2.js';
import { add_empty_segments_and_types_v2 } from './add_empty_segments_and_types_v2.js';


export const get_grid_one_day_list_by_sector = ( day_array ) => {

    let sectors_arr_2 = divide_day_into_sectors_v2( day_array );

    let with_empty_arr_2 = add_empty_segments_and_types_v2( sectors_arr_2 );

    return with_empty_arr_2;

}