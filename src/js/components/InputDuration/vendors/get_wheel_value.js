
import { convert_time_str_to_sec } from './../../../helpers/convert_time_str_to_sec.js';
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';
import { MIN_EVENT_DURATION_SEC } from './../../../config/layout.js';

export const get_wheel_value = ( params ) => {

    let {
        HH,
        MM,
        SS,
        change_sec,
    } = params;

    let HH_str = HH === ''? '00': HH;
    let MM_str = MM === ''? '00': MM;
    let SS_str = SS === ''? '00': SS;

    let hh = '';
    let mm = '';
    let ss = '';

    let time = `${HH_str}:${MM_str}:${SS_str}`;
    let sec = convert_time_str_to_sec( time );
    let max_sec = 24 * 60 * 60;
    let min_sec = MIN_EVENT_DURATION_SEC;
    let res_sec = sec + change_sec;
    if( res_sec < max_sec && res_sec >= min_sec ){

        let chenge_time = convert_sec_to_time( res_sec );
        let arr = chenge_time.split( ':' );
        hh = arr[ 0 ];
        mm = arr[ 1 ];
        ss = arr[ 2 ];

    }else{
        hh = HH_str;
        mm = MM_str;
        ss = SS_str;
    };



    // next_val.padStart( 2, "0" )

    return {
        hh,
        mm,
        ss,
    }

}