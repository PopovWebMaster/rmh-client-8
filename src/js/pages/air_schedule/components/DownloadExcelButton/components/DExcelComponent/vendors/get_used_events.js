

export const get_used_events = ( scheduleEventsLlist, filterList, exportType = 'schedule' ) => {

    let result = [];
    let obj = {};
    for( let i = 0; i < filterList.length; i++ ){
        let { 
            isUsed, 
            eventId, 
            withOnlyApplications,
            quotationMarks,
            upperCase,
        } = filterList[ i ];
        if( isUsed ){
            obj[ eventId ] = {
                withOnlyApplications,
                quotationMarks,
                upperCase,
            };
        };
    };

    for( let i = 0; i < scheduleEventsLlist.length; i++ ){
        let { eventId } = scheduleEventsLlist[ i ];
        if( obj[ eventId ] ){

            if( exportType === 'schedule' ){
                if( obj[ eventId ].withOnlyApplications ){

                    if( scheduleEventsLlist[ i ].releases.length > 0 ){
                        result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
                    };

                }else{
                    result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
                };
            }else if( exportType === 'TV_program' ){
                let { firstSegmentId } = obj[ eventId ];
                if( firstSegmentId === null ){
                    result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
                }else{
                    if( scheduleEventsLlist[ i - 1 ] ){
                        if( scheduleEventsLlist[ i - 1 ].firstSegmentId === firstSegmentId ){

                        }else{
                            result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
                        };
                    }else{
                        result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
                    };
                };
            };
        };
    };

    console.dir( result );

    return result;

}