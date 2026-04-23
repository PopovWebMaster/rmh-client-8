
import { RowClass } from './RowClass.js';

export class RowDescriptionClass extends RowClass {
     constructor( rowNumber, val ){
        super( rowNumber );

        this.val = val;
        

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){
         let row = [
            { v: "Описание:", t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'right',
                    },
                    
                } 
            },
                { v: this.val, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 10,
                        italic: false,
                        bold: false,
                        // color: { rgb: "FF0000" }
                    },
                    alignment: {
                        horizontal: 'left',
                        wrapText: true,
                    } 
                } 
            },
        ];

        this.AddRow( row );
        this.AddRange( `B${this.rowNumber}:E${this.rowNumber}` );
        if( this.val !== '' ){
            this.AddRowHeight( 20 );
        };
        



    }
}