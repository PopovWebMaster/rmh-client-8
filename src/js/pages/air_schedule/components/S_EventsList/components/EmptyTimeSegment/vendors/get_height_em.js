
import { round_to_number } from './../../../../../../../helpers/round_to_number.js';

export const get_height_em = ( durationTime, min_em, max_em  ) => {

    let result = 0;
    // let min = Math.round( convert_time_str_to_sec( durationTime ) / 60 );
    let min = durationTime / 60;

    let k = 1.2; // взят от балды, на глаз, получил его методом подбора
    let res = round_to_number( Math.sqrt( k * min ), 2 );
    if( res <= min_em ){
        result = `${ min_em }em`;
    }else{
        if( res >= max_em ){
            result = `${ max_em }em`;
        }else{
            result = `${ res }em`;
        };
    };
    return result;

};