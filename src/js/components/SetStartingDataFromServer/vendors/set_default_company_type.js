
import store from './../../../redux/store.js';

import { setDefaultCompanyType } from './../../../redux/adminSlice.js';

export const set_default_company_type = ( response ) => {
    let { default_company_type } = response;

    if( default_company_type ){
        store.dispatch( setDefaultCompanyType( default_company_type ) );
    };

};