
import { set_user_data } from './set_user_data.js';
import { set_company_list } from './set_company_list.js';
import { set_program_system } from './set_program_system.js';
import { set_play_report_files } from './set_play_report_files.js';
import { set_category_list } from './set_category_list.js';
import { set_events_list } from './set_events_list.js';
import { set_grid_events_list } from './set_grid_events_list.js';
import { set_application_list } from './set_application_list.js';
import { set_companies } from './set_companies.js';
import { set_default_program_system } from './set_default_program_system.js';
import { set_default_company_type } from './set_default_company_type.js';
import { set_company_legal_name } from './set_company_legal_name.js';
// import { set_current_day_shadule_list } from './set_current_day_shadule_list.js'

import { set_managerList } from './set_managerList.js';



export const set_starting_response_to_store = ( response ) => {

    if( response.ok ){
        set_user_data( response );
        set_company_list( response );
        set_program_system( response );
        set_play_report_files( response );
        set_category_list( response );
        set_events_list( response );
        set_grid_events_list( response );
        set_application_list( response );
        set_companies( response );
        set_default_program_system( response );
        set_default_company_type( response );
        set_company_legal_name( response );
        // set_current_day_shadule_list( response );

        set_managerList( response );



        // currentDaySchaduleList


    }else{

        console.error( response );

    };

};