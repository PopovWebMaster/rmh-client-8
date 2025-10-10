
import { RowClass } from './RowClass.js';

import { BORDER_COLOR_STYLE } from './excel_config.js';

export class RowMatrixClass extends RowClass {

    constructor( rowNumber, rowData ){
        super( rowNumber );

        this.date =     rowData[ 0 ];
        this.dayName =  rowData[ 1 ];
        this.time =     rowData[ 2 ];




        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
            { v: this.date, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                    border: {
                        right:  { style: 'thin', color: BORDER_COLOR_STYLE },
                        // top:    { style: 'medium', color: BORDER_COLOR_STYLE },
                        left:   { style: 'medium', color: BORDER_COLOR_STYLE },
                        // bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                    },
                } 
            },
            { v: this.dayName, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                    border: {
                        right:  { style: 'thin', color: BORDER_COLOR_STYLE },
                        // top:    { style: 'medium', color: BORDER_COLOR_STYLE },
                        // left:   { style: 'medium', color: BORDER_COLOR_STYLE },
                        // bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                    },
                } 
            },
            { v: this.time, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                    border: {
                        right:  { style: 'thin', color: BORDER_COLOR_STYLE },
                        // top:    { style: 'medium', color: BORDER_COLOR_STYLE },
                        // left:   { style: 'medium', color: BORDER_COLOR_STYLE },
                        // bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                    },
                } 
            },
            { v: "", t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                    border: {
                        // right:  { style: 'medium', color: BORDER_COLOR_STYLE },
                        // top:    { style: 'medium', color: BORDER_COLOR_STYLE },
                        // left:   { style: 'medium', color: BORDER_COLOR_STYLE },
                        // bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                    },
                } 
            },

            { v: "", t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                    border: {
                        right:  { style: 'medium', color: BORDER_COLOR_STYLE },
                        // top:    { style: 'medium', color: BORDER_COLOR_STYLE },
                        // left:   { style: 'medium', color: BORDER_COLOR_STYLE },
                        // bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                    },
                } 
            },
        ];

        this.AddRow( row );
        this.AddRange( `D${this.rowNumber}:E${this.rowNumber}` );


    }
}