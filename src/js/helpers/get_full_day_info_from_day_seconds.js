
import { WEEK_NAME, WEEK_NAME_SHORT } from './../config/week.js';

export const get_full_day_info_from_day_seconds = ( seconds ) => {

    let result = {
        YYYY_MM_DD: '',
        year: 0,
        mounth: 0,
        date: 0,
        dayNum: 0,
        dayName: '',
        dayNameShort: '',

    };

    let date_obj = new Date( seconds * 1000 );

    let year = date_obj.getFullYear();
    let mounth = date_obj.getMonth();
    let date = date_obj.getDate();
    let day = date_obj.getDay();
    if( day > 0 ){
        day = day - 1;
    }else{
        day = 6;
    };

    let YYYY = `${year}`.padStart( 4, "0" );

    let MM = `${mounth + 1}`.padStart( 2, "0" )
    let DD = `${date}`.padStart( 2, "0" );

    result.YYYY_MM_DD = `${YYYY}-${MM}-${DD}`;
    result.year = year;
    result.mounth = mounth;
    result.date = date;
    result.dayNum = day;
    result.dayName = WEEK_NAME[ day ];
    result.dayNameShort = WEEK_NAME_SHORT[ day ];

    return result;

}