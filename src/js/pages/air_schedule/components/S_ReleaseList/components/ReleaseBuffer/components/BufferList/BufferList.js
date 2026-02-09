
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BufferList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as scheduleResultDragEventSlise } from './../../../../../../../../redux/scheduleResultDragEventSlise.js';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { get_free_list } from './vendors/get_free_list.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';
import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';
import { START_FROM } from './../../../../../../../../config/scheduleResult.js';
import { get_linked_file_dutation_by_event_id } from './../../../../../../../../helpers/get_linked_file_dutation_by_event_id.js';

import { get_drag_target_state } from './vendors/get_drag_target_state.js';
import { drop_schedule_event_on_bufer } from './vendors/drop_schedule_event_on_bufer.js';
import { remove_alt_event_on_store } from './vendors/remove_alt_event_on_store.js';
import { drag_start_fot_alt_event } from './vendors/drag_start_fot_alt_event.js';


const BufferListComponent = ( props ) => {

    let {
        height,
        releaseList,
        eventListById,
        gridDayEventsListById,
        usedReleasesById,

        dragStartFrom,
        altGridEventsList,

    //     setDragebleReleaseId,

    } = props;

    let [ freeList, serFreeList ] = useState( [] );
    let [ isLighter, setIsLighter ] = useState( false );

    useEffect( () => {
        serFreeList( get_free_list() );
    }, [ releaseList ] );

    const drag_start = ( e, item ) => {

        // console.dir( 'item<<<<<<' );
        // console.dir( item );

        access_right( 'schedule_edit', () => {

            let {
                event_id, 
                id,
                force_event_id,
                category_id,
                releaseDuration,
            } = item;

            let work_event_id = event_id;
            if( event_id === null && force_event_id !== null ){
                work_event_id = force_event_id;
            };

            let linked_file_dutation = get_linked_file_dutation_by_event_id( work_event_id );
   
            let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();

            ScheduleReleaseDragEvent.SetStartFrom( START_FROM.RELEASE_APPLICATION );
            ScheduleReleaseDragEvent.DragStart.SetEventId( work_event_id );
            ScheduleReleaseDragEvent.DragStart.SetReleaseId( id );
            ScheduleReleaseDragEvent.DragStart.SetDuration( releaseDuration + linked_file_dutation );
            ScheduleReleaseDragEvent.DragStart.SetToStore();

            var img = document.createElement("img");
            e.dataTransfer.setDragImage(img, 0, 0);

        } );

    }

    const drag_end = () => {
        // let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
        // ScheduleReleaseDragEvent.ClearData();
    }

    const create = ( arr ) => {

        let div = arr.map(( item, index ) => {
            let {
                startTime,
                releaseName,
                releaseDuration,
                event_id,
                // category_id,
                grid_event_id,
                id,
                // force_event_id,
            } = item;

            let eventName = eventListById[ event_id ]? eventListById[ event_id ].name: '';
            let charYes = gridDayEventsListById[ grid_event_id ]? true: false;

            if( usedReleasesById[ id ] ){
                return '';
            }else{
                return (
                    <div
                        key = { index }
                        className = 'RB_BufferList_item'
                        draggable = { true }
                        onDragStart = { ( e ) => { drag_start( e, item ) } }
                        onDragEnd = { drag_end }

                        title = { releaseName }
                        
                    >

                        <div className = 'RB_BufferList_item_left'>
                            <span className = 'GE_id'>{ charYes? grid_event_id: ' ' }</span>
                            <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                            <span className = 'name'>
                                <span>{ releaseName }</span>
                            </span>
                        </div>

                        <div className = 'RB_BufferList_item_right'>
                            { charYes? '': <span className = 'char_not'>{ 'Слепой' }</span> }
                            <span className = 'duration_time'>{ convert_sec_to_time( releaseDuration ) }</span>

                        </div>
                        
                    </div>
                )
            };

        });
        return div;
    }


    const alt_drag_start = ( e, item ) => {
        let { id } = item;
        drag_start_fot_alt_event( id );
        var img = document.createElement("img");
        e.dataTransfer.setDragImage(img, 0, 0);
    }

    const alt_drag_end = () => {}

    const createAltList = ( arr ) => {
        let div = arr.map(( item, index ) => {
            let {
                style,
                name,
                duration,
                id,
                gridEventsGroup,
            } = item;

            return (
                <div
                    key =       { index }
                    className = 'RB_BufferList_alt_item'
                    draggable = { true }
                    onDragStart = { ( e ) => { alt_drag_start( e, item ) } }
                    onDragEnd = { alt_drag_end }
                    
                >
                    <div className = 'RB_BufferList_alt_item_left'>
                        {/* <span className = 'durat'>{ convert_sec_to_time( duration ) }</span> */}
                        <span className = 'alt_id'>{ id }</span>
                        <span
                            className = 'name'
                            style = { style }
                        >
                            <span>{ name }</span>
                        </span>
                    </div>

                    <div className = 'RB_BufferList_alt_item_right'>
                        <span className = 'duration_time'>{ convert_sec_to_time( duration ) }</span>
                        <span 
                            className = 'remove icon-cancel-2'
                            onClick = { () => { remove_alt_event_on_store( id ) } }
                        ></span>
                    </div>
                    
                </div>
            )

        });
        return div;
    };




    const drag_over = ( e ) => {
        e.preventDefault();
        let targetState = get_drag_target_state();
        setIsLighter( targetState );
    }

    const drag_leave = ( e ) => {
        setIsLighter( false );
    }

    const drop = ( e ) => {
        setIsLighter( false );
        let targetState = get_drag_target_state();

        if( targetState ){
            if( dragStartFrom === START_FROM.SCHEDULE_EVENT ){

                drop_schedule_event_on_bufer();

                let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
                ScheduleReleaseDragEvent.ClearData();

            };
        };

    }























    return (
       <div 
            className = { `RB_BufferList ${isLighter? 'isLighter': ''}` }
            style = {{
                height: `${height}px`,
            }}
            onDragOver =    { drag_over }
            onDragLeave =   { drag_leave }
            onDrop =        { drop }
        >
            <ScrollContainer>


                { createAltList( altGridEventsList ) }
                { create( freeList ) }

            </ScrollContainer>
       </div>
    )

};


export function BufferList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const scheduleResultDragEvent = useSelector( scheduleResultDragEventSlise );


    const layout = useSelector( layoutSlice );
    
    // const dispatch = useDispatch();

    return (
        <BufferListComponent
            { ...props }

            releaseList =           { scheduleResult.releaseList }
            usedReleasesById =      { scheduleResult.usedReleasesById }
            eventListById =         { layout.eventListById }
            gridDayEventsListById = { layout.gridDayEventsListById }

            dragStartFrom = { scheduleResultDragEvent.dragStartFrom }
            altGridEventsList = { scheduleResultDragEvent.altGridEventsList }

            // setDragebleReleaseId = { ( val ) => { dispatch( setDragebleReleaseId( val ) ) } }

        />
    );


}
