import { DAY_LENGTH } from './../excel_config.js';
import { BORDER_STYLE } from './../excel_config.js';
import { BORDER_COLOR_STYLE } from './../excel_config.js';

export const get_matrix_footer_last_cells = ( firstRow, lastRow ) => {

    let formula_1 = `SUM(AM${firstRow}:AM${lastRow})`;
    let formula_2 = `SUM(AN${firstRow}:AN${lastRow})`;


    let result = [
        {
            f: formula_1,
            v: 0,
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            f: formula_2,
            v: 0,
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
    ];

    return result;
}