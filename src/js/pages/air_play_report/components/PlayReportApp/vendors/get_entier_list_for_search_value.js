
import store from './../../../../../redux/store.js';
import { setEntireList } from './../../../../../redux/playReportSlice.js';
import { setSpinnerIsActive } from './../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../helpers/send_request_to_server.js';


export const get_entier_list_for_search_value = ( callback ) => {
    let { playReport } = store.getState();
    let {
        searchPeriod,
        searchValue
    } = playReport;

    if( searchValue.trim() !== '' ){
        store.dispatch( setSpinnerIsActive( true ) );
        store.dispatch( setEntireList([]) );

        send_request_to_server({
            route: 'get-entier-list-for-search-value',
            data: {
                searchPeriod,
                searchValue,
            },
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                if( resp.ok ){
                    store.dispatch( setEntireList( resp.list ) );
                };

                store.dispatch( setSpinnerIsActive( false ) );
            },
        });
    };
    

};