
import store from './../../../../../../../../../../redux/store.js';


export const chack_email = ( email ) => {
    let result = {
        ok: false,
        message: '',
        value: '',
    };

    let email_trim = email.trim();
    if( email_trim === '' ){
        result.message = 'email не должен быть пустой строкой';
    }else{

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if( pattern.test( email_trim ) ){

            let { admin } = store.getState();
            let { companies } = admin;
            let isUnic = true;
            output: for( let i = 0; i < companies.length; i++ ){
                let { company_personal } = companies[ i ];
                for( let y = 0; y < company_personal.length; y++ ){
                    if( company_personal[ y ].email === email_trim ){
                        isUnic = false;
                        break output;
                    };
                };
            };
            if( isUnic === false ){
                result.message = 'Уже есть пользователь с таким email';
            }else{
                result.ok = true;
                result.value = email_trim;
            };

        }else{
            result.message = 'email не валидный';
        };

    };

    return result;
};