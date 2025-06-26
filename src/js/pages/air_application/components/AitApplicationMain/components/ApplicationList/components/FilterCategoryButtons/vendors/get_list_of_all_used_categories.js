
import { DEFAULT_CATEGORY } from './../../../../../../../../../config/layout.js'

export const get_list_of_all_used_categories = ( applicationList, categoryListById ) => {

    let listId = [];
    let withoutIsset = false;
    let result = [];

    for( let i = 0; i < applicationList.length; i++ ){
        let { category_id } = applicationList[ i ];

        if( category_id === null ){
            withoutIsset = true;
        }else{
            if( listId.indexOf( category_id ) === -1 ){
                listId.push( category_id );
            };
        };
    };

    for( let i = 0; i < listId.length; i++ ){
        let id = listId[ i ];
        result.push( { ...categoryListById[ id ] } );
    };

    if( withoutIsset ){

        let category = { ...DEFAULT_CATEGORY };
        category.name = 'Без категории';
        result.push( category );

    };


    return result;


}