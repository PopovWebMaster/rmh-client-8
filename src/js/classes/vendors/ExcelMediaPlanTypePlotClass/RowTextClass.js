
import { RowClass } from './RowClass.js';

export class RowTextClass extends RowClass {

    constructor( rowNumber, text ){
        super( rowNumber );

        this.text = text;

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
            { v: this.text, t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
                        sz: 10,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'left',
                        vertical: 'center',
                    } 
                } 
            },
        ];

        this.AddRow( row );
        this.AddRange( `A${this.rowNumber}:E${this.rowNumber}` );


    }
}