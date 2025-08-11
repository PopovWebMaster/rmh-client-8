
import { get_matrix_array } from './get_matrix_array.js';
export const downloadExcel = ( params ) => {
    let {
        tableHeader,
        executor,
        customer,
        price,
        mediaName,
        materialName,
        Schedule,
    } = params;

    console.dir({
         tableHeader,
        executor,
        customer,
        price,
        mediaName,
        materialName,
    });

    get_matrix_array( Schedule );

}