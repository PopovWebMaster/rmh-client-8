
import store from './../../../redux/store.js';

import { setDefaultProgramSystem } from './../../../redux/adminSlice.js';

export const set_default_program_system = (response) => {

     let { default_program_system } = response;
    
    if( default_program_system ){
        store.dispatch( setDefaultProgramSystem( default_program_system ) );
    };

}