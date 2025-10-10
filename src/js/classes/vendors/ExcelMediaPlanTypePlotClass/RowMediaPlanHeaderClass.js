import { RowClass } from './RowClass.js';

export class RowMediaPlanHeaderClass extends RowClass {

    constructor( rowNumber ){
        super( rowNumber );

        this.Create = this.Create.bind(this);

        this.Create();


    }

    Create(){
        let row = [
            { v: "Медиа-план", t: "s", 
                s: { 
                    font: { 
                        name: "Calibri", 
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
        this.AddRange( `A${this.rowNumber}:E${this.rowNumber}` );


    }
}