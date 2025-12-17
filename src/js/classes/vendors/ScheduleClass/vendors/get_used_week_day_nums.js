
import { get_full_day_info_from_day_seconds } from './../../../../helpers/get_full_day_info_from_day_seconds.js';

export const get_used_week_day_nums = ( period_from, period_to ) => {

    let result = {
        '0': false,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
    };

    let date_from_obj = new Date( period_from );
    let from_sec = date_from_obj.getTime() / 1000;
    let date_to_obj = new Date( period_to );
    let to_sec = date_to_obj.getTime() / 1000;

    let count = 0;
    let flag = true;

    let current_sec = from_sec;
    while( flag ){

        if( count > 6 ){
            break;
        };

        if( current_sec > to_sec ){
            break;
        };

        let { dayNum } = get_full_day_info_from_day_seconds( current_sec );
        result[ dayNum ] = true;
        count++;
        current_sec = current_sec + (24*60*60);

    }


    return result;



    



};