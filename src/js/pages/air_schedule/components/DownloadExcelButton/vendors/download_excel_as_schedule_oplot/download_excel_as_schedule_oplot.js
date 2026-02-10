
import { get_matrix_as_list } from './get_matrix_as_list.js';

export const download_excel_as_schedule_oplot = ( params ) => {
    let {
        filterList,
        highlightFiles,
    } = params;

    let matrix_list = get_matrix_as_list({
        filterList,
        highlightFiles,
    });



    // console.dir( 'matrix_list' );
    // console.dir( matrix_list );




}