
import { RowClass } from './RowClass.js';

export class RowMediaNameAsHeaderClass extends RowClass {

 constructor( rowNumber, mediaName ){
        super( rowNumber );

        this.mediaName = mediaName;


        this.Create = this.Create.bind(this);

        this.Create();

    }

    Create(){

        let row = [
        {},
        {},
        {},
        {},
        {},
        { 
            v: this.mediaName, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                } 
            } 
        },

    ];

        this.AddRow( row );
        this.AddRange( `F${this.rowNumber}:AO${this.rowNumber}` );
        this.AddRowHeight( 38.25 );


    }
}