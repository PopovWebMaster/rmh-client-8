

import { get_sorted_events_list } from './get_sorted_events_list.js';
import { get_used_events_list } from './get_used_events_list.js';


export const get_all_data_from_evants_list = ( evants_list ) => {

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

    let sorted_events_list = get_sorted_events_list( evants_list );

    let daily_events_list_by_id = {};
    let used_events = {};

    for( let i = 0; i < sorted_events_list.length; i++ ){
        let { id, eventId } = sorted_events_list[ i ];
        daily_events_list_by_id( id );
        used_events[ eventId ] = true;

    };

    get_used_events_list( used_events );

    console.dir( 'sorted_events_list' );
    console.dir( sorted_events_list );


};