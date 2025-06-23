
import store from './../../../../../redux/store.js';

import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';
import { setEntireList } from './../../../../../redux/playReportSlice.js';

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';

export const get_one_day_entire_list_from_server = ( params ) => {
    let {
        // year,
        date_string,
        // month,
        callback,

    } = params;

    store.dispatch( setEntireList( [] ) );  
    store.dispatch( setSpinnerIsActive( true ) );  



    send_request_to_server({
        route: 'git ',
        data: {
            date_string,
        },
        successCallback: ( response ) => {

            console.dir( 'get_one_day_entire_list_from_server' );
            console.dir( response );

            if( response.ok ){
                store.dispatch( setEntireList( response.list ) ); 
            };

            store.dispatch( setSpinnerIsActive( false ) ); 

            callback( response );
        },
    });



    // send_request_to_server({
    //     route: `${ ROUTE.PAGE.PLAY_REPORT }/get-one-day-entire-list`,
    //     data: {
    //         // year,
    //         // date,
    //         // month,
    //         date_string,
    //     },
    //     callback: ( response ) => {

    //         console.dir( 'get_one_day_entire_list_from_server' );
    //         console.dir( response );

    //         if( response.ok ){
    //             store.dispatch( setEntireList( response.list ) ); 
    //         };

    //         store.dispatch( setSpinnerIsActive( false ) ); 

    //         callback( response );

    //     },
    // });

};