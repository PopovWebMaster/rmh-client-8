

export const get_filtred_app_list = ( params ) => {

    let {
        applicationList,
        currentManagerId,
        currentEventIdOfListFilter,
        currentCategoryIdOfListFilter,
    } = params;

    let result = [];

    if( currentManagerId === null ){
        for( let i = 0; i < applicationList.length; i++ ){
            let { category_id, event_id } = applicationList[ i ];
            let categoty_ok =   category_id === currentCategoryIdOfListFilter;
            let event_ok =      event_id === currentEventIdOfListFilter;
            if( categoty_ok && event_ok ){
                result.push( applicationList[ i ] );
            };
        };
    }else{
        for( let i = 0; i < applicationList.length; i++ ){
            let { category_id, manager, event_id } = applicationList[ i ];

            let manager_ok =    manager.id === currentManagerId;
            let categoty_ok =   category_id === currentCategoryIdOfListFilter;
            let event_ok =      event_id === currentEventIdOfListFilter;

            if( categoty_ok && event_ok && manager_ok ){
                result.push( applicationList[ i ] );
            };

        };

    };

    return result;
}