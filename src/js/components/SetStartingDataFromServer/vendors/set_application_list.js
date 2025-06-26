
import store from './../../../redux/store.js';

import { setApplicationList } from './../../../redux/applicationSlice.js';

export const set_application_list = ( response ) => {


    let { applicationList } = response;
    
    if( applicationList ){
        store.dispatch( setApplicationList( applicationList ) );
    };
};