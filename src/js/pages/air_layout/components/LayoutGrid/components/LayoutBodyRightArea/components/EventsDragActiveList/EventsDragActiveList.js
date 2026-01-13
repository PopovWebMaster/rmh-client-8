
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventsDragActiveList.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { get_linked_file_dutation_by_event_id } from './../../../../../../../../helpers/get_linked_file_dutation_by_event_id.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';

import { ScheduleReleaseDragEventClass } from './../../../../../../../../classes/ScheduleReleaseDragEventClass.js';

import { START_FROM } from './../../../../../../../../config/scheduleResult.js';


const EventsDragActiveListComponent = ( props ) => {

    let {
        filterHeight,

        eventList,
        eventListById,

        eventsDragFilterCategoryId
       
    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {
        set_list();
    }, [ eventsDragFilterCategoryId ] );

    const set_list = () => {
        
        let arr = [];
        for( let i = 0; i < eventList.length; i++ ){
            let { category_id, id } = eventList[ i ];
            if( category_id === eventsDragFilterCategoryId ){
                arr.push( { ...eventListById[ id ] } );
            };
        };
        setList( arr );
    }

    const getHeight = ( filter_height ) => {
        // let height_1 = 9.2;
        let height_1 = 9.8;

        return `calc( 100vh - ${ height_1 + filter_height }em )`;
    }


    const drag_start = ( e, eventId, duration ) => {
        // access_right( 'schedule_edit', () => {
            
        //     // let ScheduleReleaseDragEvent = new ScheduleReleaseDragEventClass();

        //     // ScheduleReleaseDragEvent.SetStartFrom( START_FROM.RELEASE_AS_EVENT );
        //     // ScheduleReleaseDragEvent.DragStart.SetDuration( duration );
        //     // ScheduleReleaseDragEvent.DragStart.SetEventId( eventId );
        //     // ScheduleReleaseDragEvent.DragStart.SetToStore();
        //     // var img = document.createElement("img");
        //     // e.dataTransfer.setDragImage(img, 0, 0);

        // } );
    }

    const drag_end = () => {

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

            return (
                <div
                    className = 'LBRA_EventsBtnWrap'
                    key = { index }
                    // draggable =     { true }
                    // onDragStart =   { ( e ) => { drag_start(  e, id, duration_sec  ) } }
                    // onDragEnd =     { drag_end }
                >
                    <span
                        className = 'LBRA_EventsDuration'
                    >{ convert_sec_to_time( duration_sec ) }</span>
                    <span
                        className = 'LBRA_EventsBtn'
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
            className = 'EARL_ActiveList LBRA_EventsDragActiveList'
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

export function EventsDragActiveList( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <EventsDragActiveListComponent
            { ...props }


            // eventsAsReleaseFilterCategoryId = { scheduleResult.eventsAsReleaseFilterCategoryId }
            eventsDragFilterCategoryId = { layout.eventsDragFilterCategoryId }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }






            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


