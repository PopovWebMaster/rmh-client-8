
import { get_full_day_info_from_day_seconds } from './../../../helpers/get_full_day_info_from_day_seconds.js';

export const get_day_data_for_start = () => {

    let dateObj = new Date();
    let now_seconds = dateObj.getTime() / 1000;

    let result = {
        date: '',
        dayNum: '',
        month: '',
        year: '',
    };

    let seconds = 0;

    let last_day_seconds = localStorage.getItem( 'last_day_seconds' );

    // console.dir( 'last_day_seconds' );
    // console.dir( last_day_seconds );


    if( last_day_seconds ){
        let last_seconds = Number( last_day_seconds );
        if( last_seconds > now_seconds ){
            seconds = last_seconds;
        }else{
            seconds = now_seconds;
        };

    }else{
        seconds = now_seconds;
        
    };

    localStorage.setItem( 'last_day_seconds', seconds );

    let { date, dayNum, month, year } = get_full_day_info_from_day_seconds( seconds );

    result.date =   date;
    result.dayNum = dayNum;
    result.month =  month;
    result.year =   year;

    // console.dir( 'result' );
    // console.dir( result );

    return result;
    


}