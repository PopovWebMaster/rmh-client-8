
import store from './../../../redux/store.js';
import { setCompanyList } from './../../../redux/companySlice.js';

export const set_company_list = ( response ) => {

    let { companyList } = response;

    if( companyList ){
        store.dispatch( setCompanyList( companyList ) );
    };

};