
import start from './../../../../../../../redux/store.js';

import { START_FROM } from './../../../../../../../config/scheduleResult.js';
import { ScheduleReleaseDragEventClass } from './../../../../../../../classes/ScheduleReleaseDragEventClass.js';


export const drag_start_for_schedule_event = ( gridEventId ) => {

    let { scheduleResult } = start.getState();
    let { scheduleEventsListByGridEventId, scheduleEventsList } = scheduleResult;

    let {
        durationTime,
        eventId,
        startTime,
        firstSegmentId,

    } = scheduleEventsListByGridEventId[ gridEventId ];

    let minStartTime = 0;
    let maxStartTime = 24*60*60;

    if( firstSegmentId === null ){

    }else{
        for( let i = 0; i < scheduleEventsList.length; i++ ){
            if( scheduleEventsList[ i ].gridEventId === gridEventId ){
                if( scheduleEventsList[ i ].firstSegmentId === gridEventId ){
                    if( scheduleEventsList[ i + 1 ] ){
                        for( let z = i + 1; z <scheduleEventsList.length; z++ ){
                            if( scheduleEventsList[ z ].firstSegmentId === firstSegmentId ){
                                maxStartTime = scheduleEventsList[ z ].startTime;
                                break;
                            };
                        };
                    };
                }else{
                    if( scheduleEventsList[ i - 1 ] ){
                        for( let y = i - 1; y >=0; y-- ){
                            if( scheduleEventsList[ y ].firstSegmentId === firstSegmentId ){
                                minStartTime = scheduleEventsList[ y ].startTime;
                                break;
                            };
                        };
                    };
                    if( scheduleEventsList[ i + 1 ] ){
                        for( let z = i + 1; z < scheduleEventsList.length; z++ ){
                            if( scheduleEventsList[ z ].firstSegmentId === firstSegmentId ){
                                maxStartTime = scheduleEventsList[ z ].startTime;
                                break;
                            };
                        };
                    };
                };
                break;
            };
        };
    }



    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
    ScheduleReleaseDragEvent.SetStartFrom( START_FROM.SCHEDULE_EVENT );
    ScheduleReleaseDragEvent.DragStart.SetStartTime( startTime );
    ScheduleReleaseDragEvent.DragStart.SetDuration( durationTime );
    ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
    ScheduleReleaseDragEvent.DragStart.SetGridEventId( gridEventId );

    ScheduleReleaseDragEvent.DragStart.SetMinStartTime( minStartTime );
    ScheduleReleaseDragEvent.DragStart.SetMaxStartTime( maxStartTime );

    ScheduleReleaseDragEvent.DragStart.SetToStore();

}