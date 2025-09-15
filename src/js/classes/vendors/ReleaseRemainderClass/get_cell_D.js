
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

import { FONT_SIZE } from './excel_config.js';

export const get_cell_D = ( releaseDuration ) => {

    let value = convert_sec_to_time( releaseDuration );


    return { 
        v: value, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: FONT_SIZE - 1,
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