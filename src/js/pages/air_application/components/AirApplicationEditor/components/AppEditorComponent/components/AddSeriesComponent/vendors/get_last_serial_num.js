
import store from './../../../../../../../../../redux/store.js';
import { APPLICATION_TYPE } from './../../../../../../../../../config/application.js';

export const get_last_serial_num = () => {

    let { application } = store.getState();
    let { currentAppOrders, currentAppType } = application;

    let result = 0;

    if( currentAppType === APPLICATION_TYPE.SERIES ){

        for( let i = 0; i < currentAppOrders.length; i++ ){
            let { serial_num } = currentAppOrders[ i ];
            if( Number( serial_num ) > result ){
                result = Number( serial_num );
            };
        };

    };

    return result;
}