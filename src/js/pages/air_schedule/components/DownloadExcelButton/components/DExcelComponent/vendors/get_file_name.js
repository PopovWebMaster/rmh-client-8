import { WEEK_NAME } from './../.././../../../../../config/week.js';
import { MOUNTH_NAME } from './../.././../../../../../config/mounth.js';

export const get_file_name = ( params ) => {
    let {
        currentDate,
        currentDayNum,
        currentMonth,
        currentYear,
        exportType = 'schedule', // 'schedule' TV_program
    } = params;
    let title = '---';
    if( exportType === 'schedule' ){
        title = 'Расписание передач';
    }else if( exportType === 'TV_program' ){
        title = 'Программа передач';
    };

    return `${ title } - ${currentDate} ${ MOUNTH_NAME[ currentMonth ] } ${currentYear} ${WEEK_NAME[ currentDayNum ]}.xlsx`;
}