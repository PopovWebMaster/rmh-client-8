
import { RowClass } from './RowClass.js';

export class RowReportTableClass extends RowClass {

    constructor( rowNumber, props ){
        super( rowNumber );

        let {
            cell_A = '',
            cell_B = '',
            cell_C = '',
            cell_D = '',
            cell_E = '', 
        } = props;

        this.cell_A = cell_A;
        this.cell_B = cell_B;
        this.cell_C = cell_C;
        this.cell_D = cell_D;
        this.cell_E = cell_E;


        this.Create = this.Create.bind(this);

        this.Create();



    }

    Create(){
        let row = [
            { v: this.cell_A, t: "s", 
                s: { 
                    font: { 
                        name:   'Times New Roma', 
                        sz:     9,  
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                } 
            },
            { v: this.cell_B, t: "s", 
                s: { 
                    font: { 
                        name:   'Times New Roma', 
                        sz:     9,  
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                } 
            },
            { v: this.cell_C, t: "s", 
                s: { 
                    font: { 
                        name:   'Times New Roma', 
                        sz:     9,  
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                } 
            },
            { v: this.cell_D, t: "s", 
                s: { 
                    font: { 
                        name:   'Times New Roma', 
                        sz:     9,  
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                } 
            },
            { v: this.cell_E, t: "n", 
                s: { 
                    font: { 
                        name:   'Times New Roma', 
                        sz:     9,  
                    },
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                    },
                } 
            },
            
        ];

        

        this.AddRow( row );
        // this.AddRange( `D${this.rowNumber}:AO${this.rowNumber}` );
        // this.AddRange( `C${this.rowNumber}:E${this.rowNumber}` );
        // this.AddRowHeight( this.rowHeight );


    }
}