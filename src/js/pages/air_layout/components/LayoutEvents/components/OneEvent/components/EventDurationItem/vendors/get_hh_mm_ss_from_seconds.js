
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';

export const get_hh_mm_ss_from_seconds = ( sec ) => {
    let time = convert_sec_to_time( sec );
    let arr = time.split( ':' );
    
    return {
        hh: arr[ 0 ],
        mm: arr[ 1 ],
        ss: arr[ 2 ],
    }

}