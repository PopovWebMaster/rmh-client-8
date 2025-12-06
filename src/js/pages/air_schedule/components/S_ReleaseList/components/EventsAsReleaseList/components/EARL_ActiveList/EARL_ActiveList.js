// EARL_ActiveList



import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EARL_ActiveList.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux//layoutSlice.js';


import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

// import { get_filtered_list } from './../../vendors/get_filtered_list.js';

// import { FRL_OneActiveListItem } from './../FRL_OneActiveListItem/FRL_OneActiveListItem.js';
// import { FRL_DragAndDropEventStart } from './../FRL_DragAndDropEventStart/FRL_DragAndDropEventStart.js';

import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { get_linked_file_dutation_by_event_id } from './../../../../../../../../helpers/get_linked_file_dutation_by_event_id.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';

import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';

import { START_FROM } from './../../../../../../../../config/scheduleResult.js';
import { EVENT_TYPE } from './../../../../../../../../config/layout.js';




const EARL_ActiveListComponent = ( props ) => {

    let {
        filterHeight,

        // freeReleasesFilterCategoryId,
        // freeReleasesFilterEventId,
        // freeReleasesFiltered,
        // usedFreeReleaseById,

        eventsAsReleaseFilterCategoryId,
        eventList,
        eventListById,
       
    } = props;

    let [ list, setList ] = useState( [] );
    // let [ eventId, setEventId ] = useState( [] );
    // let [ duration, setDuration ] = useState( 0 );



    useEffect( () => {

        // console.dir( eventsAsReleaseFilterCategoryId );

        set_list();
    }, [ eventsAsReleaseFilterCategoryId ] );

    const set_list = () => {
        
        let arr = [];
        for( let i = 0; i < eventList.length; i++ ){
            let { category_id, id } = eventList[ i ];
            if( category_id === eventsAsReleaseFilterCategoryId ){
                arr.push( { ...eventListById[ id ] } );
            };
        };
        setList( arr );
    }

    const getHeight = ( filter_height ) => {
        let height_1 = 8.4;
        return `calc( 100vh - ${ height_1 + filter_height }em )`;
    }


    const drag_start = ( e, eventId, duration ) => {
        access_right( 'schedule_edit', () => {
            
            let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();

            ScheduleReleaseDragEvent.SetStartFrom( START_FROM.RELEASE_AS_EVENT );
            ScheduleReleaseDragEvent.DragStart.SetDuration( duration );
            ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
            ScheduleReleaseDragEvent.DragStart.SetToStore();

            // ScheduleReleaseDragEvent.DragStart.SetFileName( fileName );
            // ScheduleReleaseDragEvent.DragStart.SetDuration( duration + linked_file_dutation );
            // ScheduleReleaseDragEvent.DragStart.SetLinkedFilesDuration( linked_file_dutation );

            // ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
            // ScheduleReleaseDragEvent.DragStart.SetToStore();

            var img = document.createElement("img");
            e.dataTransfer.setDragImage(img, 0, 0);

        } );
    }

    const drag_end = () => {
        // let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();
        // ScheduleReleaseDragEvent.ClearData();

    }






    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                category_id,
                durationTime,
                id,
                linked_file,
                name,
                notes,
                style,
                type
            } = item;

            let duration_sec = 0;

            let linked_file_dutation = get_linked_file_dutation_by_event_id( id );
            if( linked_file_dutation === 0 ){
                duration_sec = convert_time_str_to_sec( durationTime );
            }else{
                duration_sec = linked_file_dutation;
            };

            // setEventId( id );
            // setDuration( duration_sec )

            return (
                <div
                    className = 'EARL_EventsBtnWrap'
                    key = { index }
                    draggable =     { true }
                    onDragStart =   { ( e ) => { drag_start(  e, id, duration_sec  ) } }
                    onDragEnd =     { drag_end }
                >
                    <span
                        className = 'EARL_EventsDuration'
                    >{ convert_sec_to_time( duration_sec ) }</span>
                    <span
                        className = 'EARL_EventsBtn'
                        style =         { style }
                    >
                        { name }
                    </span>
                </div>
                
            );

        } );

        return div;

    }


    return (
        <div 
            className = 'EARL_ActiveList'
            style = { { height: getHeight( filterHeight ) } }
        >
            <ScrollContainer
                height = { getHeight( filterHeight ) }
            >

                { create( list ) }

            </ScrollContainer>
        </div>
    )

};

export function EARL_ActiveList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );



    // const dispatch = useDispatch();

    return (
        <EARL_ActiveListComponent
            { ...props }


            eventsAsReleaseFilterCategoryId = { scheduleResult.eventsAsReleaseFilterCategoryId }

            eventList = { layout.eventList }
            eventListById = { layout.eventListById }






            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


