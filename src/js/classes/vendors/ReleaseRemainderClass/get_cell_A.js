
// import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

import { convert_date_str_to_format } from './../../../helpers/convert_date_str_to_format.js'

import { FONT_SIZE } from './excel_config.js';

export const get_cell_A = ( YYYY_MM_DD ) => {

    let date = '';

    if( YYYY_MM_DD !== '' ){
        date = convert_date_str_to_format.YY_MM_DD_points( YYYY_MM_DD );
    };

    return { 
        v: date, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: FONT_SIZE,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },

        } 
    };
};