

import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

// import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

import { set_schedule_list_changes_to_store } from './../../../../../vendors/set_schedule_list_changes_to_store.js';
import { cleare_altKey_list } from './cleare_altKey_list.js';

export const drop_schedule_event_on_empty = ( startTimeNext ) => {

    let { scheduleResultDragEvent } = store.getState();
    let { dragStartGridEventId, altKayList } = scheduleResultDragEvent;

    if( altKayList[ dragStartGridEventId ] === true ){
        let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
        let { 
            dragStartDuration,
            dragStartStartTime,
            dragStartEventId,
            dragStartCategoryId,
            dragStartFileName,
            dragStartLinkedFileDuration,
            altKayList
        } = scheduleResultDragEvent;

        // console.dir( 'altKayList' );
        // console.dir( structuredClone( altKayList ) );


        let { scheduleEventsListByGridEventId } = scheduleResult;

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateList();

        for( let gridEventId in altKayList ){

            // console.dir( 'scheduleEventsListByGridEventId[ gridEventId ]' );
            // console.dir( scheduleEventsListByGridEventId[ gridEventId ] );

            let { releases, durationTime, finalNotes, is_premiere, notes } = scheduleEventsListByGridEventId[ gridEventId ];

            let newGroupIndex = StoreScheduleResultEvents.CreateNewGridEvent({
                startTime:      startTimeNext,
                eventId:        dragStartEventId,
                durationTime,
                finalNotes,
                is_premiere,
                notes,

            });

            for( let i = 0; i < releases.length; i++ ){
                let { id, file_list, releaseName, releaseDuration, air_notes } = releases[ i ];

                let fileName = releaseName;
                if( file_list.length > 0 ){
                    fileName = file_list[ file_list.length - 1 ];
                };

                StoreScheduleResultEvents.NewGridEventGroup.AddFreeRelease({
                    name:       fileName,
                    duration:   releaseDuration,
                    startTime:  startTimeNext,
                    air_notes,
                }, newGroupIndex );

            };

        };

        
        StoreScheduleResultEvents.AddNewGridEvent();























        cleare_altKey_list();




    }else{
        set_schedule_list_changes_to_store( dragStartGridEventId, { startTime: startTimeNext } );
    };

    

}