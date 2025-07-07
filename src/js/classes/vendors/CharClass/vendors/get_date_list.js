
import { get_full_day_info_from_day_seconds } from './../../../../helpers/get_full_day_info_from_day_seconds.js';

export const get_date_list = ( period_from, period_to ) => {

    let result = [];

    let date_from = new Date( period_from );
    let seconds_from = date_from.getTime() / 1000;

    let date_to = new Date( period_to );
    let seconds_to = date_to.getTime()/1000;

    let oneDaySec = 24 * 60 * 60;

    let next_day = seconds_from;
    let flag = true;

    while( flag ){
        if( next_day < seconds_to ){
            result.push( get_full_day_info_from_day_seconds( next_day ) );
            next_day = next_day + oneDaySec;
        }else{
            flag = false;
            result.push( get_full_day_info_from_day_seconds( seconds_to ) );
            break;
        };
    };

    return result;

};