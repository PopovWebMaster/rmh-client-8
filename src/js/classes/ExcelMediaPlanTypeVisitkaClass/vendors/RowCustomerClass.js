
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
            {},
            {},
            { v: "Заказчик:", t: "s", 
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
                { v: this.customer, t: "s", 
                s: { 
                    font: { 
                        name: "Arial", 
                        sz: 12,
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
        this.AddRange( `D${this.rowNumber}:AO${this.rowNumber}` );


    }
}