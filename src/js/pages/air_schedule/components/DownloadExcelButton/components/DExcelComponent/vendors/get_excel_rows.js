
import { get_cell_A } from './get_cell_A.js';
import { get_cell_B } from './get_cell_B.js';
import { get_cell_C } from './get_cell_C.js';
import { get_cell_D } from './get_cell_D.js';
import { get_cell_E } from './get_cell_E.js';
import { get_cell_D_formula } from './get_cell_D_formula.js';

export const get_excel_rows = ( startRowNumber, arr ) => {

    let result = [];
    let formula_row = startRowNumber;
    let countRows = 0;

    let first_i = 0;


    for( let i = 0; i < arr.length; i++ ){
        let cell_0 = '';
        let cell_1 = '';
        let cell_2 = '';
        let cell_3 = '';
        let cell_4 = '';
        
        // if( arr[ i ][ 3 ] === 'formula' ){
        //     let rowFrom = first_i + startRowNumber;
        //     let rowTo = rowFrom + countRows - 1;
        //     cell_3 = get_cell_D_formula( rowFrom, rowTo );
        //     countRows = 0;
        //     first_i = i + 1;
        // }else{
            cell_0 = get_cell_A( arr[ i ][ 0 ] );
            cell_1 = get_cell_B( arr[ i ][ 1 ] );
            cell_2 = get_cell_C( arr[ i ][ 2 ] );
            cell_3 = get_cell_D( arr[ i ][ 3 ] );
            cell_4 = get_cell_E( arr[ i ][ 4 ] );
        //     countRows++;
        // };

        result.push( [
            cell_0,
            cell_1,
            cell_2,
            cell_3,
            cell_4,
        ] );

    };

    return result;

};