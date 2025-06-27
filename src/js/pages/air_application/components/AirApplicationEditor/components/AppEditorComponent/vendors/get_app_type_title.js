
import { APPLICATION_TYPE } from './../../../../../../../config/application.js'

export const get_app_type_title = ( type ) => {
    let result = '';

    switch( type ){
        case APPLICATION_TYPE.SERIES:
            result = 'Серия';
            break;

        case APPLICATION_TYPE.RELEASE:
            result = 'Выпуск';
            break;

    };

    return result;

};