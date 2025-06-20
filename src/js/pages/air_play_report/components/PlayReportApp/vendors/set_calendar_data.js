
import store from './../../../../../redux/store.js';

import { 
    setMonth,
    setMonthTitle,
    setYear,
    setMonthCalendar,
} from './../../../../../redux/playReportSlice.js';

import { get_month_calendar } from './get_month_calendar.js';

import { MONTH_NANES } from './../../../../../config/playReport.js';
 

// let titles = {
//     '1': 'Январь',
//     '2': 'Февраль',
//     '3': 'Март',
//     '4': 'Апрель',
//     '5': 'Май',
//     '6': 'Июнь',
//     '7': 'Июль',
//     '8': 'Август',
//     '9': 'Сентябрь',
//     '10': 'Октябрь',
//     '11': 'Ноябрь',
//     '12': 'Декабрь',
// };


export const set_calendar_data = ( year, month ) => {
    /*
        месяца начинаются с 1 до 12
    */

    let { playReport } = store.getState();
    let { 
        min_year,
        max_year,
        min_month,
        max_month,
    } = playReport;

    let set_func = () => {

        store.dispatch( setYear( year ) );
        store.dispatch( setMonth( month ) );
        store.dispatch( setMonthTitle( MONTH_NANES[ month ] ) );
        store.dispatch( setMonthCalendar( get_month_calendar( year, month ) ) );

    }

    if( year === min_year && year === max_year ){
        if( month >= min_month && month <= max_month ){
            set_func();
        };
    }else{
        if( year === min_year ){
            if( month >= min_month ){
                set_func();
            };
        }else if( year === max_year ){
            if( month <= max_month ){
                set_func();
            };
        }else if( year > min_year && year < max_year ){
            set_func();
        };

    };

    
};