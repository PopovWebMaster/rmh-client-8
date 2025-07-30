


export const get_changet_filter_list = ( list, eventId, data ) => {
    let result = [];
    
    for( let i = 0; i < list.length; i++ ){
        if( list[ i ].eventId === eventId ){
            result.push({ ...list[ i ], ...data });
        }else{
            result.push({ ...list[ i ] });
        };
    };

    return result;
};