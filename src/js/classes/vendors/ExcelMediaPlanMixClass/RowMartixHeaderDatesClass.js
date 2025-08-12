import { RowClass } from './RowClass.js';

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

let lastCells = [
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
        } 
    },
    
        
];



export class RowMartixHeaderDatesClass extends RowClass {

    constructor( rowNumber, datesList ){
        super( rowNumber );

        this.datesList = datesList;

        this.Create = this.Create.bind(this);
        this.GetCell = this.GetCell.bind(this);



        

        this.Create();

    }

    Create(){
        let row = [];
        let arr_F15_AL15 = [];

        let count = 0;
        for( let i = 0; i < this.datesList.length; i++ ){
            arr_F15_AL15.push( this.GetCell( this.datesList[ i ] ) );
            count++;
        };

        for( let i = count; i < DAY_LENGTH; i++ ){
            arr_F15_AL15.push( this.GetCell( '' ) );
        };

        row = [ ...arr_A15_E15, ...arr_F15_AL15, ...lastCells ];

        this.AddRow( row );

        this.AddRowHeight( 77.25 );

        // this.AddRange( `A${this.rowNumber}:A${this.rowNumber + 1 }` );
        // this.AddRange( `B${this.rowNumber}:B${this.rowNumber + 1 }` );
        // this.AddRange( `C${this.rowNumber}:C${this.rowNumber + 1 }` );
        // this.AddRange( `D${this.rowNumber}:D${this.rowNumber + 1 }` );
        // this.AddRange( `E${this.rowNumber}:E${this.rowNumber + 1 }` );




    }

    
    GetCell( str){
    
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
    
}