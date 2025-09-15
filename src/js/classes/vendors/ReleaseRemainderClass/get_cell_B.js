
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

import { FONT_SIZE } from './excel_config.js';

export const get_cell_B = ( startTime ) => {

    let value = '';

    let time = convert_sec_to_time( startTime );

    let arr = time.split(':');
    value = `${arr[0]}:${arr[1]}`;

    return { 
        v: value, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: FONT_SIZE,
                italic: false,
                bold: true,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },

        } 
    }; 


    
};