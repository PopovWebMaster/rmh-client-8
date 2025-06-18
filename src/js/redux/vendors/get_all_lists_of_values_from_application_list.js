


export const get_all_lists_of_values_from_application_list = ( arr ) => {

    let applicationById = {};


    for( let i = 0; i < arr.length; i++ ){
        let { 
            id,
        } = arr[ i ];

        applicationById[ id ] = { ...arr[ i ] };

    };

    return {
        applicationById,
    }

};