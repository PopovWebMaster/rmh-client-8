
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';
import { cleare_altKey_list } from './cleare_altKey_list.js';

export const drop_alt_event_on_empty = ( startTimeNext ) => {

    let { scheduleResultDragEvent } = store.getState();
    let { dragStartAltGridEventId, altGridEventsListById } = scheduleResultDragEvent;
    let { gridEventsGroup, eventId } = altGridEventsListById[ dragStartAltGridEventId ];


    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    if( gridEventsGroup.length === 1 ){
        let { releases, durationTime, finalNotes, is_premiere, notes } = gridEventsGroup[ 0 ];

        let newGroupIndex = StoreScheduleResultEvents.CreateNewGridEvent({
            startTime:      startTimeNext,
            eventId:        eventId,
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

        StoreScheduleResultEvents.AddNewGridEvent();

        cleare_altKey_list();

    }else{
        console.dir( 'drop_alt_event_on_empty' );
    };

};