
import { RowClass } from './RowClass.js';

export class TableFooterClass extends RowClass {

    constructor( rowNumber, text ){
        super( rowNumber );

        this.text = text;
        

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
            { 
                v: this.text, 
                t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 10,
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
        
        this.AddRange( `A${this.rowNumber}:AN${this.rowNumber}` );


    }


}