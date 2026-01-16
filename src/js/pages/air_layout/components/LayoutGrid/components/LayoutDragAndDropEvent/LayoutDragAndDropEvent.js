
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LayoutDragAndDropEvent.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { selectorData as layoutDragEventSlise, clearAll } from './../../../../../../redux/layoutDragEventSlise.js';

import { DRAG_START } from './../../../../../../config/layout.js';

import { access_right } from './../../../../../../helpers/access_right.js';
import { drag_start_for_grid_event } from './vendors/drag_start_for_grid_event.js';
import { drop_zone_is_aparticipant } from './vendors/drop_zone_is_aparticipant.js';
import { drop_grid_event_on_empty } from './vendors/drop_grid_event_on_empty.js';
import { drop_new_event_on_empty } from './vendors/drop_new_event_on_empty.js';

import { LayoutDragZone } from './../LayoutDragZone/LayoutDragZone.js';



const LayoutDragAndDropEventComponent = ( props ) => {

    let {
        children,

        isCompletd = false,
        isEmpty = false,
        gridEventId = null,
        startTime,
        durationTime,

        dragIsActive,
        setDragIsActive,

        dragLeaveHandler = () => {},

        dragStartFrom,

        clearAll,

    } = props;

    let [ startTimePlus, setStartTimePlus ] = useState( 0 );
    let [ dropZoneIsActive, setDropZoneIsActive ] = useState( false );
    let [ isLighter, setIsLighter ] = useState( false );
    let [ nextStartTime, setNextStartTime ] = useState( null );

    const getTargetState = () => {
        let result = drop_zone_is_aparticipant({
            startTime: startTime + startTimePlus,
            durationTime,
            isEmpty,
        });
        return result;
    }

    const drag_start = ( e ) => {
        access_right( 'layout_grid_edit', () => {
            if( isCompletd ){
                drag_start_for_grid_event( gridEventId );
                var img = document.createElement("img");
                e.dataTransfer.setDragImage( img, 0, 0 );
            };
        } );
    }

    const drag_end = ( e ) => {

    }

    const drag_over = ( e ) => {
        e.preventDefault();
        let targetState = getTargetState();
        setDropZoneIsActive( targetState );
        setIsLighter( targetState );
    }

    const drag_leave = ( e ) => {
        setIsLighter( false );
        dragLeaveHandler();
        setNextStartTime( null );
    }

    const drop = ( e ) => {
        setIsLighter( false );
        let isTargetEvent = getTargetState();
        if( isTargetEvent ){
            if( dragStartFrom === DRAG_START.GRID_EVENT ){
                if( isEmpty ){
                    drop_grid_event_on_empty( startTime + startTimePlus );
                    setStartTimePlus( 0 );
                    clearAll();
                };
            }else if( dragStartFrom === DRAG_START.NEW_EVENT ){
                if( isEmpty ){
                    drop_new_event_on_empty( startTime + startTimePlus, () => {
                        setStartTimePlus( 0 );
                        clearAll();
                    } );
                    
                };
            };
        };
        setDropZoneIsActive( false );
        dragLeaveHandler();
        setNextStartTime( null );
    }


    return (
        <div 
            className = { `layoutDragAndDropEvent ${ isCompletd? 'isCompletd': ''} ${isLighter? 'isLighter': ''}` }
            draggable =     { isEmpty? false: dragIsActive? true: false }
            onDragStart =   { drag_start }
            onDragEnd =     { drag_end }
            onDragOver =    { drag_over }
            onDragLeave =   { drag_leave }
            onDrop =        { drop }
        >
            { children }

            { dropZoneIsActive? (
                <LayoutDragZone 
                    isEmpty =           { isEmpty }
                    durationTime =      { durationTime }
                    startTime =         { startTime }
                    startTimePlus =     { startTimePlus }
                    setStartTimePlus =  { setStartTimePlus }
                    nextStartTime =     { nextStartTime }
                    setNextStartTime =  { setNextStartTime }
                    dropZoneIsActive =  { dropZoneIsActive }
                />

            ): '' }
        </div>
    )

};

export function LayoutDragAndDropEvent( props ){

    const layout = useSelector( layoutSlice );
    const layoutDragEvent = useSelector( layoutDragEventSlise );


    const dispatch = useDispatch();

    return (
        <LayoutDragAndDropEventComponent
            { ...props }
            dragStartFrom = { layoutDragEvent.dragStartFrom }
            // eventListById = { layout.eventListById }


            // dragebleGridEventId = { layout.dragebleGridEventId }

            clearAll = { () => { dispatch( clearAll() ) } }

        />
    );


}
