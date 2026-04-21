
import store from './../../../../../redux/store.js';
import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';


export const get_application_list_for_period_from_server = ( params ) => {

    let {
        period_from,
        period_to,
        eventId,
        applicationId,
        callback,
    } = params;

    store.dispatch( setSpinnerIsActive( true ) );

    send_request_to_server({
        route: 'get_application_list_for_period',
        data:{
            period_from,
            period_to,
            eventId,
            applicationId,
        },
        successCallback: ( response ) => {

            console.dir( 'response' );
            console.dir( response );

            if( response.ok ){
                let { list } = response;

                callback( list );
                
                store.dispatch( setSpinnerIsActive( false ) );
                
            };

        },
    });

}