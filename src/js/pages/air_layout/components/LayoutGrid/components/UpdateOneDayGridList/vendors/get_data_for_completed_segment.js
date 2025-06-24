
import { GRID_SEGMENT_TYPE } from './../../../../../../../config/layout.js';

export const get_data_for_completed_segment = ( item ) => {

    let result = { ...item };
    result.type = GRID_SEGMENT_TYPE.COMPLETED;

    return result;
}