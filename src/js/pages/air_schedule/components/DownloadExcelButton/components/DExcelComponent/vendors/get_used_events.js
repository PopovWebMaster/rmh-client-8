

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
            staples,
        } = filterList[ i ];
        if( isUsed ){
            obj[ eventId ] = {
                withOnlyApplications,
                quotationMarks,
                upperCase,
                staples,
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
                result.push( { ...scheduleEventsLlist[ i ], ...obj[ eventId ] } );
            };
        };
    };

    if( exportType === 'schedule' ){
        result = add_cut_info_to_release_name( result );
    };

    if( exportType === 'TV_program' ){
        result = remove_cut_events( result );
    };

    return result;

}

function remove_cut_events( arr ){
    let result = [];

    for( let i = 0; i < arr.length; i++ ){
        if( arr[ i ].firstSegmentId === null ){
            result.push( { ...arr[ i ] } );
        }else{
            if( arr[ i - 1 ] ){
                if( arr[ i - 1 ].firstSegmentId === arr[ i ].firstSegmentId ){

                }else{
                    result.push( { ...arr[ i ] } );
                };
            }else{
                result.push( { ...arr[ i ] } );
            };  
        }

    };
    return result;
};

function add_cut_info_to_release_name( arr ){
    let result = [];
    for( let i = 0; i < arr.length; i++ ){
        let item = { ...arr[ i ] }
        let { finalNotes, cutPart, firstSegmentId } = item;
        if( firstSegmentId !== null ){
            if( cutPart !== null ){
                item.finalNotes = `${finalNotes} (Порезка ${ cutPart })`;
            };
        };
        result.push( item );
    };
    return result;
}