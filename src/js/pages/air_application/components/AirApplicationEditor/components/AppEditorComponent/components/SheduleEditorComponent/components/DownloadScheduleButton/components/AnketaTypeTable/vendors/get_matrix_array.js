
import { get_used_releases } from './get_used_releases.js';
import { get_matrix_rows } from './get_matrix_rows.js';
import { get_empty_matrix } from './get_empty_matrix.js';
import { get_filled_matrix } from './get_filled_matrix.js';

export const get_matrix_array = () => {

    let { releases, used_sab_app_id } = get_used_releases();

    let rows = get_matrix_rows( releases );


    let empty_matrix = get_empty_matrix( releases, rows );
    let matrix = get_filled_matrix( empty_matrix, releases, used_sab_app_id );

    return { 
        matrix,
        used_sub_app_id: used_sab_app_id,
    };

};