

export const get_used_events_by_id = ( filterList ) => {

    let result = {};

    for( let i = 0; i < filterList.length; i++ ){
        let { eventId, isUsed, cellColor } = filterList[ i ];
        if( isUsed === true ){
            result[ eventId ] = {
                eventId,
                cellBackground: cellColor,
                textColor: 'auto',
            };
        };
    };

    return result;

};