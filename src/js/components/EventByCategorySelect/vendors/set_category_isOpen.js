

export const set_category_isOpen = ( params ) => {
    let {
        listTree,
        category_id,
        isOpen,
    } = params;

    let result = [];
    for( let i = 0; i < listTree.length; i++ ){
        let item = structuredClone( listTree[ i ] );
        if( Number( category_id ) === Number( item.category_id ) ){
            item.isOpen = isOpen;
        };
        result.push( item );

    };

    return result;

}