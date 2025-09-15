
import store from './../../../../../../../redux/store.js';

export const empty_element_is_target = ( params ) => {
    let {
        durationTime
    } = params;

    let result = false;

    let { scheduleResult } = store.getState();

    let { 
        releaseListById,
        dragebleReleaseId,
    } = scheduleResult;

    if( durationTime >= releaseListById[ dragebleReleaseId ].releaseDuration ){
        result = true;
    };

    return result;

};