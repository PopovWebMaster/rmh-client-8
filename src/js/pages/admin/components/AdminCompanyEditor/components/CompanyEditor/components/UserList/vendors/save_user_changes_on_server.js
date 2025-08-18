
import store                        from './../../../../../../../../../redux/store.js';
import { setSpinnerIsActive }       from './../../../../../../../../../redux/spinnerSlice.js';
import { send_request_to_server }   from './../../../../../../../../../helpers/send_request_to_server.js';

import { set_current_company_data_to_store } from './../../../../../../../vendors/set_current_company_data_to_store.js';

export const save_user_changes_on_server = ( params ) => {
    let {
        userId,
        changedData,
        callback,
    } = params;

    let { admin } = store.getState();
    let { userDataById, currentCompanyId } = admin;

    store.dispatch( setSpinnerIsActive( true ) );

    send_request_to_server({
            route: `change-user-data`,

            data: { 
                companyId: currentCompanyId,
                userId,
                userData: { ...userDataById[ userId ], ...changedData },
            },
    
            successCallback: ( response ) => {
    
                console.dir( 'response' );
                console.dir( response );
    
                if( response.ok ){
    
                    set_current_company_data_to_store( response.company );
    
                    store.dispatch( setSpinnerIsActive( false ) );
    
                    callback( response );
    
                };
    
            },
        });


    // callback();

};