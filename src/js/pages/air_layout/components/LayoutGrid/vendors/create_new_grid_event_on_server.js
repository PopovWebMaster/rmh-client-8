
import store from './../../../../../redux/store.js';

import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';
import { setGridDayEventsIsChanges } from './../../../../../redux/layoutSlice.js';

import { add_new_grid_event_to_current_day_to_store } from './../vendors/add_new_grid_event_to_current_day_to_store.js';

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

export const create_new_grid_event_on_server = ( params ) => {
    let {
        dayNum,
        isAKeyPoint,
        startTime,
        eventId,
        durationTime,
        callback = () => {},
    } = params;


    if( eventId !== null ){
        store.dispatch( setSpinnerIsActive( true ) );
        
        send_request_to_server({
            route: `add-new-grid-event`,
            data: { 
                dayNum,
                isAKeyPoint,
                startTime,
                eventId,
                durationTime,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    store.dispatch( setSpinnerIsActive( false ) );
                    add_new_grid_event_to_current_day_to_store( response.newGridEvent );

                    store.dispatch( setGridDayEventsIsChanges( false ) );
                    callback( response );
                };

            },
        });
    };
}