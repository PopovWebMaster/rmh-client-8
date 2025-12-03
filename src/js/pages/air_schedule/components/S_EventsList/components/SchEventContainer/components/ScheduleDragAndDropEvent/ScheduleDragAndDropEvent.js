
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleDragAndDropEvent.scss';

import { selectorData as scheduleResultDragEventSlise } from './../../../../../../../../redux/scheduleResultDragEventSlise.js';

// import { DropZone } from './components/DropZone/DropZone.js';
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
        // nextStartTime,

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

    let [ dragStartTime, setDragStartTime ] = useState( 0 );
    let [ startTimePlus, setStartTimePlus ] = useState( 0 );
    let [ nextStartTime, setNextStartTime ] = useState( null );


    let [ dropZoneIsActive, setDropZoneIsActive ] = useState( false );

    useEffect( () => {
        if( dragStartFrom === '' ){
            setDropZoneIsActive( false );
        }else{
            setDropZoneIsActive( true );

            
        }

    }, [ dragStartFrom ] );





    const getTargetState = () => {
        let result = target_event_is_aparticipant({
            startTime,
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

        console.dir({
            startTime,
            startTimePlus,
        });
        drop_app_release_on_empty( startTime + startTimePlus, event_id );
        setSelectedEventWindow_isOpen( false );
        setStartTimePlus( 0 );

    }

    const drag_start = ( e ) => {
        /*
            для перетаскивания событий в расписании
        */
        access_right( 'schedule_edit', () => {
            
            let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
            ScheduleReleaseDragEvent.SetStartFrom( START_FROM.SCHEDULE_EVENT );
            ScheduleReleaseDragEvent.DragStart.SetStartTime( startTime );
            ScheduleReleaseDragEvent.DragStart.SetDuration( durationTime );
            ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
            ScheduleReleaseDragEvent.DragStart.SetGridEventId( gridEventId );
            ScheduleReleaseDragEvent.DragStart.SetToStore();

        } );
    }
    
    const drag_end = () => {
        let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
        ScheduleReleaseDragEvent.ClearData();

        
    }


    const drag_over = ( e ) => {
        e.preventDefault();

        setIsLighter( true );
        let isTargetEvent = getTargetState();
        if( isTargetEvent ){
            setIsLighter( true );
        }else{
            setIsLighter( false );
        };

        dragOverHandler();

        setDropZoneIsActive( true );
        
    }

    const drag_leave = ( e ) => {
        setIsLighter( false );
        dragLeaveHandler();
        // setDragStartTime( 0 );
        setDropZoneIsActive( false );

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
                }else{
                    // drop_free_release_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                };
            }else if( dragStartFrom === START_FROM.RELEASE_APPLICATION ){
                if( isEmpty ){
                    if( dragStartEventId === null ){
                        setSelectedEventWindow_isOpen( true );
                        setDurationLimit( dragStartDuration );
                    }else{
                        drop_app_release_on_empty( startTime + startTimePlus, dragStartEventId );
                        setStartTimePlus( 0 );
                    };
                }else{
                    drop_app_release_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                };
            }else if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){
                if( isEmpty ){
                    // drop_schedule_event_on_empty( startTime + startTimePlus );
                    setStartTimePlus( 0 );
                }else{
                    // drop_schedule_event_on_complete( gridEventId );
                    setStartTimePlus( 0 );
                };
            };
        };
        setDropZoneIsActive( false );
        // setStartTimePlus( 0 );
        dragLeaveHandler();
        setNextStartTime( null );

        let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
        ScheduleReleaseDragEvent.ClearData();
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

                    nextStartTime = { nextStartTime }
                    setNextStartTime = { setNextStartTime }



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
