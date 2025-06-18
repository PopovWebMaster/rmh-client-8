


export const get_all_colors_from_category_list = ( arr ) => {

    let result = [];

    let ignore = [
        '#000000',
        '#000',
        '#ffffff',
        '#fff',
    ];

    
    for( let i = 0; i < arr.length; i++ ){

        let { colorText, colorBG } = arr[ i ];

        if( result.indexOf( colorText ) === -1 ){
            if( ignore.indexOf( colorText ) !== -1 ){
                result.push( colorText );
            };
        };

        if( result.indexOf( colorBG ) === -1 ){
            if( ignore.indexOf( colorText ) !== -1 ){
                result.push( colorBG );
            };
            
        };

    };


    return result;

}