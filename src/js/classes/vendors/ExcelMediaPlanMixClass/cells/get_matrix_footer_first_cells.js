
import { DAY_LENGTH } from './../excel_config.js';
import { BORDER_STYLE } from './../excel_config.js';
import { BORDER_COLOR_STYLE } from './../excel_config.js';

export const get_matrix_footer_first_cells = () => {
    let result = [
        {
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
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
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
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
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
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
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
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
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
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