
import { get_event_by_id } from './../../../../../helpers/get_event_by_id.js';

export const get_filter_list_from_events_list = ( eventsList ) => {
    let result = [];


    for( let i = 0; i < eventsList.length; i++ ){
        let eventId = Number( eventsList[ i ] );
        let {
            name,
            style,
            category_id,
        } = get_event_by_id( eventId );


        result.push({
            eventId,
            name,
            style,
            category_id,

            isUsed: false,
            withOnlyApplications: true,
            quotationMarks: false,
            upperCase: true,
        });
    };

    let result_sort = result.sort( ( a, b ) => {

        if( a.category_id === null || b.category_id === null  ){
            return -1;
        }else{
            if( a.category_id > b.category_id ){
                return 1;
            }else if( a.category_id < b.category_id ){
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


    return result_sort;

};