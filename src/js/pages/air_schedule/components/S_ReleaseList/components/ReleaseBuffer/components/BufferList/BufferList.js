
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BufferList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { get_free_list } from './vendors/get_free_list.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';
import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';
import { START_FROM } from './../../../../../../../../config/scheduleResult.js';
import { get_linked_file_dutation_by_event_id } from './../../../../../../../../helpers/get_linked_file_dutation_by_event_id.js';

const BufferListComponent = ( props ) => {

    let {
        height,
        releaseList,
        eventListById,
        gridDayEventsListById,
        usedReleasesById,

    //     setDragebleReleaseId,

    } = props;

    let [ freeList, serFreeList ] = useState( [] );

    useEffect( () => {
        serFreeList( get_free_list() );
    }, [ releaseList ] );

    const drag_start = ( e, item ) => {
        access_right( 'schedule_edit', () => {

            let {
                event_id, 
                id,
                force_event_id,
                category_id,
                releaseDuration,
            } = item;

            let work_event_id = event_id;
            if( category_id === null && event_id === null ){
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
                        
                    >
                        <span className = 'GE_id'>{ charYes? grid_event_id: '' }</span>
                        <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                        <span className = 'name'>{ releaseName }</span>
                        {
                            eventName === ''? <>
                                <span className = 'char_name'>График</span>
                                <span className = { charYes? 'char_yes': 'char_not' }>{ charYes? 'Да': 'Нет' }</span>
                            </>: <span className = 'eventName'>{ eventName }</span>
                        }
                        
                        
                        <span className = 'duration_name'>Хрон.</span>
                        <span className = 'duration_time'>{ convert_sec_to_time( releaseDuration ) }</span>

                    </div>
                )
            };

        });
        return div;
    }

    return (
       <div 
            className = 'RB_BufferList'
            style = {{
                height: `${height}px`,
            }}
        >
            <ScrollContainer>
                { create( freeList ) }

            </ScrollContainer>
       </div>
    )

};


export function BufferList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );
    
    // const dispatch = useDispatch();

    return (
        <BufferListComponent
            { ...props }

            releaseList =           { scheduleResult.releaseList }
            usedReleasesById =      { scheduleResult.usedReleasesById }
            eventListById =         { layout.eventListById }
            gridDayEventsListById = { layout.gridDayEventsListById }

            // setDragebleReleaseId = { ( val ) => { dispatch( setDragebleReleaseId( val ) ) } }

        />
    );


}
