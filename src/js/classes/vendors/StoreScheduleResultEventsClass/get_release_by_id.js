import store from './../../../redux/store.js';

export const get_release_by_id = ( release_id ) => {
    let { scheduleResult } = store.getState();
    let { releaseListById } = scheduleResult;
    let result = null;

    if( releaseListById[ release_id ] ){
        result = { ...releaseListById[ release_id ] };
    };
    
    return result;

};