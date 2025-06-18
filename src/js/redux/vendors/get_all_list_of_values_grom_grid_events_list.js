


export const get_all_list_of_values_grom_grid_events_list = ( arr ) => {

    let gridDayEventsListById = {};

    for( let day_num = 0; day_num < arr.length; day_num++ ){
        for( let i = 0; i < arr[ day_num ].length; i++ ){
            let { 
                id,
            } = arr[ day_num ][ i ];
            gridDayEventsListById[ id ] = { ...arr[ day_num ][ i ] };
        };

    };

    return {
        gridDayEventsListById,
    };
};