


export const get_all_lists_of_values_from_application_list = ( arr ) => {

    let applicationById = {};

    // let managersById = {};
    // let managersList = [];

    for( let i = 0; i < arr.length; i++ ){
        let { 
            id,
            manager,
        } = arr[ i ];

        applicationById[ id ] = { ...arr[ i ] };

        // if( managersById[ manager.id ] ){

        // }else{
        //     managersById[ manager.id ] = { ...manager };
        // };

    };

    // for( let id in managersById ){
    //     managersList.push( { ...managersById[ id ] } );
    // };

    return {
        applicationById,
        // managersById,
        // managersList,
    }

};