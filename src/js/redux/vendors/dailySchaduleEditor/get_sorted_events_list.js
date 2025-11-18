


export const get_sorted_events_list = ( evants_list ) => {

    let result = evants_list.sort( ( a, b ) => {
        if( a.startTime > b.startTime ){
            return 1;
        }else{
            return -1;
        };
    } );

    return result;

};