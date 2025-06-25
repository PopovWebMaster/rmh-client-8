

export const get_top_position_from_time = ( time ) => {

    let offset = 0.5;
    let max_procent = 95;
    let max_minutes = 1439; // 23:59

    let arr = time.split(':');
    let h = Number( arr[ 0 ] );
    let m = Number( arr[ 1 ] );
    let time_minutes = (h * 60) + m;

    let result = Math.round( ((( time_minutes * 100 / max_minutes ) * ( max_procent / 100 ) ) + offset) * 100 ) / 100;

    return result + '%';

};