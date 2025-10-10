
import { RowClass } from './RowClass.js';

export class RowCustomerClass extends RowClass {

    constructor( rowNumber, customer ){
        super( rowNumber );

        this.customer = customer;

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
            { v: "ЗАЗАКАЗЧИК:", t: "s", 
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
                { v: this.customer, t: "s", 
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


    }
}