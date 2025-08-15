
import store from './../../../redux/store.js';
import { 
    setCurrentCompanyName,
    setCurrentCompanyAlias,
    setCurrentCompanyProgramSystem,
    setCurrentCompanyLegalName,
    setCurrentCompanyCity,
    setCurrentCompanyPersonal,
    setCurrentCompanyType,

} from './../../../redux/adminSlice.js';

export const set_current_company_data_to_store = ( company ) => {

    let {
        company_name,
        company_alias,
        company_program_system,
        company_legal_name,
        company_city,
        company_personal,
        company_type,

    } = company;
    
    store.dispatch( setCurrentCompanyName( company_name ) );
    store.dispatch( setCurrentCompanyAlias( company_alias ) );
    store.dispatch( setCurrentCompanyProgramSystem( company_program_system ) );
    store.dispatch( setCurrentCompanyLegalName( company_legal_name ) );
    store.dispatch( setCurrentCompanyCity( company_city ) );
    store.dispatch( setCurrentCompanyPersonal( company_personal ) );
    store.dispatch( setCurrentCompanyType( company_type ) );


}