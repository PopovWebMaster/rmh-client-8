
import store from './../../../redux/store.js';
import { setUserData } from './../../../redux/userInfoSlice.js';

export const set_user_data = ( response ) => {

    if( response.userData ){
        store.dispatch( setUserData( response.userData ) );
    };

};