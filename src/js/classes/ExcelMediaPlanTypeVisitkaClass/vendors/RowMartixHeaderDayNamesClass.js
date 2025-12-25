
import { RowClass } from './RowClass.js';

import { DAY_LENGTH } from './excel_config.js';
import { BORDER_STYLE } from './excel_config.js';
import { BORDER_COLOR_STYLE } from './excel_config.js';
import { FILL_BG_COLOR } from './excel_config.js';


let arr_A14_C14 = [
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
    // {
    //     v: `прайсовая стоимость 1 рос.руб.`, t: "s", 
    //     s: { 
    //         font: { 
    //             name: "Arial", 
    //             sz: 12,
    //             italic: false,
    //             bold: true,
    //         },
            
    //         alignment: {
    //             horizontal: 'center',
    //             vertical: 'center',
    //             wrapText: true,
    //         },
    //         border: {
    //             top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //         },

    //         fill: {
    //             fgColor: { rgb: FILL_BG_COLOR }
    //         }
    //     } 
    // },
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
    // {
    //     v: 'стоимость 1-го выхода по прайсу', t: "s", 
    //     s: { 
    //         font: { 
    //             name: "Arial", 
    //             sz: 12,
    //             italic: false,
    //             bold: true,
    //         },
            
    //         alignment: {
    //             horizontal: 'center',
    //             vertical: 'center',
    //             wrapText: true,
    //         },
    //         border: {
    //             top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //         },

    //         fill: {
    //             fgColor: { rgb: FILL_BG_COLOR }
    //         }
    //     } 
    // },
];

let arr_AK14 = [
    {
        v: `Всего`, t: "s", 
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
    // {
    //     v: `Всего по прайсу, руб.`, t: "s", 
    //     s: { 
    //         font: { 
    //             name: "Arial", 
    //             sz: 12,
    //             italic: false,
    //             bold: true,
    //         },
            
    //         alignment: {
    //             horizontal: 'center',
    //             vertical: 'center',
    //             wrapText: true,
    //         },
    //         border: {
    //             top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //             bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
    //         },
    //     } 
    // },
];

export class RowMartixHeaderDayNamesClass extends RowClass {

    constructor( rowNumber, dayNamesList ){
        super( rowNumber );

        this.dayNamesList = dayNamesList;

        this.Create = this.Create.bind(this);
        // this.GetFirstCells = this.GetFirstCells.bind(this);
        this.GetCell = this.GetCell.bind(this);

        this.Create();

    }

    Create(){

        let row = [];
        let arr_F14_AL14 = [];
        let arr_D14_AJ14 = [];

        let count = 0;

        for( let i = 0; i < this.dayNamesList.length; i++ ){
            arr_D14_AJ14.push( this.GetCell( this.dayNamesList[ i ] ) );
            count++;
        };

        for( let i = count; i < DAY_LENGTH; i++ ){
            arr_D14_AJ14.push( this.GetCell( '' ) );
        };

        row = [ ...arr_A14_C14, ...arr_D14_AJ14, ...arr_AK14 ];

        this.AddRow( row );

        this.AddRange( `A${this.rowNumber}:A${this.rowNumber + 1 }` );
        this.AddRange( `B${this.rowNumber}:B${this.rowNumber + 1 }` );
        this.AddRange( `C${this.rowNumber}:C${this.rowNumber + 1 }` );
        // this.AddRange( `D${this.rowNumber}:D${this.rowNumber + 1 }` );
        // this.AddRange( `E${this.rowNumber}:E${this.rowNumber + 1 }` );
        this.AddRange( `AK${this.rowNumber}:AK${this.rowNumber + 1 }` );
        // this.AddRange( `AN${this.rowNumber}:AN${this.rowNumber + 1 }` );


        




        //     {},
        //     {},
        //     {},
        //     {},
        //     {},
        //     { 
        //         v: this.mediaName, t: "s", 
        //         s: { 
        //             font: { 
        //                 name: "Arial", 
        //                 sz: 12,
        //                 italic: false,
        //                 bold: false,
        //             },
        //             alignment: {
        //                 horizontal: 'center',
        //                 vertical: 'center',
        //             } 
        //         } 
        //     },

        // ];

        // this.AddRow( row );
        // this.AddRange( `F${this.rowNumber}:AO${this.rowNumber}` );
        // this.AddRowHeight( 38.25 );


    }

    
    GetCell( str ){
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



}