
import { RowClass } from './RowClass.js';

export class TableHeaderClass extends RowClass {

    constructor( rowNumber, tableHeader ){
        super( rowNumber );

        this.tableHeader = tableHeader;
        

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
            { 
                v: this.tableHeader, 
                t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
                        italic: false,
                        bold: false,
                    },
                    alignment: {
                        horizontal: 'right',
                    } 
                } 
            },
        ];

        this.AddRow( row );
        this.AddRange( 'A1:AO1' );

    }


}