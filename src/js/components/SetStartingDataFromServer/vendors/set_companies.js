
import store from './../../../redux/store.js';

import { setCompanies } from './../../../redux/adminSlice.js';

export const set_companies = ( response ) => {

    let { companies } = response;

    if( companies ){
        store.dispatch( setCompanies( companies ) );
    };
};