import store from './../../../../../redux/store.js';
import { get_days_in_month } from './../../../../../helpers/get_days_in_month.js';

export const get_month_calendar = ( year, month ) => {

    let { playReport } = store.getState();
    let { playReportList } = playReport;

    let date = new Date( `${year}-${month}-1`);

    let number_days = get_days_in_month( year, month );
    let first_day = date.getDay();

    if( first_day === 0 ){
        first_day = 7;
    };

    let result = [];

    let len = number_days + first_day;

    let start = false;

    let next_day = 1;
    let next_date = 1;

    let month_str = String( month ).padStart(2,'0')

    for( let i = 1; i < len + 1; i++ ){

        let item = {
            day: next_day,
            date: null,
            file: false,
        };

        if( start ){
            item.date = next_date;
            
            if( playReportList[`${year}-${month_str}-${String( next_date ).padStart(2,'0')}`] ){
                item.file = true;
            };
            next_date = next_date + 1;
            
        }else{
            if( i === first_day ){
                start = true;
                item.date = next_date;
                // console.dir( `${year}-${month_str}-${String( next_date ).padStart(2,'0')}` );

                if( playReportList[ `${year}-${month_str}-${String( next_date ).padStart(2,'0')}`] ){
                    // console.dir( `${year}-${month_str}-${String( next_date ).padStart(2,'0')}` );
                    item.file = true;
                };
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