


export const convert_ms_to_time = ( milliseconds ) => {
    
    let hours = Math.floor( milliseconds / 1000 / 60 / 60 );
    let rest_from_hours_ms = milliseconds - ( hours * 1000 * 60 * 60 );
    let minutes = Math.floor( rest_from_hours_ms / 1000 / 60 );
    let rest_from_minutes_ms = rest_from_hours_ms - ( minutes * 1000 * 60 );

    let seconds = Math.floor( rest_from_minutes_ms / 1000 );
    let rest_ms = rest_from_minutes_ms - ( seconds * 1000 );

    let formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":") + '.' + `${rest_ms}000`.slice( 0, 2 );

    return formattedTime;
};