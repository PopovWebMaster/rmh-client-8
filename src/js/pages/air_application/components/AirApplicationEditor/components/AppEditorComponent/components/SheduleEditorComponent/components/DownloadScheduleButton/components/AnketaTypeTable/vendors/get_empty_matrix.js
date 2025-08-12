

export const get_empty_matrix = ( releases, rows ) => {

    let result = [];

    for( let YYYY_MM_DD in releases ){
        result.push({
            YYYY_MM_DD,
            rows: structuredClone( rows ),
        });

    };

    return result;

}