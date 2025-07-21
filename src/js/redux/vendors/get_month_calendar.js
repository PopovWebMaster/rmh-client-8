

import { get_days_in_month } from './get_days_in_month.js';
import { get_YYYY_MM_DD } from './../../helpers/get_YYYY_MM_DD.js';

export const get_month_calendar = ( year, month ) => {

    let month_num = month + 1;
    if( month_num === 13 ){
        month_num = 1;
    };

    get_YYYY_MM_DD

    // let date = new Date( `${year}-${month+1}-1`);
    let date = new Date( get_YYYY_MM_DD( year, month, 1 ) );
    // console.dir( 'month' );
    // console.dir( month );


    // let number_days = get_days_in_month( year, month+1 );
    let number_days = get_days_in_month( year, month_num );

    let first_day = date.getDay();

    if( first_day === 0 ){
        first_day = 7;
    };

    let result = [];

    let len = number_days + first_day;

    let start = false;

    let next_day = 1;
    let next_date = 1;

    for( let i = 1; i < len + 1; i++ ){

        let item = {
            day: next_day,
            date: null,
        };

        if( start ){
            item.date = next_date;
            next_date = next_date + 1;
            
        }else{
            if( i === first_day ){
                start = true;
                item.date = next_date;
                next_date = next_date + 1;
            };
        };

        if( next_day === 7 ){
            next_day = 1;
        }else{
            next_day = next_day + 1;
        };

        result.push( item );

        if( number_days < next_date ){
            break;
        };

    };

    return result;
};