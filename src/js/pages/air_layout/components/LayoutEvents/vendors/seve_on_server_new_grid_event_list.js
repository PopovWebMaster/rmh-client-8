
import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

import store from './../../../../../redux/store.js';

import { setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';

export const seve_on_server_new_grid_event_list = ( list, callback ) => {

    store.dispatch( setSpinnerIsActive( true ) );

    send_request_to_server({
        route: `save-grid-event-list`,
        data: { 
            list: list,
        },
        successCallback: ( response ) => {
            console.dir( 'response' );
            console.dir( response );
            if( response.ok ){

                store.dispatch( setSpinnerIsActive( false ) );
                store.dispatch( setGridDayEventsList( response.list ) );
                store.dispatch( setGridDayEventsIsChanges( false ) );

                callback( response );
            };
        },
    });

}