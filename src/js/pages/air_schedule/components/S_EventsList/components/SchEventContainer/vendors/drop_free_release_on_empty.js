
import store from './../../../../../../../redux/store.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../classes/StoreScheduleResultEventsClass.js';

// import { EVENT_TYPE } from './../../../../../../../config/layout.js';


// import { get_event_by_id } from './../../../../../../../helpers/get_event_by_id.js';



export const drop_free_release_on_empty = ( startTime ) => {

    let { scheduleResultDragEvent, layout, scheduleResult } = store.getState();
    let { 
        dragStartDuration,
        dragStartStartTime,
        dragStartEventId,
        dragStartCategoryId,
        dragStartFileName,
        dragStartLinkedFileDuration,
    } = scheduleResultDragEvent;

    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
    StoreScheduleResultEvents.CreateList();

    StoreScheduleResultEvents.CreateNewGridEvent({
        startTime:      startTime,
        eventId:        dragStartEventId,
    });

    StoreScheduleResultEvents.NewGridEventGroup.AddLinkedFilesFromEvent();
    StoreScheduleResultEvents.NewGridEventGroup.AddFreeRelease({
        name:       dragStartFileName,
        duration:   dragStartDuration - dragStartLinkedFileDuration,
        startTime:  dragStartStartTime,
    });




    StoreScheduleResultEvents.AddNewGridEvent();

    


}