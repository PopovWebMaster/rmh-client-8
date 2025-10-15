
// import { get_used_releases } from './../../../vendors/get_used_releases.js';
import { get_used_releases } from './../../vendors/get_used_releases.js';


import { convert_date_str_to_format } from './../../../../../../../../../../../../helpers/convert_date_str_to_format.js';
import { convert_sec_to_time } from './../../../../../../../../../../../../helpers/convert_sec_to_time.js';
import { get_full_day_info_from_day_seconds } from './../../../../../../../../../../../../helpers/get_full_day_info_from_day_seconds.js';

export const get_matrix_plot = () => {

    let result = [];

    let { releases } = get_used_releases();

    for( let YYYY_MM_DD in releases ){
        for( let i = 0; i < releases[ YYYY_MM_DD ].length; i++ ){
            let { startTime } = releases[ YYYY_MM_DD ][ i ];
            let cell_0 = '';
            let cell_1 = '';
            let cell_2 = convert_sec_to_time( startTime, true );
            if( i === 0 ){
                cell_0 = convert_date_str_to_format.YY_MM_DD_points_reverse( YYYY_MM_DD );
                let date_obj = new Date( YYYY_MM_DD );
                let seconds = Math.floor( date_obj.getTime() / 1000 );
                let { dayName } = get_full_day_info_from_day_seconds( seconds );
                cell_1 = dayName.toLowerCase();
            };

            result.push([ cell_0, cell_1, cell_2 ]);

        };
    };


    return result;


};