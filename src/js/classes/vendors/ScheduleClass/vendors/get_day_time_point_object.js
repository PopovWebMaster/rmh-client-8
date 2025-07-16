


export const get_day_time_point_object = ( params ) => {

    let {
        time,
        sec,
        title,
        fill_count = 0,
        grid_event_id,

        is_reserved = null,
        reserved_name = null,

    } = params;

    let result = {
        time,
        sec,
        title,
        fill_count,
        grid_event_id,
    };

    if( is_reserved !== null ){
        result.is_reserved = is_reserved;
        result.reserved_name = reserved_name;

        
    };

    return result;

}