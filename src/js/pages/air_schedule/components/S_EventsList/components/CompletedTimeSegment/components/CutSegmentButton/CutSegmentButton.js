
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutSegmentButton.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as scheduleResultSlise, setScheduleEventsList } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as cutEventEditorSlise, setSutEventData } from './../../../../../../../../redux/cutEventEditorSlise.js';

import { CutEventEditor } from './../../../../../../../../components/CutEventEditor/CutEventEditor.js';
import { marge_dayList_and_catList } from './../../../../../../../../components/CutEventEditor/marge_dayList_and_catList.js';

import { EVENT_TYPE }       from './../../../../../../../../config/layout.js';
import { get_event_style }  from './../../../../../../../../helpers/get_event_style.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';



const CutSegmentButtonComponent = ( props ) => {

    let {
        
        gridEventId,

        gridDayEventsListById,
        eventsPartsList,
        eventListById,

        scheduleEventsList,
        scheduleEventsListByGridEventId,
        setSutEventData,
        setScheduleEventsList,

        setDragIsActive = () => {},

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ showStatus, setShowStatus ] = useState( true );


    useEffect( () => {

        if( scheduleEventsListByGridEventId[ gridEventId ] ){

            let { firstSegmentId } = scheduleEventsListByGridEventId[ gridEventId ];

            let event_id = scheduleEventsListByGridEventId[ gridEventId ].eventId;
            let { type } = eventListById[ event_id ];
            if( type === EVENT_TYPE.FILE ){
                setShowStatus( getShowStatus( firstSegmentId ) );
            }else{
                setShowStatus( false );
            };

        }else{
            setShowStatus( false );
        };

    }, [ scheduleEventsListByGridEventId, gridEventId ] );

    useEffect( () => {
        if( isOpen === false ){
            setDragIsActive( true );
        };
    }, [ isOpen ] );
 
    const getShowStatus = ( first_segment_id ) => {
        let result = false;
        if( first_segment_id === null ){
            result = true;
        }else if( first_segment_id === gridEventId ){
            result = true;
        };
        return result;
    }


    const get_event_parts = () => {

        let result = [];

        for( let i = 0; i < scheduleEventsList.length; i++ ){
            let { id, firstSegmentId } = scheduleEventsList[ i ];
            if( id === gridEventId ){
                result.push( { ...scheduleEventsList[ i ] } );
            }else if( firstSegmentId !== null && firstSegmentId === gridEventId ){
                result.push( { ...scheduleEventsList[ i ] } );
            };
        };

        return result;

    };

    const getMaxDuration = ( arr ) => {
        let result = 0;
        for( let i = 0; i < arr.length; i++ ){
            let { durationTime } = arr[ i ];
            result = result + durationTime;
        };
        return result;

    }

    const click = ( status ) => {
        if( status ){
            setIsOpen( true );
            setDragIsActive( false );

            let eventParts = get_event_parts();

            let { eventId } = eventParts[ 0 ];
            let eventStyle = get_event_style( eventId );

            if( eventStyle.event_is_not_found ){

                alert( 'В расисании есть удалённые события, пожалуйста, пересоздайте лист заново' );
            }else{
                let eventName = eventListById[ eventId ].name;

                setSutEventData({
                    eventParts,
                    maxDurationTime: getMaxDuration( eventParts ),
                    eventId,
                    eventStyle,
                    eventName,
                });

            };

        };
    }

    const saveHandler = () => {
        let dayList = marge_dayList_and_catList( scheduleEventsList, eventsPartsList );

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();

        StoreScheduleResultEvents.CreateList( {
            gridEventsList: dayList,
        } );

        StoreScheduleResultEvents.SetListToStore( true );

        setIsOpen( false );

    }



    return (
        <div className = 'cutSegmentButton'>


            <CutEventEditor
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                saveHandler = { saveHandler }
            />

            <div 
                className = { `CSB_btn ${showStatus? 'isActive': ''}` }
                onClick = { () => { click( showStatus ) } }
            >
                <span className = 'icon-scissors'></span>
            </div> 
            
        </div>
    )

};

export function CutSegmentButton( props ){

        const layout = useSelector( layoutSlice );
        const scheduleResult = useSelector( scheduleResultSlise );
        const cutEventEditor = useSelector( cutEventEditorSlise );

        const dispatch = useDispatch();
    
    return (
        <CutSegmentButtonComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            eventListById = { layout.eventListById  }

            eventsPartsList = { cutEventEditor.eventsPartsList }

            scheduleEventsList = { scheduleResult.scheduleEventsList }
            scheduleEventsListByGridEventId = { scheduleResult.scheduleEventsListByGridEventId }


            setSutEventData = { ( obj ) => { dispatch( setSutEventData( obj ) ) } }
            setScheduleEventsList = { ( arr ) => { dispatch( setScheduleEventsList( arr ) ) } }


        />
    );


}
