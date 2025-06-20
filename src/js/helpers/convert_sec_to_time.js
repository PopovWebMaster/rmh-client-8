


export const convert_sec_to_time = ( all_seconds ) => {

    let hours = 0;

    if( all_seconds >= ( 1 * 60 * 60  )){
        hours = Math.floor( all_seconds / 60 / 60 );
    };
    let rest_from_hours_sec = all_seconds - ( hours * 60 * 60 );
    let minutes = Math.floor( rest_from_hours_sec / 60 )

    let seconds = Math.round( rest_from_hours_sec - ( minutes * 60 )) ;

    let formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");

    return formattedTime;
};