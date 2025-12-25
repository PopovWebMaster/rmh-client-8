
import { RowClass } from './RowClass.js';

export class RowPeriodClass extends RowClass {
    constructor( rowNumber, Period ){
        super( rowNumber );

        this.Period = Period;

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){

        let period = `${this.Period.from.dateShort} - ${this.Period.to.dateShort}`

        let row = [
            {},
            {},
            { v: "период:", t: "s", 
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
                { v: period, t: "s", 
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

