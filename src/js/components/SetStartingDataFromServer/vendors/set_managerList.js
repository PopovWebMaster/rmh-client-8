

import store from './../../../redux/store.js';


import { setManagersList } from './../../../redux/applicationSlice.js';


export const set_managerList = ( response ) => {
    let { 
        managerList
    } = response;

    if( managerList ){

        store.dispatch( setManagersList( managerList ) );

    };

};