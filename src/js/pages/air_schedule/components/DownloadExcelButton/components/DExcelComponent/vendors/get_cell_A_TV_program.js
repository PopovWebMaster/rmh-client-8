
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';
import { BORDER_COLOR_STYLE, FONT_SIZE, FILL_BG_COLOR_GRAY } from './excel_config.js';

export const get_cell_A_TV_program = ( value, fontSize = FONT_SIZE ) => {

    return { 
        // v: startTime === false? '': convert_sec_to_time( startTime ), 
        v: value, 
        t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: fontSize,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },
            // border,
            // fill: {
            //     fgColor: { rgb: FILL_BG_COLOR_GRAY }
            // },
            // border: {
            //     left: { style: 'thin', color: BORDER_COLOR_STYLE },
            //     bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
            // },
        } 
    };
};