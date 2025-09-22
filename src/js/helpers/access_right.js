

import store from './../redux/store.js';


export const access_right = ( accessName = '', callback = () => {} ) => {

    let result = false;
    let { userInfo } = store.getState();
    let { user_accessRights } = userInfo;

    if( user_accessRights.indexOf( accessName ) !== -1 ){ 
        result = true;
        callback();
    };
    return result;


}