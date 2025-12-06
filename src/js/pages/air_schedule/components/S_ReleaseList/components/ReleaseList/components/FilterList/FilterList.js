
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilterList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import { EVENT_TYPE } from './../../../../../../../../config/layout.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';
import { get_linked_file_dutation_by_event_id } from './../../../../../../../../helpers/get_linked_file_dutation_by_event_id.js';
import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';
import { START_FROM } from './../../../../../../../../config/scheduleResult.js';

const FilterListComponent = ( props ) => {

    let {
        filteredList,
        gridDayEventsListById,
        height,

    } = props;

    const drag_start = ( e, item ) => {
        access_right( 'schedule_edit', () => {

             let {
                event_id, 
                id,
                force_event_id,
                category_id,
                releaseDuration,
                file_list,
                releaseName,


            } = item;

            let work_event_id = event_id;
            if( category_id === null && event_id === null ){
                work_event_id = force_event_id;
            };

            let fileName = '';
            if( file_list.length > 0 ){
                fileName = file_list[ file_list.length - 1 ];
            }else{
                fileName = releaseName;
            };

            let linked_file_dutation = get_linked_file_dutation_by_event_id( work_event_id );

            let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
            
            ScheduleReleaseDragEvent.SetStartFrom( START_FROM.RELEASE_LIST );
            ScheduleReleaseDragEvent.DragStart.SetFileName( fileName );
            ScheduleReleaseDragEvent.DragStart.SetDuration( releaseDuration + linked_file_dutation );
            ScheduleReleaseDragEvent.DragStart.SetLinkedFilesDuration( linked_file_dutation );

            ScheduleReleaseDragEvent.DragStart.SetEventId( work_event_id );
            ScheduleReleaseDragEvent.DragStart.SetToStore();


            var img = document.createElement("img");
            e.dataTransfer.setDragImage(img, 0, 0);
            
            // let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();

            // let linked_file_dutation = get_linked_file_dutation_by_event_id( eventId );

            // ScheduleReleaseDragEvent.SetStartFrom( START_FROM.RELEASE_FREE );
            // ScheduleReleaseDragEvent.DragStart.SetFileName( fileName );
            // ScheduleReleaseDragEvent.DragStart.SetDuration( duration + linked_file_dutation );
            // ScheduleReleaseDragEvent.DragStart.SetLinkedFilesDuration( linked_file_dutation );

            // ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
            // ScheduleReleaseDragEvent.DragStart.SetToStore();

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
                grid_event_id,

                force_event_id,
                event_id,
                id



            } = item;

            // console.dir( 'item' )
            // console.dir( item )


            let charYes = gridDayEventsListById[ grid_event_id ]? true: false;


            return (
                <div
                    key = { index }
                    className = 'RL_FilterList_item'
                    draggable =     { true }
                    onDragStart =   { ( e ) => { drag_start( e, item ) } }
                    onDragEnd =     { drag_end }
                    
                >
                    <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'name'>{ releaseName }</span>
                    <span className = 'duration_name'>Хрон.</span>
                    <span className = 'duration_time'>{ convert_sec_to_time( releaseDuration ) }</span>
                    <span className = 'char_name'>График</span>
                    <span className = { charYes? 'char_yes': 'char_not' }>{ charYes? 'Да': 'Нет' }</span>



                </div>
            )
        });

        return div;

    }

    return (
        <div 
            className = 'RL_FilterList'
            style = { {
                height: `${height}px`
            } }
        >
            <ScrollContainer>
                { create( filteredList ) }
            </ScrollContainer>
            
        </div>
    )

};


export function FilterList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    layoutSlice
    // const dispatch = useDispatch();

    return (
        <FilterListComponent
            { ...props }

            releaseList = { scheduleResult.releaseList }
            gridDayEventsListById = { layout.gridDayEventsListById }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
