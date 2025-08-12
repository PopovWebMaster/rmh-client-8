


export const get_filled_matrix = ( empty_matrix, releases ) => {

    let result = [];

    for( let i = 0; i < empty_matrix.length; i++ ){
        let { YYYY_MM_DD, rows } = empty_matrix[ i ];

        let start_index = 0;
        let fill_rows = [];

        for( let row_index = 0; row_index < rows.length; row_index++ ){

            let { interval } = rows[ row_index ];
            let { from, to } = interval;

            let sub_app_id = null;
            
            for( let rel_index = start_index; rel_index < releases[ YYYY_MM_DD ].length; rel_index++ ){
                let { startTime } = releases[ YYYY_MM_DD ][ rel_index ];

                if( startTime >= from && startTime <= to ){
                    sub_app_id = releases[ YYYY_MM_DD ][ rel_index ].sub_app_id;
                    start_index = rel_index + 1;
                    break;
                }else{
                    sub_app_id = null;
                };
            };

            let obj = { ...rows[ row_index ] };
            obj.sub_app_id = sub_app_id;
            fill_rows.push( obj );

        };

        result.push({
            YYYY_MM_DD,
            rows: fill_rows,
        });

    };

    return result;

};