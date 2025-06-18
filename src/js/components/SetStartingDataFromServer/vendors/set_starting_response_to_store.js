
import { set_user_data } from './set_user_data.js';
import { set_company_list } from './set_company_list.js';

export const set_starting_response_to_store = ( response ) => {

    if( response.ok ){

        set_user_data( response );
        set_company_list( response );

    }else{

        console.error( response );

    };

};