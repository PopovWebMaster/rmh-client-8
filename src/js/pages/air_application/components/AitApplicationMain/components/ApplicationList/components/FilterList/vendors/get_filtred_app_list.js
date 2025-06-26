

export const get_filtred_app_list = ( applicationList, currentCategoryIdOfListFilter ) => {

    let result = [];

    for( let i = 0; i < applicationList.length; i++ ){
        let { category_id } = applicationList[ i ];

        if( category_id === currentCategoryIdOfListFilter ){
            result.push( applicationList[ i ] );
        };
    };

    return result;
}