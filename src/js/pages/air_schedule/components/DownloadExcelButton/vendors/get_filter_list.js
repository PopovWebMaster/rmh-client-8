import { get_event_by_id } from './../../../../../helpers/get_event_by_id.js';

export const get_filter_list = ( eventsList ) => {

    let result = {};
    let arr = [];



    for( let i = 0; i < eventsList.length; i++ ){
        let eventId = Number( eventsList[ i ] );
        let {
            name,
            style,
            category_id,
        } = get_event_by_id( eventId );

        // arr.push({
        //     eventId,
        //     name,
        //     style,
        //     category_id,

        //     isUsed: false,
        //     withOnlyApplications: true,
        // });
    };

    let arr_sort = arr.sort( ( a, b ) => {

        if( a.category_id === null || b.category_id === null  ){
            return -1;
        }else{
            if( a.category_id > b.category_id ){
                return 1;
            }else{
                return -1;
            };
        };

    } );

    //     let arr_sort = arr.sort( ( a, b ) => {

    //     if( a.category_id === null || b.category_id === null  ){
    //         return -1;
    //     }else{
    //         if( a.category_id > b.category_id ){
    //             return 1;
    //         }else if( a.category_id < b.category_id ){
    //             return -1;
    //         }else{
    //             if( a.eventId > b.eventId ){
    //                 return 1;
    //             }else{
    //                 return -1;
    //             };
    //         };
    //     };

    // } );


    console.dir( 'arr_sort' );
    console.dir( arr_sort );



    


    return arr_sort;
}