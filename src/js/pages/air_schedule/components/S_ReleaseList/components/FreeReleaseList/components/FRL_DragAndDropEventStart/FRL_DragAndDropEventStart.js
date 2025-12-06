// FRL_DragAndDropEventStart


import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_DragAndDropEventStart.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

// import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';
import { get_linked_file_dutation_by_event_id } from './../../../../../../../../helpers/get_linked_file_dutation_by_event_id.js';


import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';

import { START_FROM } from './../../../../../../../../config/scheduleResult.js';

const FRL_DragAndDropEventStartComponent = ( props ) => {

    let {
        fileName,
        duration,
        eventId,

        children,
       
    } = props;

    const drag_start = ( e ) => {
        access_right( 'schedule_edit', () => {
            
            let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();

            let linked_file_dutation = get_linked_file_dutation_by_event_id( eventId );

            ScheduleReleaseDragEvent.SetStartFrom( START_FROM.RELEASE_FREE );
            ScheduleReleaseDragEvent.DragStart.SetFileName( fileName );
            ScheduleReleaseDragEvent.DragStart.SetDuration( duration + linked_file_dutation );
            ScheduleReleaseDragEvent.DragStart.SetDuration( duration + linked_file_dutation );
            ScheduleReleaseDragEvent.DragStart.SetLinkedFilesDuration( linked_file_dutation );

            ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
            ScheduleReleaseDragEvent.DragStart.SetToStore();

            var img = document.createElement("img");
            e.dataTransfer.setDragImage(img, 0, 0);

        } );
    }

    const drag_end = () => {
        // let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
        // ScheduleReleaseDragEvent.ClearData();

    }

    return (
        <div 
            className =     'FRL_DragAndDropEventStart'
            draggable =     { true }
            onDragStart =   { drag_start }
            onDragEnd =     { drag_end }
        >
            { children }
        </div>
    )

};

export function FRL_DragAndDropEventStart( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_DragAndDropEventStartComponent
            { ...props }

            // freeReleasesFilterCategoryId = { scheduleResult.freeReleasesFilterCategoryId }
            // freeReleasesFilterEventId = { scheduleResult.freeReleasesFilterEventId }
            // freeReleasesFiltered = { scheduleResult.freeReleasesFiltered }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


