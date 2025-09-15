
import store from './../../../../../../../redux/store.js';

import { EVENT_TYPE } from './../../../../../../../config/layout.js';

export const complet_element_is_target = ( params ) => {
    let {
        eventId,
        eventType,
        gridEventId,
    } = params;

    let result = false;

    let { scheduleResult } = store.getState();

    let { 
        dragebleReleaseEventId,
        scheduleEventsListByGridEventId,
    } = scheduleResult;

    if( dragebleReleaseEventId !== null ){
        if( dragebleReleaseEventId === eventId ){
            if( eventType === EVENT_TYPE.BLOCK ){
                result = true;
            }else{
                let { releases, firstSegmentId } = scheduleEventsListByGridEventId[ gridEventId ];
                if( firstSegmentId === null || firstSegmentId === gridEventId ){
                    if( releases.length === 0 ){
                        result = true;
                    };
                };
            };
        }else{};
    }else{
        if( eventType === EVENT_TYPE.BLOCK ){
            result = true;
        }else{
            let { releases, firstSegmentId } = scheduleEventsListByGridEventId[ gridEventId ];
            if( firstSegmentId === null || firstSegmentId === gridEventId ){
                if( releases.length === 0 ){
                    result = true;
                };
            };
        };
    };

    return result;

}