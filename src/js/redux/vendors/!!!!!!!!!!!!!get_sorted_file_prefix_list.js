

export const get_sorted_file_prefix_list = ( arr ) => {

    let list = structuredClone( arr );

    let result = list.sort( ( a, b ) => {
        if( a.eventId === null && b.eventId === null ){
            return 1;
        }else{
            if( a.eventId === null ){
                return 1;
            }else if( b.eventId === null ){
                return -1;
            }else{
                if( a.eventId > b.eventId ){
                    return 1;
                }else{
                    return -1;
                };
            };
        };
    } );

    return result;

};