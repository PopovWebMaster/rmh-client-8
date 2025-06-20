


export const convert_time_str_to_sec = ( str ) => {

    let result = 0;

    let arr = str.split( ':' );
    let h = Number( arr[0] );
    let m = Number( arr[1] );
    let s = Number( arr[2] );

    result = Math.round( ( h * 3600 ) + ( m * 60 ) + s );

    return result;
};