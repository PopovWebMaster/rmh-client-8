
import { DAY_LENGTH } from './excel_config.js';
import { BORDER_STYLE } from './excel_config.js';
import { BORDER_COLOR_STYLE } from './excel_config.js';
import { FILL_BG_COLOR } from './excel_config.js';


let arr_A14_E14 = [
    {
        v: 'время', t: "s", 
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
            v: 'Передача', t: "s", 
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
            v: `прайсовая стоимость 1 рос.руб.`, t: "s", 
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
            v: 'кол-во сек', t: "s", 
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
            v: 'стоимость 1-го выхода по прайсу', t: "s", 
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

    // { v: `вт`, t: "s", 
    //     s: { 
    //         font: { 
    //             name: "Arial", 
    //             sz: 12,
    //             italic: false,
    //             bold: true,
    //         },
    //         alignment: {
    //             horizontal: 'center',
    //             vertical: 'bottom',
    //         },
    //         border: {
    //             top: { style: BORDER_STYLE, color: COLOR_STYLE },
    //             left: { style: BORDER_STYLE, color: COLOR_STYLE },
    //             right: { style: BORDER_STYLE, color: COLOR_STYLE },
    //             bottom: { style: BORDER_STYLE, color: COLOR_STYLE },
    //         },
    //     } 
    // },
];

let arr_AM14_AN14 = [
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


const getCell = ( str) => {
    return { v: str, t: "s", 
        s: { 
            font: { 
                name: "Arial", 
                sz: 12,
                italic: false,
                bold: true,
            },
            alignment: {
                horizontal: 'center',
                vertical: 'bottom',
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



export const get_row_14 = ( martix ) => {

    let result = [];
    let arr_F14_AL14 = [];

    let count = 0;
    if( martix[ 0 ] ){
        for( let YYYY_MM_DD in martix[ 0 ] ){
            arr_F14_AL14.push( getCell( martix[ 0 ][ YYYY_MM_DD ].dayName ) );
            count++;
        };
    };
    for( let i = count; i < DAY_LENGTH; i++ ){
        arr_F14_AL14.push( getCell( '' ) );
    };


    result = [ ...arr_A14_E14, ...arr_F14_AL14, ...arr_AM14_AN14 ];



    return result;
};