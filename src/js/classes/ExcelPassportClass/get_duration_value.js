
import { convert_sec_to_time_for_Excel } from './../../helpers/convert_sec_to_time_for_Excel.js';

export const get_duration_value = ( duration_sec ) => {
    let result = '';

    result = `${duration_sec} (${convert_sec_to_time_for_Excel( duration_sec )})`;

    return result;

};