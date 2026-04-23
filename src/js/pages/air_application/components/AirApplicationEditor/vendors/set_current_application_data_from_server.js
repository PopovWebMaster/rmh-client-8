
import store from './../../../../../redux/store.js';
import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js'

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

import { set_application_data_to_store } from './set_application_data_to_store.js';

export const set_current_application_data_from_server = ( callback = () => {}) => {
    let {
        application
    } = store.getState();
    let { currentApplicationId } = application;

    store.dispatch( setSpinnerIsActive( true ) );

    send_request_to_server({
        route: `get-application-data`,
        data: { 
            applicationId: currentApplicationId,
        },

        successCallback: ( response ) => {
            console.dir( 'response' );
            console.dir( response );

            if( response.ok ){
                set_application_data_to_store( response.application );
                store.dispatch( setSpinnerIsActive( false ) );

                callback( response );
            };

        },
    });

}