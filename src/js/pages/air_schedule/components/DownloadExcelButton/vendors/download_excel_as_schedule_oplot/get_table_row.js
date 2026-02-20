
import { get_cell_A } from './get_cell_A.js';
import { get_cell_B } from './get_cell_B.js';
import { get_cell_C } from './get_cell_C.js';
import { get_cell_D } from './get_cell_D.js';
import { get_cell_E } from './get_cell_E.js';


export const get_table_row = ( rowData, rowNumber, isFirst = false ) => {

    
    let cell_A = get_cell_A();
    let cell_B = get_cell_B( rowData, rowNumber, isFirst );
    let cell_C = get_cell_C( rowData, rowNumber );
    let cell_D = get_cell_D( rowData, rowNumber );
    let cell_E = get_cell_E( rowData, rowNumber );


    return [ cell_A, cell_B, cell_C, cell_D, cell_E ];

}