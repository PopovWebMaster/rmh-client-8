

export const get_all_lists_of_values_from_events_list = ( arr ) => {

    let eventListById = {};

    for( let i = 0; i < arr.length; i++ ){
        let { 
            id,
        } = arr[ i ];

        eventListById[ id ] = { ...arr[ i ] };

    };

    return {
        eventListById,
    };
};