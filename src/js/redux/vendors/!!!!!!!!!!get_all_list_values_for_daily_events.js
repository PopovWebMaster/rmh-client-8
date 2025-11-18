

export const get_all_list_values_for_daily_events = ( eventsList ) => {

    let dailyEventsById = {};
    let dailySectors =  [];

/*
    cutPart: null
    dayNum: 4
    durationTime: 210
    eventId: 1
    finalNotes: "16+"
    firstSegmentId: null
    gridEventId: 5
    id: 5
    isKeyPoint: true
    is_premiere: false
    notes: "16+"
    pushIt: null
    releases: []
    startTime: 0
*/

    for( let i = 0; i < eventsList.length; i++ ){
        let { id, eventId } = eventsList[ i ];
        dailyEventsById[ id ] = { ...eventsList[ i ] };
    };

    return {
        dailyEventsById,
        dailySectors
    };

};