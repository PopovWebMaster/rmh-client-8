
import store from './../../../../../../../redux/store.js';

export const get_cut_part_left_proc = ( index ) => {

    let { cutEventEditor } = store.getState();
    let { maxDurationTime, eventsPartsList } = cutEventEditor;

    let prevew_duration = 0;

    for( let i = 0; i < eventsPartsList.length; i++ ){
        if( i === index ){
            break;
        }else{
            let { durationTime } = eventsPartsList[ i ];
            prevew_duration = prevew_duration + durationTime + 1;
        };
    };

    let result = prevew_duration * 100 / maxDurationTime;

    return result;

};