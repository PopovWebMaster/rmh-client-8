
import { RowClass } from './RowClass.js';

export class RowMediaNameClass extends RowClass {

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
            { v: "СМИ", t: "s", 
                s: { 
                    font: { 
                        name: "Verdana", 
                        sz: 12,
                        italic: true,
                        bold: true,
                    },
                    alignment: {
                        horizontal: 'right',
                    } 
                } 
            },
                { v: this.mediaName, t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
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
        this.AddRange( `D${this.rowNumber}:AO${this.rowNumber}` );


    }
}