
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';

export const get_TV_P_startTime = ( startTime ) => {
    let result = ''

    let time = convert_sec_to_time( startTime );

    let arr = time.split(':');
    result = `${arr[0]}:${arr[1]}`;

    return result;

}