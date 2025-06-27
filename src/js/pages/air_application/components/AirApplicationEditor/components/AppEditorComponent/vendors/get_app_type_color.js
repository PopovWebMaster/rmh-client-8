
import { APPLICATION_TYPE } from './../../../../../../../config/application.js'

export const get_app_type_color = ( type ) => {
    let result = '#00000000';

    switch( type ){
        case APPLICATION_TYPE.SERIES:
            result = '#23b13396';
            break;

        case APPLICATION_TYPE.RELEASE:
            result = '#c5a32fc9';
            break;

    };

    return result;

};