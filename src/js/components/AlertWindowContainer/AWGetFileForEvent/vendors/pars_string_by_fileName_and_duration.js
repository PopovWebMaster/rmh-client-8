
import { MIN_EVENT_DURATION_SEC } from './../../../../config/layout.js';

import { convert_time_str_to_sec } from './../../../../helpers/convert_time_str_to_sec.js'

export const pars_string_by_fileName_and_duration = ( str ) => {

    let duratin = null;
    let fileName = '';

    let t_split_index = str.indexOf( '\t' );

    if( t_split_index === -1 ){
        let arr_1 = str.split( '\n' );
        let str_2 = arr_1.join( ' ' );

        let arr_2 = str_2.split( '\r' );
        let str_3 = arr_2.join( '' );

        let arr = str_3.split( ' ' );

        let dur_str = null;

        for( let i = 0; i < arr.length; i++ ){
            let val = arr[ i ].trim();
            let sec = convert_time_str_to_sec( val );
            if( sec ){
                if( sec >= MIN_EVENT_DURATION_SEC ){
                    dur_str = val;
                    duratin = sec;
                    break;
                };
            };
        };


        if( dur_str !== null ){
            let arr_2 = str_3.split( dur_str );
            fileName = arr_2.join( ' ' );
        }else{
            fileName = str_3.trim();
        };
    }else{
        let arr = str.split( '\t' );
        for( let i = 0; i < arr.length; i++ ){
            let val = arr[ i ].trim();
            let sec = convert_time_str_to_sec( val );

            if( sec ){
                if( sec >= MIN_EVENT_DURATION_SEC ){
                    duratin = sec;
                };
            }else{
                if( typeof val === 'string' ){
                    if( val.length > 4 ){
                        fileName = val;
                    };
                };
            };
        };

        


        
    };


    return {
        duratin,
        fileName,
    }

}