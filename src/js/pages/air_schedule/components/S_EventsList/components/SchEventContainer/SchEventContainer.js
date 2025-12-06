
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SchEventContainer.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { EVENT_TYPE } from './../../../../../../config/layout.js';

import { CompletedTimeSector }      from './components/CompletedTimeSector/CompletedTimeSector.js';
import { EmptyTimeSector }          from './components/EmptyTimeSector/EmptyTimeSector.js';
import { ScheduleDragAndDropEvent } from './components/ScheduleDragAndDropEvent/ScheduleDragAndDropEvent.js';

const SchEventContainerComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        eventId = null,
        isCompletd = false,
        isKeyPoint = false,
        gridEventId = null,
        isEmpty = false,

        nextStartTime = null,
        
        children,

        eventListById,

    } = props;

    let [ isError, setIsError ] = useState( false );
    let [ eventType, setEventType ] = useState( '' );
    let [ isLighter, setIsLighter ] = useState( false );
    let [ isDragOver, setIsDragOver ] = useState( false );

    useEffect( () => {
        if( eventListById[ eventId ] ){
            let { type } = eventListById[ eventId ];
            setEventType( type );
        }else{
            if( eventId !== null ){
                alert( 'Нужно пересоздать расписание, какое-то из событий было удалено' );
                setEventType( EVENT_TYPE.FILE );
            };
        };

    }, [ gridEventId ] );

    const dragOverHandler = () => {
        setIsDragOver( true )
    }

    const dragLeaveHandler = () => {
        setIsDragOver( false )
    }
    

    return (

        <ScheduleDragAndDropEvent
            setIsLighter =  { setIsLighter }
            startTime =     { startTime }
            durationTime =  { durationTime }
            eventId =       { eventId }
            eventType =     { eventType }
            gridEventId =   { gridEventId }
            isEmpty =       { isEmpty }
            isCompletd =    { isCompletd }
            dragOverHandler = { dragOverHandler }
            dragLeaveHandler = { dragLeaveHandler }
            nextStartTime = { nextStartTime }
        >
            <div className = { `schEventContainer ${ isLighter? 'isLighter': '' }` }>

                <div className = { `schEventContainerWrap ${ isCompletd? 'isCompletd': '' } ${ isError? 'errorTime': '' }` }>

                    <div className = 'schId'>
                        <span>{ gridEventId }</span>
                    </div>
                    { isCompletd? (
                        <CompletedTimeSector
                            startTime =     { startTime }
                            isKeyPoint =    { isKeyPoint }
                            gridEventId =   { gridEventId }
                            durationTime =  { durationTime }
                        />
                    ): (<>
                        { isDragOver? '': (
                            <EmptyTimeSector
                                startTime =     { startTime }
                                isError =       { isError }
                                durationTime =  { durationTime + 1 }
                            />
                        ) }
                    </>) }

                    
                    <div className = 'schEventItemBody'>
                        { children }
                    </div>
                  
                </div>

            </div>


        </ScheduleDragAndDropEvent>


    )

};


export function SchEventContainer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    const dispatch = useDispatch();

    return (
        <SchEventContainerComponent
            { ...props }

            // scheduleEventsList =                { scheduleResult.scheduleEventsList }
            // scheduleEventsListByGridEventId =   { scheduleResult.scheduleEventsListByGridEventId }
            // dragebleReleaseId =                 { scheduleResult.dragebleReleaseId }
            // dragebleReleaseEventId =            { scheduleResult.dragebleReleaseEventId }
            // releaseListById =                   { scheduleResult.releaseListById }
            eventListById =                     { layout.eventListById }
            // gridCurrentDay =                    { layout.gridCurrentDay }

            // setDragebleReleaseId = { ( val ) => { dispatch( setDragebleReleaseId( val ) ) } }

        />
    );


}
