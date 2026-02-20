
import { FONT_SIZE, FONT_NAME, BORDER_COLOR_STYLE, TABLE_BORDER_WIDTH } from './excel_config.js';

export const get_table_header_rows = ( tible_title ) => {

    let row_0 = [ {}, {}, {}, {}, {} ];
    let row_1 = [ 
        {}, 
        {}, 
        {}, 
        {
            v: tible_title, 
            t: "s", 
            s: { 
                font: { 
                    name: FONT_NAME, 
                    sz: FONT_SIZE,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                // fill: {
                //     // fgColor: { rgb: FILL_BG_COLOR_GRAY }
                // },
            } 
        }, 
        {} 
    ];
    let row_2 = [
        {},
        { v: '', t: "s", s: { border: { bottom: { style: TABLE_BORDER_WIDTH, color: BORDER_COLOR_STYLE }, }, } },
        { v: '', t: "s", s: { border: { bottom: { style: TABLE_BORDER_WIDTH, color: BORDER_COLOR_STYLE }, }, } },
        { v: '', t: "s", s: { border: { bottom: { style: TABLE_BORDER_WIDTH, color: BORDER_COLOR_STYLE }, }, } },
        {},
    ];

    return [ row_0, row_1, row_2 ];



}