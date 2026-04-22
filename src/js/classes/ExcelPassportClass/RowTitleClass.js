
import { RowClass } from './RowClass.js';

const BORDER_STYLE = 'thin';// 'thin'; //thick medium
const BORDER_COLOR_STYLE = { rgb: "000000" };
const FILL_BG_COLOR = 'D6D6D6' // 'd6d6d6'

class Cell{
    constructor( cell ){
        let {
            value = '',

            fontName =      "Arial",
            fontSz =        10,
            fontItalic =    false,
            fontBold =      false,
        } = cell;

        this.value = value;
    
        this.fontName = fontName;
        this.fontSz = fontSz;
        this.fontItalic = fontItalic;
        this.fontBold = fontBold;
    }
}

export class RowTitleClass extends RowClass {

    constructor( rowNumber, props ){
        super( rowNumber );

        let {
            cell_B = {},
            cell_C = {},
            rowHeight = 22,
            isEmpty = false
        } = props;

        this.rowHeight = rowHeight;
        this.isEmpty = isEmpty;


        cell_B.fontName = 'Verdana';
        // cell_B.fontItalic = true;
        cell_B.fontBold = true;

        cell_B.fontSz = 10;
        cell_C.fontSz = 9;



        this.Cell_B = new Cell( cell_B );
        this.Cell_C = new Cell( cell_C );


        this.Create = this.Create.bind(this);

        this.Create();



    }

    Create(){
        let row = [];
        if( this.isEmpty  ){
            row = [{}, {}, {}, {}, {}, {}, {}, ];
        }else{
            row = [
                {},
                { v: this.Cell_B.value, t: "s", 
                    s: { 
                        font: { 
                            name:   this.Cell_B.fontName, 
                            sz:     this.Cell_B.fontSz, 
                            italic: this.Cell_B.fontItalic, 
                            bold:   this.Cell_B.fontBold, 
                        },
                        alignment: {
                            horizontal: 'right',
                            vertical: 'center',
                        },
                        border: {
                            top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                            left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                            right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                            bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                        },
                        fill: {
                            fgColor: { rgb: 'D6D6D6'}
                        }
                    } 
                },
                { v: this.Cell_C.value, t: "s", 
                    s: { 
                        font: { 
                            name:   this.Cell_C.fontName, 
                            sz:     this.Cell_C.fontSz, 
                            italic: this.Cell_C.fontItalic, 
                            bold:   this.Cell_C.fontBold, 
                        },
                        alignment: {
                            horizontal: 'left',
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

                { v: '', t: "s", 
                    s: { 
                        font: { 
                            name:   this.Cell_C.fontName, 
                            sz:     this.Cell_C.fontSz, 
                            italic: this.Cell_C.fontItalic, 
                            bold:   this.Cell_C.fontBold, 
                        },
                        alignment: {
                            horizontal: 'left',
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
                { v: '', t: "s", 
                    s: { 
                        font: { 
                            name:   this.Cell_C.fontName, 
                            sz:     this.Cell_C.fontSz, 
                            italic: this.Cell_C.fontItalic, 
                            bold:   this.Cell_C.fontBold, 
                        },
                        alignment: {
                            horizontal: 'left',
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

        };
        

        this.AddRow( row );
        // this.AddRange( `D${this.rowNumber}:AO${this.rowNumber}` );
        this.AddRange( `C${this.rowNumber}:E${this.rowNumber}` );
        this.AddRowHeight( this.rowHeight );


    }
}