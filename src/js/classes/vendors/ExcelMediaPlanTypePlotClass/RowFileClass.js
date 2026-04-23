
import { RowClass } from './RowClass.js';

export class RowFileClass extends RowClass {
     constructor( rowNumber, file ){
        super( rowNumber );

        this.file = file;
        

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){
         let row = [
            { v: "Файл:", t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'right',
                    } 
                } 
            },
                { v: this.file, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'left',
                    } 
                } 
            },
        ];

        this.AddRow( row );
        this.AddRange( `B${this.rowNumber}:E${this.rowNumber}` )

    }
}