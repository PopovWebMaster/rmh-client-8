
import { set_user_data } from './set_user_data.js';
import { set_company_list } from './set_company_list.js';
import { set_program_system } from './set_program_system.js';
import { set_play_report_files } from './set_play_report_files.js';

export const set_starting_response_to_store = ( response ) => {

    if( response.ok ){
        set_user_data( response );
        set_company_list( response );
        set_program_system( response );
        set_play_report_files( response );

    }else{

        console.error( response );

    };

};