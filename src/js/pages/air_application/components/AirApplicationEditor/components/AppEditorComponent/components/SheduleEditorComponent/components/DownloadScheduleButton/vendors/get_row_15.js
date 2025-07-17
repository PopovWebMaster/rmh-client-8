
// const BORDER_STYLE = 'medium';// 'thin'; //thick
// const COLOR_STYLE = { rgb: "000000" };
// const FILL_BG_COLOR = 'D6D6D6' // 'd6d6d6'
import { DAY_LENGTH } from './excel_config.js';
import { BORDER_STYLE } from './excel_config.js';
import { BORDER_COLOR_STYLE } from './excel_config.js';
import { FILL_BG_COLOR } from './excel_config.js';


let arr_A15_E15 = [
    {
        v: '', t: "s", 
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
            },
            border: {
                top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
            },

            fill: {
                fgColor: { rgb: FILL_BG_COLOR }
            }
        } 
    },
    {
            v: '', t: "s", 
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
            },
            border: {
                top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
            },

            fill: {
                fgColor: { rgb: FILL_BG_COLOR }
            }
        } 
    },
    {
        v: '', t: "s", 
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

            fill: {
                fgColor: { rgb: FILL_BG_COLOR }
            }
        } 
    },
    {
        v: '', t: "s", 
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

            fill: {
                fgColor: { rgb: FILL_BG_COLOR }
            }
        } 
    },
    {
            v: '', t: "s", 
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

            fill: {
                fgColor: { rgb: FILL_BG_COLOR }
            }
        } 
    },

];

let arr_AM15_AN15 = [
    {
        v: `Всего сек`, t: "s", 
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
        v: `Всего по прайсу, руб.`, t: "s", 
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

const getLastCells = ( val_1, val_2 ) => {
    return [
        {
            v: val_1, t: "s", 
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
            v: val_2, t: "s", 
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
}





const getCell = ( str) => {

    return { 
        v: str, t: "s", 
        s: { 
            font: { 
                name: "Arial Cyr", 
                sz: 12,
                italic: false,
                bold: true,
                
            },
            alignment: {
                horizontal: 'center',
                vertical: 'bottom',
                textRotation: 90,
            },
            border: {
                top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
            },
        } 
    };
}





export const get_row_15 = ( martix ) => {

    let result = [];
    let arr_F15_AL15 = [];

    let count = 0;
    if( martix[ 0 ] ){
        for( let YYYY_MM_DD in martix[ 0 ] ){
            arr_F15_AL15.push( getCell( martix[ 0 ][ YYYY_MM_DD ].dateName ) );
            count++;
        };
    };
    for( let i = count; i < DAY_LENGTH; i++ ){
        arr_F15_AL15.push( getCell( '' ) );
    };

    let arr_AM15_AN15 = getLastCells( '', '' );


    result = [ ...arr_A15_E15, ...arr_F15_AL15, ...arr_AM15_AN15 ];



    return result;
};