
import store from './../../../redux/store.js';
import { setCompanyProgramSystem } from './../../../redux/companySlice.js';

export const set_program_system = ( response ) => {

    let { programSystem } = response;

    if( programSystem ){
        store.dispatch( setCompanyProgramSystem( programSystem ) );
    };
};