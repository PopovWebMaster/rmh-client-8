
import store from './../../../../../../../redux/store.js';
import { setAltKayList } from './../../../../../../../redux/scheduleResultDragEventSlise.js';

import { set_event_listener_altKeyUp } from './set_event_listener_altKeyUp.js';

export const set_altKey_list = ( e = null, gridEventId ) => {

    if( e === null ){

    }else{
        if( e.altKey === true ){

            set_event_listener_altKeyUp();

            let newAltKayList = get_altKeyList_for_single_copyPast( gridEventId );
            store.dispatch( setAltKayList( newAltKayList ) );
 
        };


    };

}

function get_altKeyList_for_single_copyPast( gridEventId ){
    let result = {};
    let { scheduleResult } = store.getState();
    let { scheduleEventsListByGridEventId } = scheduleResult;
    let { firstSegmentId } = scheduleEventsListByGridEventId[ gridEventId ];
    if( firstSegmentId === null ){
        result[ gridEventId ] = true;
    };

    return result;
}

function get_altKeyList_for_group_copyPast( gridEventId ){
    let result = {};

    // let { scheduleResultDragEvent } = store.getState();
    // let { altKayList } = scheduleResultDragEvent;

    // if( altKayList[ gridEventId ] === true ){
    //     // delete alt_obj[ gridEventId ];
    // }else{
        // result[ gridEventId ] = true;
    // };

    return result;
}