// AddFreeReleaseItem


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddFreeReleaseItem.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

// import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
// import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
// import { AWTextarea } from './../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
// import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

// import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js'


import { access_right } from './../../../../../../../../helpers/access_right.js';
import { get_metadata_from_video_file } from './../../../../../../../../helpers/get_metadata_from_video_file.js';
// import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { get_event_by_id } from './../../../../../../../../helpers/get_event_by_id.js';
import { EVENT_TYPE } from './../../../../../../../../config/layout.js';


import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';



const AddFreeReleaseItemComponent = ( props ) => {

    let {
        gridEventId,
        releases,
        eventId,
        firstSegmentId,

        // scheduleEventsList,
    } = props;

    const inputRef = useRef();

    const get_is_active = ( event_id, releases_list ) => {
        let result = false

        if( firstSegmentId === null || firstSegmentId === gridEventId ){
            let { type } = get_event_by_id( event_id );
            if( type === EVENT_TYPE.BLOCK ){
                result = true;
            }else if( type === EVENT_TYPE.FILE ){
                if( releases_list.length > 0 ){

                }else{
                    result = true;
                };
            };
        };
        
        return result;
    }

    const click = () => {
        if( access_right( 'schedule_edit' ) ){
            let isActive = get_is_active( eventId, releases );
            if( isActive ){
                let accept = [ '.mp4' ];
                let input = inputRef.current;
                input.setAttribute('accept', accept.join(',') );
                input.click();
            };
        };
    };

    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;

        get_metadata_from_video_file( files[ 0 ], ( fileName, fileDuration ) => {
            if( fileDuration !== null ){

                console.dir({
                    file_name: fileName,
                    file_duration: fileDuration,
                });

                let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                StoreScheduleResultEvents.CreateList();


                StoreScheduleResultEvents.CreateNewGridEvent({
                    startTime:      0,
                    eventId:        eventId,
                });

                StoreScheduleResultEvents.NewGridEventGroup.AddFreeRelease({
                    name:       fileName,
                    duration:   fileDuration,
                    startTime:  0,
                });

                StoreScheduleResultEvents.AddReleasesFromNewGridEvent( gridEventId );
                StoreScheduleResultEvents.SetListToStore( true );
            };
        } );
    }


    return (
        <div className = 'SEC_AddFreeReleaseItem'>
            { get_is_active( eventId, releases )? <span className = 'SEC_AddFreeReleaseItem_text' onClick = { click }>Взять из папки</span>: '' }
            

            <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { false }
            />


        </div>
    )

};

export function AddFreeReleaseItem( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <AddFreeReleaseItemComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
