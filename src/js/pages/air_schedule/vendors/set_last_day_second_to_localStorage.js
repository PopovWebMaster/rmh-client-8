
import { convert_date_str_to_format } from './../../../helpers/convert_date_str_to_format.js';

export const set_last_day_second_to_localStorage = ( YYYY_MM_DD ) => {

    let seconds = convert_date_str_to_format.YY_MM_DD_to_seconds( YYYY_MM_DD );

    // console.dir( 'last_day_seconds' );
    // console.dir( seconds );

    localStorage.setItem( 'last_day_seconds', seconds );

};