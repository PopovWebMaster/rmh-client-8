
import { RowClass } from './RowClass.js';

export class RowReleaseNameClass extends RowClass {
     constructor( rowNumber, thema ){
        super( rowNumber );

        this.thema = thema;
        

        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){
         let row = [
            { v: "Выпуск:", t: "s", 
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
                { v: this.thema, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 11,
                        italic: false,
                        bold: false,
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