
import { chack_name } from './chack_name.js';
import { chack_email } from './chack_email.js';
import { chack_password } from './chack_password.js';


export const chack_new_user_data = ( params ) => {

    let { name, email, password } = params;

    let result = {
        ok: false,
        message: '',
        data: {
            name: '',
            email: '',
            password: '',
        },
    };

    let valid_name = chack_name( name );
    let valid_email = chack_email( email );
    let valid_password = chack_password( password );

    if( valid_name.ok ){
        if( valid_email.ok ){
            if( valid_password.ok ){

                result.ok = true;

                result.data.name =      valid_name.value;
                result.data.email =     valid_email.value;
                result.data.password =  valid_password.value;

            }else{
                result.message = valid_password.message;
            };
        }else{
            result.message = valid_email.message;
        };
    }else{
        result.message = valid_name.message;
    };

    return result;

};