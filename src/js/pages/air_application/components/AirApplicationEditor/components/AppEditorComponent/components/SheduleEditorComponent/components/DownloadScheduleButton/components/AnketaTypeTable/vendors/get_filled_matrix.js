


export const get_filled_matrix = ( empty_matrix, releases, used_sab_app_id ) => {
    let result = [];
    let matrix_obj = {};
    for( let i = 0; i < empty_matrix.length; i++ ){
        let { YYYY_MM_DD, rows } = empty_matrix[ i ];
        let rows_SA = [];
        for( let y = 0; y < rows.length; y++ ){
            let item = structuredClone( rows[ y ] );
            item.rowSubAppId = null;
            rows_SA.push( item );
        };
        matrix_obj[ YYYY_MM_DD ] = structuredClone( rows_SA );
    };

    let day_length = empty_matrix.length;
    let rows_length = 0;
    if( empty_matrix[ 0 ] ){
        rows_length = empty_matrix[ 0 ].rows.length;
    };
    // console.dir({
    //     empty_matrix,
    //     matrix_obj,
    //     releases,
    //     day_length,
    //     rows_length,
    // });

    const add_to_tartix = ( yyyy_mm_dd, start_time, subAppId ) => {
        for( let i = 0; i < matrix_obj[ yyyy_mm_dd ].length; i++ ){
            let { interval, sub_app_id, title, rowSubAppId } = matrix_obj[ yyyy_mm_dd ][ i ];
            let { from, to } = interval;

            if( rowSubAppId === null ){
                if( start_time >= from && start_time <= to ){
                    if( sub_app_id === null ){
                        matrix_obj[ yyyy_mm_dd ][ i ].sub_app_id = subAppId;
                        // matrix_obj[ yyyy_mm_dd ][ i ].rowSubAppId = subAppId;

                        for( let y = 0; y < empty_matrix.length; y++ ){
                            let { YYYY_MM_DD } = empty_matrix[ y ];
                            matrix_obj[ YYYY_MM_DD ][ i ].rowSubAppId = subAppId;
                        };



                        break ;
                    };
                };
            }else{
                if( rowSubAppId === subAppId ){
                    if( start_time >= from && start_time <= to ){
                        if( sub_app_id === null ){
                            matrix_obj[ yyyy_mm_dd ][ i ].sub_app_id = subAppId;
                            break ;
                        };
                    };
                };
            };

            // let { from, to } = interval;
            // if( start_time >= from && start_time <= to ){
            //     if( sub_app_id === null ){
            //         matrix_obj[ yyyy_mm_dd ][ i ].sub_app_id = subAppId;
            //         break ;
            //     };
            // };
        };
    };

    for( let SAI_index = 0; SAI_index < used_sab_app_id.length; SAI_index++ ){
        let sabAppId = used_sab_app_id[ SAI_index ];
        for( let YYYY_MM_DD in releases ){
            for( let rel_index = 0; rel_index < releases[ YYYY_MM_DD ].length; rel_index++ ){
                let { sub_app_id, startTime } = releases[ YYYY_MM_DD ][ rel_index ];
                if( sub_app_id === sabAppId ){
                    add_to_tartix( YYYY_MM_DD, startTime, sabAppId );
                };
            };
        };
    };
    // console.dir( 'matrix_obj' );
    // console.dir( matrix_obj );

    for( let i = 0; i < empty_matrix.length; i++ ){
        let { YYYY_MM_DD, /*rows*/ } = empty_matrix[ i ];
        result.push({
            YYYY_MM_DD,
            rows: structuredClone( matrix_obj[ YYYY_MM_DD ] ),
        });

    };

    return result;




    /*
    let matrix = structuredClone( empty_matrix );

    const add_to_tartix = ( yyyy_mm_dd, start_time, subAppId ) => {
        output: for( let i = 0; i < matrix.length; i++ ){
            let { YYYY_MM_DD, rows } = matrix[ i ];
            if( YYYY_MM_DD === yyyy_mm_dd ){
                for( let y = 0; y < rows.length; y++ ){
                    let { interval, sub_app_id, title } = rows[ y ];
                    let { from, to } = interval;
                    if( start_time >= from && start_time <= to ){
                        if( sub_app_id === null ){

                            matrix[ i ].rows[ y ].sub_app_id = subAppId;
                            break output;
                        };
                    };
                };
            };
        };
    }

    for( let SAI_index = 0; SAI_index < used_sab_app_id.length; SAI_index++ ){
        let sabAppId = used_sab_app_id[ SAI_index ];

        for( let YYYY_MM_DD in releases ){
            for( let rel_index = 0; rel_index < releases[ YYYY_MM_DD ].length; rel_index++ ){
                let { sub_app_id, startTime } = releases[ YYYY_MM_DD ][ rel_index ];
                if( sub_app_id === sabAppId ){
                    add_to_tartix( YYYY_MM_DD, startTime, sabAppId );
                };
            };
        };

    };


    return matrix;
*/
};