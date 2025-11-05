import { DAY_LENGTH } from './../excel_config.js';
import { BORDER_STYLE } from './../excel_config.js';
import { BORDER_COLOR_STYLE } from './../excel_config.js';

export const get_martix_values_cells = ( params ) => {
    let {
        values,
    } = params;

    let result = [];

    for( let i = 0; i < values.length; i++ ){

        let value = values[ i ] === null? 0: values[ i ];

        if( values[ i ] === null ){
            // result.push({
            //     // f: '=0',
            //     v: 0, 
            //     t: "s", 
            //     s: { 
            //         font: { 
            //             name: "Arial Cyr", 
            //             sz: 12,
            //             italic: false,
            //             bold: false,
            //             // color: { rgb: "E01E10" }
            //             color: { rgb: "CDCDCD" }

                        
            //         },
            //         alignment: {
            //             horizontal: 'center',
            //             vertical: 'bottom',
            //         },
            //         border: {
            //             right: { style: 'thin', color: BORDER_COLOR_STYLE },
            //             bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
            //         },
            //         numFmt: 0,
            //     },

            // });
            result.push({});
        }else{
            result.push({
                v: value, 
                // t: "s", 
                t: "n", 

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
                    },
                    // border: {
                    //     right: { style: 'thin', color: BORDER_COLOR_STYLE },
                    //     bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                    // },
                    numFmt: 0,
                },
                z: '0' 
            });
        };

        // result.push({
        //     v: value, 
        //     t: "s", 
        //     s: { 
        //         font: { 
        //             name: "Arial Cyr", 
        //             sz: 12,
        //             italic: false,
        //             bold: true,
                    
        //         },
        //         alignment: {
        //             horizontal: 'center',
        //             vertical: 'bottom',
        //         },
        //         border: {
        //             right: { style: 'thin', color: BORDER_COLOR_STYLE },
        //             bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
        //         },
        //         numFmt: '0',
        //     }   
        // });

    };

    return result;

};