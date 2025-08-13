import { DAY_LENGTH } from './../excel_config.js';
import { BORDER_STYLE } from './../excel_config.js';
import { BORDER_COLOR_STYLE } from './../excel_config.js';

export const get_first_martix_row_cells = ( params, withNames = false ) => {
    let {
        time,
        releaseDuration,
        releaseName = '',
        price,
        rowNum,
    } = params;

    let result = [
        {
            v: time, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 11,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: withNames? releaseName: 'эфир', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: withNames? 'left': 'center',
                    vertical: 'center',
                },
                border: {
                    right:  { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: `${price}`, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                    color: { rgb: "0964CC" }
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
                // numFmt: "0.00%"
            } 
        },
        {
            v: releaseDuration, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                    // color: { rgb: "0964CC" }
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    right:  { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: '', 
            t: "s", 
            f: `=C${rowNum}*D${rowNum}`,

            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                    color: { rgb: "E01E10" }
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
                // numFmt: ".0"
            } 
        },
    ];

    return result;

}
