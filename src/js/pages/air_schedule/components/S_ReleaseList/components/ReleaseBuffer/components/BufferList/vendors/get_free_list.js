
import store from './../../../../../../../../../redux/store.js';


export const get_free_list = () => {

    let result = [];

    let { scheduleResult } = store.getState();
    let { releaseList } = scheduleResult;

    for( let i = 0; i < releaseList.length; i++ ){

        result.push( { ...releaseList[ i ] } );

    };


    return result;

};