
import { FONT_SIZE, BORDER_COLOR_STYLE, FONT_NAME, TABLE_BORDER_CELL_WIDTH, TABLE_BORDER_WIDTH } from './excel_config.js';

export const get_cell_E = ( rowData, rowNumber ) => {

    let { notes } = rowData;

    let result = {
        v: notes, 
        // t: "s", 
        t: "t", 
        s: { 
            font: { 
                name: FONT_NAME, 
                sz: FONT_SIZE,
                italic: false,
                bold: false,
            },
            alignment: {
                horizontal: 'left',
                vertical: 'center',
            },
            // fill: {
            //     // fgColor: { rgb: FILL_BG_COLOR_GRAY }
            // },
            // border: {
            //     right: { style: TABLE_BORDER_WIDTH, color: BORDER_COLOR_STYLE },

            //     bottom: { style: TABLE_BORDER_CELL_WIDTH, color: BORDER_COLOR_STYLE },
            // },
        } 
    };
    

    return result;

};