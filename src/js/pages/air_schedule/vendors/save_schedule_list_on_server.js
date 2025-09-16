
import store from './../../../redux/store.js';
import { setScheduleEventsListIsChanged } from './../../../redux/scheduleResultSlise.js';


import { get_YYYY_MM_DD } from './../../../helpers/get_YYYY_MM_DD.js';

import { send_request_to_server } from './../../../helpers/send_request_to_server.js';


export const save_schedule_list_on_server = ( callback ) => {

    let { scheduleResult } = store.getState();

    let {
        currentDate,
        currentDayNum,
        currentMonth,
        currentYear,
        scheduleEventsList,
    } = scheduleResult;

    let YYYY_MM_DD = get_YYYY_MM_DD( currentYear, currentMonth, currentDate );
    let list = [];
    for( let i = 0; i < scheduleEventsList.length; i++ ){
        let item = structuredClone( scheduleEventsList[ i ] );
        item.releases = [];
        list.push( item );
    };

    // console.dir( 'YYYY_MM_DD' );
    // console.dir( YYYY_MM_DD );

    // console.dir( 'list' );
    // console.dir( list );

    send_request_to_server({
        route: 'save-schedule-list',
        data: {
            YYYY_MM_DD,
            list,
        },
        successCallback: ( response ) => {

            // console.dir( 'response' );
            // console.dir( response );

            store.dispatch( setScheduleEventsListIsChanged( false ) );

            


        }
    });


    




};