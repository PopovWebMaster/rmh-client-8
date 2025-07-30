

export const get_filter_list_from_events_list = ( eventsList ) => {
    let result = [];
    
    for( let i = 0; i < eventsList.length; i++ ){
        result.push({
            eventId: eventsList[ i ],
            isUsed: false,
            withOnlyApplications: true,
        });
    };


    return result;

};