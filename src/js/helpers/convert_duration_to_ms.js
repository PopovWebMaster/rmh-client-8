


export const convert_duration_to_ms = ( duration ) => {

    let result = duration;

    let time_ms = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        ms: 0,
    }

    let arr_point = duration.split( '.' );

    let arr_colon = arr_point[ 0 ].split( ':' );

     
    // time_ms.ms =        Number( arr_point[ 1 ] ) * 10;  
    time_ms.ms =        0;  

    time_ms.hours =     Number( arr_colon[ 0 ] ) * 3600000;
    time_ms.minutes =   Number( arr_colon[ 1 ] ) * 60000;
    time_ms.seconds =   Number( arr_colon[ 2 ] ) * 1000;

    result = Math.floor( time_ms.hours + time_ms.minutes + time_ms.seconds + time_ms.ms );

    return result;

};