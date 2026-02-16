
import store from './../../../../../../redux/store.js';

import { get_YYYY_MM_DD } from './../../../../../../helpers/get_YYYY_MM_DD.js';
import { WEEK } from './../../../../../../config/week.js';

export const get_table_title = () => {
    let { scheduleResult } = store.getState();
    let { currentMonth, currentDate, calendarYear, currentDayNum } = scheduleResult;
    let YYYY_MM_DD = get_YYYY_MM_DD( calendarYear, currentMonth, currentDate );
    let arr = YYYY_MM_DD.split( '-' );
    arr.reverse();
    let DD_MM_YYYY = arr.join( '-' );
    let dayName = WEEK[ currentDayNum ].FULL_NAME.toUpperCase();

    return `ПЛЕЙ-ЛИСТ ${dayName} ${DD_MM_YYYY}`;



}