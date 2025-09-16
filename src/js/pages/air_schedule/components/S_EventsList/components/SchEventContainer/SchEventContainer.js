
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SchEventContainer.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { EVENT_TYPE } from './../../../../../../config/layout.js';

import { StoreScheduleResultEventsClass } from './../../../../../../classes/StoreScheduleResultEventsClass.js';

import { get_target_state_for_element } from './vendors/get_target_state_for_element.js';

import { CompletedTimeSector } from './components/CompletedTimeSector/CompletedTimeSector.js';
import { EmptyTimeSector } from './components/EmptyTimeSector/EmptyTimeSector.js';
import { SelectedEventWindow } from './components/SelectedEventWindow/SelectedEventWindow.js';



const SchEventContainerComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        eventId = null,

        isCompletd = false,
        isKeyPoint = false,
        gridEventId = null,
        isEmpty = false,

        eventListById,
        gridCurrentDay,


        releaseListById,

        dragebleReleaseId,
        dragebleReleaseEventId,
        scheduleEventsList,
        scheduleEventsListByGridEventId,

        children,
    } = props;

    let [ isError, setIsError ] = useState( false );
    let [ eventType, setEventType ] = useState( '' );
    let [ isLighter, setIsLighter ] = useState( false );


    let [ selectedEventId, setSelectedEventId ] = useState( null );
    /*
        selectedEventId 
        Здесь null - это отслеживаемое состояние. Если не null значит компонент создаст новое событие в сетке
        по этому нужно обязателдьно после создания события записывать в setSelectedEventId null
    */
    let [ durationLimit, setDurationLimit ] = useState( 0 );

    let [ selectedEventWindow_isOpen, setSelectedEventWindow_isOpen ] = useState( 0 );

    let [ releaseIdInWork, setReleaseIdInWork ] = useState( null );




    


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


    useEffect( () => {
        if( durationTime >= 0 ){
            setIsError( false );
            setDurationLimit( durationTime );
        }else{
            setIsError( true );
            setDurationLimit( 0 );
        };
    }, [ durationTime ] );

    useEffect( () => {
        if( selectedEventId !== null ){
            if( eventListById[ selectedEventId ] ){
                let event = eventListById[ selectedEventId ];
                    
                let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
                let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
                    gridCurrentDay,
                    isAKeyPoint: false,
                    startTime,
                    eventId: selectedEventId,
                    durationTime: event.durationTime,
                });
                StoreScheduleResultEvents.AddRelease( ScheduleEvent.id, releaseIdInWork );
                StoreScheduleResultEvents.SetListToStore( true);
                setDurationLimit( null );
            };

        };

    }, [ selectedEventId ] );

    const getTargetState = () => {

        let result = get_target_state_for_element({
            durationTime,
            eventId,
            eventType,
            gridEventId,
            isEmpty,
            isCompletd,
        });
        return result;

    }

    const drag_over = ( e ) => {
        e.preventDefault();
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

   const drop = () => {

        setIsLighter( false );

        let isTargetEvent = getTargetState();
        if( isTargetEvent ){ 

            if( isEmpty ){
                setReleaseIdInWork( dragebleReleaseId );

                if( dragebleReleaseEventId === null ){
                    setSelectedEventWindow_isOpen( true );
                    /*
                        Новое событие в сетке создается из useEffect
                    */
                }else{
                    let event = eventListById[ dragebleReleaseEventId ];

                    let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                    StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
                    let ScheduleEvent = StoreScheduleResultEvents.AddEvent({
                        gridCurrentDay,
                        isAKeyPoint: false,
                        startTime,
                        eventId: dragebleReleaseEventId,
                        durationTime: event.durationTime,
                    });
                    StoreScheduleResultEvents.AddRelease( ScheduleEvent.id, dragebleReleaseId );
                    StoreScheduleResultEvents.SetListToStore( true );
                };

                

            }else{
                let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
                StoreScheduleResultEvents.AddRelease( gridEventId, dragebleReleaseId );
                StoreScheduleResultEvents.SetListToStore( true );
            };
        };

   }

    return (

       <div 
            className = { `schEventContainer ${ isLighter? 'isLighter': '' }` }
            onDragOver =    { drag_over }
            onDragLeave =   { drag_leave }
            onDrop =        { drop }
        >

            

            <SelectedEventWindow
                selectedEventWindow_isOpen = { selectedEventWindow_isOpen }
                setSelectedEventWindow_isOpen = { setSelectedEventWindow_isOpen }
                selectedEventId = { selectedEventId }
                setSelectedEventId = { setSelectedEventId }
                durationLimit = { durationLimit }
            />
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
                ): (

                    <EmptyTimeSector
                        startTime =     { startTime }
                        isError =       { isError }
                        durationTime =  { durationTime }
                    />
                ) }
                
                <div className = 'schEventItemBody'>
                    { children }
                </div>
            </div>
        </div>
    )

};


export function SchEventContainer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    const dispatch = useDispatch();

    return (
        <SchEventContainerComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }

            scheduleEventsListByGridEventId = { scheduleResult.scheduleEventsListByGridEventId }


            dragebleReleaseId = { scheduleResult.dragebleReleaseId }
            dragebleReleaseEventId = { scheduleResult.dragebleReleaseEventId }

            releaseListById = { scheduleResult.releaseListById }


            eventListById = { layout.eventListById }
            gridCurrentDay = { layout.gridCurrentDay }


            // setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
