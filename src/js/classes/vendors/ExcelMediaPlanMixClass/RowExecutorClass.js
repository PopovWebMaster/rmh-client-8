
import { RowClass } from './RowClass.js';

export class RowExecutorClass extends RowClass {
     constructor( rowNumber, executor ){
        super( rowNumber );

        this.executor = executor;
        

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
        {},
        {},
        { v: "Исполнитель:", t: "s", 
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
            { v: this.executor, t: "s", 
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