
import store from './../../../../../redux/store.js';

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';


export const save_only_this_grid_events_day_on_server = ( callback ) => {

    let { layout } = store.getState();

    let { gridDayEventsList, gridCurrentDay } = layout;

    // isKeyPoint

    send_request_to_server({
        // route: `save-grid-event-list`,
        route: `save-grid-event-list-for-one-day`,

        data: { 
            gridDayList: gridDayEventsList[ gridCurrentDay ],
        },
        successCallback: ( response ) => {
            // console.dir( 'response' );
            // console.dir( response );

            // if( response.ok ){
               
                callback( response );
            // };

        },
    });




}