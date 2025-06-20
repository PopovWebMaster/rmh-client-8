

export const convert_time_hh_mm_to_ms = ( time_hh_mm ) => {

    let arr = time_hh_mm.split(':');
    let h = Number( arr[ 0 ] );
    let m = Number( arr[ 1 ] );

    let result = ( h * 60 * 60 * 1000 ) + ( m * 60 * 1000 );

    return result;

}