import { START_TIME_PRIME_FROM, START_TIME_PRIME_TO } from './../excel_config.js';
import { BORDER_STYLE } from './../excel_config.js';
import { BORDER_COLOR_STYLE } from './../excel_config.js';

import { convert_time_str_to_sec } from './../../../../helpers/convert_time_str_to_sec.js';



export const get_first_martix_row_cells = ( params, withNames = false ) => {
    let {
        time,
        releaseDuration,
        releaseName = '',
        price,
        pricePrime,
        rowNum,
        cellDurationLink,
    } = params;

    let priceValue = price;

    let str = time.trim();
    let time_1 = str.slice(0, 5);
    let sec = convert_time_str_to_sec( `${time_1}:00` );

    if( sec >= START_TIME_PRIME_FROM && sec <= START_TIME_PRIME_TO){
        priceValue = pricePrime;
    };

    let cellDuration = {
        v: releaseDuration, 
        t: "s", 
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
    };
    if( cellDurationLink !== null ){
        // cellDuration.v = ''; 
        cellDuration.t = 'n'; 
        cellDuration.f = cellDurationLink; 

    };

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
            v: `${priceValue}`, 
            t: "s", 
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
            ...cellDuration
            // v: releaseDuration, 
            // t: "s", 
            // s: { 
            //     font: { 
            //         name: "Arial", 
            //         sz: 12,
            //         italic: false,
            //         bold: false,
            //         // color: { rgb: "0964CC" }
            //     },
                
            //     alignment: {
            //         horizontal: 'center',
            //         vertical: 'center',
            //     },
            //     border: {
            //         right:  { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
            //         bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
            //     },
            // } 
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
