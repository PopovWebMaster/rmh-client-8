
import { RowClass } from './RowClass.js';
import { get_matrix_footer_first_cells } from './cells/get_matrix_footer_first_cells.js';
import { get_matrix_footer_values_cells } from './cells/get_matrix_footer_values_cells.js';
import { get_matrix_footer_last_cells } from './cells/get_matrix_footer_last_cells.js';

export class RowMatrixFooterClass extends RowClass {
    constructor( rowNumber, rows ){
        super( rowNumber );

        this.Create = this.Create.bind(this);

        this.martix_rows = rows;


        this.Create();

    }

    Create(){

        let firstCells = get_matrix_footer_first_cells();

        let firstRow = this.rowNumber - this.martix_rows.length;

        let centerCells = get_matrix_footer_values_cells( firstRow, this.rowNumber-1 );
        let lastCells = get_matrix_footer_last_cells( firstRow, this.rowNumber-1 );

        let row = [
            ...firstCells,
            ...centerCells,
            ...lastCells,
            
        ];


        this.AddRow( row );

        // this.AddRange( `A${this.rowNumber}:A${this.rowNumber + 1 }` );



        



    }
}