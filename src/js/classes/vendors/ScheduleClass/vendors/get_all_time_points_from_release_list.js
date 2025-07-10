

export const get_all_time_points_from_release_list = ( list ) => {

    let obj = {};

    for( let i = 0; i < list.length; i++ ){
        let { time_sec } = list[ i ];
        obj[ time_sec ] = true;
    };

    let arr = [];

    for( let sec in obj ){
        arr.push( Number( sec ) );
    };

    let result = arr.sort( ( a, b ) => {
        if( a > b ){ return 1 };
        if( a < b ){ return -1 };
        if( a === b ){ return 1 };
    } );

    return result;

}