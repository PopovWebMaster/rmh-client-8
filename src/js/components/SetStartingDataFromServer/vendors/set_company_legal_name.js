
import store from './../../../redux/store.js';
import { setCompanyLegalName } from './../../../redux/companySlice.js';

export const set_company_legal_name = ( response ) => {

    let { companyLegalName } = response;

    if( companyLegalName ){
        store.dispatch( setCompanyLegalName( companyLegalName ) );
    };
};