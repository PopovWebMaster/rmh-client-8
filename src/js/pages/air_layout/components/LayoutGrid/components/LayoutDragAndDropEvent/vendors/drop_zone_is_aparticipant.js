
import store from './../../../../../../../redux/store.js';

export const drop_zone_is_aparticipant = ( params ) => {
    let {
        startTime,
        durationTime,
        isEmpty,

    } = params;

    let result = false;

    if( isEmpty ){

        let { layoutDragEvent } = store.getState();

        let {
            dragStartMinStartTime,
            dragStartMaxStartTime,
            dragStartDuration,
        } = layoutDragEvent;

        if( startTime >= dragStartMinStartTime && startTime < dragStartMaxStartTime ){
            if( durationTime >= dragStartDuration ){
                result = true;
            };
        };
    };


    return result;
}