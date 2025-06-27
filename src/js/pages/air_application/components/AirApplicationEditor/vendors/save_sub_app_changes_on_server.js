
import store                        from './../../../../../redux/store.js';
import { setSpinnerIsActive }       from './../../../../../redux/spinnerSlice.js';
import { send_request_to_server }   from './../../../../../helpers/send_request_to_server.js';

import { set_application_data_to_store } from './set_application_data_to_store.js';

export const save_sub_app_changes_on_server = ( params ) => {
    let {
        subApplicationId,
        
        changedData,
        callback,
    } = params;

    let { application } = store.getState();

    let {
        currentApplicationId,
        applicationById,

        currentAppName,
        currentAppCategoryId,
        currentAppNum,
        currentAppManagerNotes,

    } = application;


    let { sub_application_list } = applicationById[ currentApplicationId ];

    let subApplication = {};

    for( let i = 0; i < sub_application_list.length; i++ ){
        let { id } = sub_application_list[ i ];
        if( id === subApplicationId ){
            subApplication = { ...sub_application_list[ i ] };
            break;
        };
    };

    store.dispatch( setSpinnerIsActive( true ) );

    send_request_to_server({
        route: `seve-application-data`,
        data: { 
            applicationId:              currentApplicationId,
            applicationName:            currentAppName,
            applicationCategoryId:      currentAppCategoryId,
            applicationNum:             currentAppNum,
            applicationManagerNotes:    currentAppManagerNotes,

            subApplication:             { ...subApplication, ...changedData },
        },

        successCallback: ( response ) => {

            console.dir( 'response' );
            console.dir( response );

            if( response.ok ){

                set_application_data_to_store( response.application, response.applicationList );

                store.dispatch( setSpinnerIsActive( false ) );

                callback( response );

            };

        },
    });




}