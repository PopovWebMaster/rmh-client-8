
import store from './../../../../../redux/store.js';

import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';
import { setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../redux/layoutSlice.js';
// import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

import { save_only_this_grid_events_day_on_server } from './save_only_this_grid_events_day_on_server.js';

export const save_grid_events_changes_on_server = ( callback ) => {

    let { layout } = store.getState();

    let { gridDayEventsIsChanges, /*gridDayEventsList*/ } = layout;

    if( gridDayEventsIsChanges ){
    
        store.dispatch( setSpinnerIsActive( true ) );

        save_only_this_grid_events_day_on_server( ( response ) => {

            console.dir( 'response' );
            console.dir( response );

            if( response.ok ){
                store.dispatch( setSpinnerIsActive( false ) );
                store.dispatch( setGridDayEventsIsChanges( false ) );
                callback( response );
            };
        } );

        // send_request_to_server({
        //     route: `save-grid-event-list`,
        //     data: { 
        //         list: gridDayEventsList,
        //     },
        //     successCallback: ( response ) => {
        //         console.dir( 'response' );
        //         console.dir( response );
        //         if( response.ok ){
        //             store.dispatch( setSpinnerIsActive( false ) );
        //             store.dispatch( setGridDayEventsList( response.list ) );
        //             store.dispatch( setGridDayEventsIsChanges( false ) );
        //             callback();
        //         };

        //     },
        // });
        
    }else{
        callback();
    };

}