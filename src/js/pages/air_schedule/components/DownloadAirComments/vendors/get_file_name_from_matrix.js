
import store from './../../../../../redux/store.js';

import { get_YYYY_MM_DD } from './../../../../../helpers/get_YYYY_MM_DD.js';
import { convert_sec_to_time } from './../../../../../helpers/convert_sec_to_time.js';

export const get_file_name_from_matrix = ( matrix ) => {

    let { scheduleResult } = store.getState();
    let {
        calendarYear,
        currentDate,
        currentMonth,
    } = scheduleResult;

    let YYYY_MM_DD = get_YYYY_MM_DD( calendarYear, currentMonth, currentDate );

    let result = YYYY_MM_DD;

    if( matrix[ 0 ] ){
        let { startTime } = matrix[ 0 ];
        let first_time = convert_sec_to_time( startTime, true );
        let last_time = convert_sec_to_time( matrix[ matrix.length - 1 ].startTime + matrix[ matrix.length - 1 ].duration, true );
        result = `${ first_time }-${ last_time } ${YYYY_MM_DD}`;
    };

    result = `${result}.airx`;
    // result = `${result}.txt`;


    return result;


};