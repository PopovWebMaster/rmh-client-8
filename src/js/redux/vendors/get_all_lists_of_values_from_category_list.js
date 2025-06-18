

export const get_all_lists_of_values_from_category_list = ( arr ) => {

    let allUsedColors = [];
    let allUsedNames = [];
    let allUsedPrefixes = [];

    let categoryListById = {};

    let color_ignore = [
        '#000000',
        '#000',
        '#ffffff',
        '#fff',
    ];

    for( let i = 0; i < arr.length; i++ ){
        let { 
            id,
            colorText,
            colorBG,
            name,
            prefix,
        } = arr[ i ];

        categoryListById[ id ] = { ...arr[ i ] };
        // categoryListById[ id ] = arr[ i ];


        if( allUsedColors.indexOf( colorText ) === -1 ){
            if( color_ignore.indexOf( colorText ) !== -1 ){
                allUsedColors.push( colorText );
            };
        };

        if( allUsedColors.indexOf( colorBG ) === -1 ){
            if( color_ignore.indexOf( colorText ) !== -1 ){
                allUsedColors.push( colorBG );
            };
        };

        allUsedNames.push( name );
        allUsedPrefixes.push( prefix );

    };

    return {
        allUsedColors,
        allUsedNames,
        allUsedPrefixes,
        categoryListById,
    };
};