
// import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';


import store from './../../../../../../../redux/store.js';

import { START_FROM } from './../../../../../../../config/scheduleResult.js';
import { EVENT_TYPE } from './../../../../../../../config/layout.js';

import { get_event_by_id } from './../../../../../../../helpers/get_event_by_id.js';

export const complete_elem_is_aparticipant = ( params ) => {
    let {
        gridEventId,
    } = params;
    let result = false;

    let { 
        scheduleResult,
        scheduleResultDragEvent,
    } = store.getState();
    let { 
        dragStartFrom,
        dragStartGridEventId,
    } = scheduleResultDragEvent;

    let { scheduleEventsListByGridEventId } = scheduleResult;
    let { eventId, releases, firstSegmentId, durationTime } = scheduleEventsListByGridEventId[ gridEventId ];

    if( firstSegmentId === null || firstSegmentId === gridEventId ){

        

        let event = get_event_by_id( eventId );

        if( dragStartFrom === START_FROM.RELEASE_FREE ){
            
            if( event ){
                let { type } = event;
                if( type === EVENT_TYPE.BLOCK ){
                    result = true;
                }else{
                    if( releases.length === 0 ){
                        result = true;
                    };
                };
            };
        }else if( dragStartFrom === START_FROM.RELEASE_APPLICATION ){
            if( event ){
                let { type } = event;
                if( type === EVENT_TYPE.BLOCK ){
                    result = true;
                }else{
                    if( releases.length === 0 ){
                        result = true;
                    };
                };
            };
        }else if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){
            
            // if( gridEventId !== dragStartGridEventId ){

                
            //     if( event ){
            //         let { type } = event;
            //         if( type === EVENT_TYPE.BLOCK ){
            //             let dragEvent = scheduleEventsListByGridEventId[ dragStartGridEventId ];
            //             if( dragEvent.releases.length > 0 ){
            //                 result = true;
            //             };
            //         }else{
            //             if( releases.length === 0 ){
            //                 let dragEvent = scheduleEventsListByGridEventId[ dragStartGridEventId ];
            //                 if( dragEvent.releases.length  > 0 ){
            //                     result = true;
            //                 };
            //             };
            //         };
            //     };
            // };
        }else if( dragStartFrom === START_FROM.RELEASE_LIST ){
            let event = get_event_by_id( eventId );
            if( event ){
                let { type } = event;
                if( type === EVENT_TYPE.BLOCK ){
                    result = true;
                }else{
                    if( releases.length === 0 ){
                        result = true;
                    };
                };
            };
        };
    };

    return result;

}

