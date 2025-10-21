// import store from './../../../redux/store.js';

// import { setFilePrefixList } from './../../../redux/airFilesSlice.js';

import { set_air_file_prefix_list_to_store } from './../../../pages/air_files/vendors/set_air_file_prefix_list_to_store.js';

export const set_file_prefix_list = ( response ) => {

    let { airFilePrefix } = response;

    if( airFilePrefix ){
        // store.dispatch( setFilePrefixList( airFilePrefix ) );
        set_air_file_prefix_list_to_store( airFilePrefix );
    };
};