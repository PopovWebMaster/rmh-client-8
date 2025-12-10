
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';
import { ResultScheduleClass } from './ResultScheduleClass.js';
import { get_used_events } from './get_used_events.js';

export const download_excel_as_TV_program = ( filterList ) => {

    let { scheduleResult } = store.getState();
    let {
        currentDate,
        currentDayNum,
        currentMonth,
        currentYear,

    } = scheduleResult;

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    let scheduleEventsLlist = StoreScheduleResultEvents.GetScheduleEventsList();
    let used_events = get_used_events( scheduleEventsLlist, filterList, 'TV_program' );

    let ResultSchedule = new ResultScheduleClass();

    ResultSchedule.AddUsedEvents( used_events );

    ResultSchedule.SetCurrentDate( currentDate );
    ResultSchedule.SetCurrentDayNum( currentDayNum );
    ResultSchedule.SetCurrentMonth( currentMonth );
    ResultSchedule.SetCurrentYear( currentYear );

    ResultSchedule.DownloadAsTVProgram();


}