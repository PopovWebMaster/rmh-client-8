import { WEEK_NAME } from './../.././../../../../../config/week.js';
import { MOUNTH_NAME } from './../.././../../../../../config/mounth.js';

export const get_file_name = ( params ) => {
    let {
        currentDate,
        currentDayNum,
        currentMonth,
        currentYear,
    } = params;

    return `Расписание передач - ${currentDate} ${ MOUNTH_NAME[ currentMonth ] } ${currentYear} ${WEEK_NAME[ currentDayNum ]}.xlsx`;
}