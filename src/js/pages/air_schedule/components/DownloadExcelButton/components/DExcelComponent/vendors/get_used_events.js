

export const get_used_events = ( scheduleEventsLlist, filterList ) => {

    let result = [];
    let obj = {};
    for( let i = 0; i < filterList.length; i++ ){
        let { isUsed, eventId, withOnlyApplications } = filterList[ i ];
        if( isUsed ){
            obj[ eventId ] = {
                withOnlyApplications,
            };
        };
    };

    for( let i = 0; i < scheduleEventsLlist.length; i++ ){
        let { eventId } = scheduleEventsLlist[ i ];
        if( obj[ eventId ] ){
            result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
        };
    }

    return result;

}