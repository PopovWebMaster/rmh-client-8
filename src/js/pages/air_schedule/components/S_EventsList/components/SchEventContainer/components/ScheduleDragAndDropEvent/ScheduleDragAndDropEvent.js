
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

        dragStartEventId,
        dragStartDuration,

        children,
        dragStartFrom,

    } = props;

    let [ selectedEventWindow_isOpen, setSelectedEventWindow_isOpen ] = useState( false );
    let [ selectedEventId, setSelectedEventId ] = useState( null );
    let [ durationLimit, setDurationLimit ] = useState( 0 );

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
        drop_app_release_on_empty( startTime, event_id );
        setSelectedEventWindow_isOpen( false );

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
    }

    const drag_leave = ( e ) => {
        setIsLighter( false );
    }

    const drop = ( e ) => {
        setIsLighter( false );
        let isTargetEvent = getTargetState();
        if( isTargetEvent ){
            if( dragStartFrom === START_FROM.RELEASE_FREE ){
                if( isEmpty ){
                    drop_free_release_on_empty( startTime );
                }else{
                    drop_free_release_on_complete( gridEventId );
                };
            }else if( dragStartFrom === START_FROM.RELEASE_APPLICATION ){
                if( isEmpty ){
                    if( dragStartEventId === null ){
                        setSelectedEventWindow_isOpen( true );
                        setDurationLimit( dragStartDuration );
                    }else{
                        drop_app_release_on_empty( startTime );
                    };
                }else{
                    drop_app_release_on_complete( gridEventId );
                };
            }else if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){
                if( isEmpty ){
                    drop_schedule_event_on_empty( startTime );
                }else{
                    // drop_schedule_event_on_complete( gridEventId );
                };
            };
        };
    }

    return (

       <div 
            className = 'ScheduleDragAndDropEvent'
            draggable =     { true }
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

            <DropZone 
                isEmpty = { isEmpty }
            />


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
