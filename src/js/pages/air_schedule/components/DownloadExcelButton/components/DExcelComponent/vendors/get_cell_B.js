
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';

import { BORDER_COLOR_STYLE, FONT_SIZE } from './excel_config.js';

export const get_cell_B = ( durationTime = null, isLastBlockRow = false  ) => {


    let border = {
        // left: { style: 'thin', color: BORDER_COLOR_STYLE },
    };

    if( isLastBlockRow ){
        border.bottom = { style: 'thin', color: BORDER_COLOR_STYLE };
    };

    if( durationTime === null ){

        return { 
            v: '', 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: FONT_SIZE - 1,
                    // sz: 8,

                    italic: false,
                    bold: false,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border,
                // numFmt: 'hh:mm:ss'
            } 
        };
    }else{

        border.top = { style: 'thin', color: BORDER_COLOR_STYLE };

        return { 
            v: convert_sec_to_time( durationTime ), 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: FONT_SIZE - 1,
                    italic: false,
                    bold: false,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border,
            } 
        }; 
    };
};