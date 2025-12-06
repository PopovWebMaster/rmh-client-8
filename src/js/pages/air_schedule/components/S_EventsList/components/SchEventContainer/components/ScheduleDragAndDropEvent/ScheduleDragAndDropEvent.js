
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleDragAndDropEvent.scss';

import { selectorData as scheduleResultDragEventSlise } from './../../../../../../../../redux/scheduleResultDragEventSlise.js';

import { DropZone } from './../DropZone/DropZone.js';

import { target_event_is_aparticipant } from './../../vendors/target_event_is_aparticipant.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';

import { START_FROM } from './../../../../../../../../config/scheduleResult.js';

import { drop_free_release_on_empty } from './../../vendors/drop_free_release_on_empty.js';
import { drop_free_release_on_complete } from './../../vendors/drop_free_release_on_complete.js';
import { drop_schedule_event_on_empty } from './../../vendors/drop_schedule_event_on_empty.js';
// import { drop_schedule_event_on_complete } from './../../vendors/drop_schedule_event_on_complete.js';
import { drop_app_release_on_empty } from './../../vendors/drop_app_release_on_empty.js';
import { drop_app_release_on_complete } from './../../vendors/drop_app_release_on_complete.js';
import { drag_start_for_schedule_event } from './../../vendors/drag_start_for_schedule_event.js';
import { drop_release_as_event_on_empty } from './../../vendors/drop_release_as_event_on_empty.js';
import { drop_release_list_on_empty } from './../../vendors/drop_release_list_on_empty.js';
import { drop_release_list_on_complete } from './../../vendors/drop_release_list_on_complete.js';





import { SelectedEventWindow } from './../../components/SelectedEventWindow/SelectedEventWindow.js';

const ScheduleDragAndDropEventComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        eventId,
        eventType,
        gridEventId,
        isEmpty,
        isCompletd,

        setIsLighter,
        dragStartEventId,
        dragStartDuration,

        dragOverHandler = () => {},
        dragLeaveHandler = () => {},


        children,
        dragStartFrom,

    } = props;

    let [ selectedEventWindow_isOpen, setSelectedEventWindow_isOpen ] = useState( false );
    let [ selectedEventId, setSelectedEventId ] = useState( null );
    let [ durationLimit, setDurationLimit ] = useState( 0 );
    let [ startTimePlus, setStartTimePlus ] = useState( 0 );
    let [ nextStartTime, setNextStartTime ] = useState( null );
    let [ dropZoneIsActive, setDropZoneIsActive ] = useState( false );


    const getTargetState = () => {
        let result = target_event_is_aparticipant({
            startTime: startTime + startTimePlus,
            durationTime,
            eventId,
            eventType,
            gridEventId,
            isEmpty,
            isCompletd,
        });
        return result;
    }

    const selectEventClick = ( event_id ) => {

        if( dragStartFrom === START_FROM.RELEASE_APPLICATION ){
            drop_app_release_on_empty( startTime + startTimePlus, event_id );
            setSelectedEventWindow_isOpen( false );
            setStartTimePlus( 0 );
        }else if( dragStartFrom === START_FROM.RELEASE_LIST ){
            drop_release_list_on_empty( startTime + startTimePlus, event_id );
            setStartTimePlus( 0 );
            setSelectedEventWindow_isOpen( false );
        };  

    }

    const drag_start = ( e ) => {
        access_right( 'schedule_edit', () => {
            if( isCompletd ){
                drag_start_for_schedule_event( gridEventId );
                var img = document.createElement("img");
                e.dataTransfer.setDragImage(img, 0, 0);
            };
        } );
    }

    const drag_end = () => {
    }


    const drag_over = ( e ) => {
        e.preventDefault();

        

        let targetState= getTargetState();

        setDropZoneIsActive( targetState );
        setIsLighter( targetState );

    }

    const drag_leave = ( e ) => {
        setIsLighter( false );
        dragLeaveHandler();
        setNextStartTime( null )
    }

    const drop = ( e ) => {
        setIsLighter( false );
        let isTargetEvent = getTargetState();

        if( isTargetEvent ){
            if( dragStartFrom === START_FROM.RELEASE_FREE ){
                if( isEmpty ){
                    drop_free_release_on_empty( startTime + startTimePlus );
                    setStartTimePlus( 0 );
                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                }else{
                    drop_free_release_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                };
            }else if( dragStartFrom === START_FROM.RELEASE_APPLICATION ){
                if( isEmpty ){
                    if( dragStartEventId === null ){
                        setSelectedEventWindow_isOpen( true );
                        setDurationLimit( durationTime );
                    }else{
                        drop_app_release_on_empty( startTime + startTimePlus, dragStartEventId );
                        setStartTimePlus( 0 );
                        let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                        ScheduleReleaseDragEvent.ClearData();
                    };
                }else{
                    drop_app_release_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                };
            }else if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){
                if( isEmpty ){
                    drop_schedule_event_on_empty( startTime + startTimePlus );
                    setStartTimePlus( 0 );


                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                }else{
                    // drop_schedule_event_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                };
            }else if( dragStartFrom === START_FROM.RELEASE_AS_EVENT ){
                if( isEmpty ){
                    drop_release_as_event_on_empty( startTime + startTimePlus );
                    setStartTimePlus( 0 );
                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                }
            }else if( dragStartFrom === START_FROM.RELEASE_LIST ){

                if( isEmpty ){
                    if( dragStartEventId === null ){
                        setSelectedEventWindow_isOpen( true );
                        setDurationLimit( durationTime );
                    }else{
                        drop_release_list_on_empty( startTime + startTimePlus, dragStartEventId );
                        setStartTimePlus( 0 );
                        let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                        ScheduleReleaseDragEvent.ClearData();
                    };
                }else{
                    drop_release_list_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                    let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                    ScheduleReleaseDragEvent.ClearData();
                };
            };
        };
        setDropZoneIsActive( false );
        dragLeaveHandler();
        setNextStartTime( null );
    }

    return (

       <div 
            className = 'ScheduleDragAndDropEvent'
            draggable =     { isEmpty? false: true }

            onDragStart =   { drag_start }
            onDragEnd =     { drag_end }


            onDragOver =    { drag_over }
            onDragLeave =   { drag_leave }
            onDrop =        { drop }
        >
            <SelectedEventWindow
                selectedEventWindow_isOpen =        { selectedEventWindow_isOpen }
                setSelectedEventWindow_isOpen =     { setSelectedEventWindow_isOpen }
                selectedEventId =                   { selectedEventId }
                setSelectedEventId =                { setSelectedEventId }
                durationLimit =                     { durationLimit }
                alwaysOpen =                        { true }
                eventClickHandler =                 { selectEventClick }
            />

            { children }

            { dropZoneIsActive? (
                <DropZone 
                    isEmpty =           { isEmpty }
                    durationTime =      { durationTime }
                    startTime =         { startTime }
                    startTimePlus =     { startTimePlus }
                    setStartTimePlus =  { setStartTimePlus }

                    nextStartTime =     { nextStartTime }
                    setNextStartTime =  { setNextStartTime }



                    dropZoneIsActive = { dropZoneIsActive }
                />

            ): '' }






        </div>
    )

};

export function ScheduleDragAndDropEvent( props ){

    const scheduleResultDragEvent = useSelector( scheduleResultDragEventSlise );
    // const dispatch = useDispatch();

    return (
        <ScheduleDragAndDropEventComponent
            { ...props }
            dragStartFrom =         { scheduleResultDragEvent.dragStartFrom }
            dragStartEventId =      { scheduleResultDragEvent.dragStartEventId }
            dragStartDuration =     { scheduleResultDragEvent.dragStartDuration }

            // setDragebleReleaseId = { ( val ) => { dispatch( setDragebleReleaseId( val ) ) } }

        />
    );


}
