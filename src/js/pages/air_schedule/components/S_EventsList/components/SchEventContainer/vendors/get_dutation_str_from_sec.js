
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';

export const get_dutation_str_from_sec = ( durationTime ) => {
    let result = '';
    if( durationTime >= 0 ){
        result = convert_sec_to_time( durationTime-1 );
    }else{
        result =  convert_sec_to_time( durationTime * -1 );
    };
    return result;
};