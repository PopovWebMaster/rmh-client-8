
import { RowClass } from './RowClass.js';

export class RowNotesClass extends RowClass {
     constructor( rowNumber, val ){
        super( rowNumber );

        this.val = val;
        

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){
         let row = [
            { v: "Доп. инфо.:", t: "s", 
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
                        sz: 11,
                        italic: false,
                        bold: true,
                        color: { rgb: "FF0000" }
                    },
                    alignment: {
                        horizontal: 'left',
                        wrapText: true,
                    } 
                } 
            },
        ];

        this.AddRow( row );
        this.AddRange( `B${this.rowNumber}:E${this.rowNumber}` )

    }
}