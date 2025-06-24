
import { GRID_SEGMENT_TYPE } from './../../../../../../../config/layout.js';

export const get_data_for_empty_segment = ( next_startTime, pointTo ) => {

    let startTime = next_startTime;


    // let durationTime = pointTo - next_startTime - 1;
    let durationTime = pointTo - next_startTime;


    let result = { 
        type: GRID_SEGMENT_TYPE.EMPTY,
        startTime, 
        durationTime,
    };
    result.type = GRID_SEGMENT_TYPE.EMPTY;

    return result;
}