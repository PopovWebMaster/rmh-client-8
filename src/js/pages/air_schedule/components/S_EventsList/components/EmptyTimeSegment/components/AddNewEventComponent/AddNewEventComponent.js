
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewEventComponent.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';


import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';


import { GridEventType } from './../GridEventType/GridEventType.js';
// import { SelectedEvent } from './../SelectedEvent/SelectedEvent.js';
import { AppearanceOfEvent } from './../AppearanceOfEvent/AppearanceOfEvent.js';
import { TimeSelected } from './../TimeSelected/TimeSelected.js';

import { CreateButton } from './../CreateButton/CreateButton.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';
import { EventByCategorySelect } from './../../../../../../../../components/EventByCategorySelect/EventByCategorySelect.js';

import { MIN_EVENT_DURATION_SEC, EVENT_TYPE } from './../../../../../../../../config/layout.js';

const AddNewEventComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        timeSpaceFrom,
        timeSpaceTo,

        eventListById,
        gridCurrentDay,
        scheduleEventsList,

    } = props;


    let [ isAKeyOneEvent, setIsAKeyOneEvent ] = useState( false );
    let [ eventId, setEventId ] = useState( null );
    let [ startTime, setStartTime ] = useState( timeSpaceFrom );
    let [ timeTarget, setTimeTarget ] = useState( 'start' ); // 'finish' 

    let [ durationTime, setDurationTime ] = useState( 0 ); 

    useEffect( () => {
        if( isOpen === false ){
            setIsAKeyOneEvent( false );
            setEventId( null );
            setStartTime( timeSpaceFrom );
            setTimeTarget( 'start' );
        }else{
            setIsAKeyOneEvent( false );
            setEventId( null );
            setStartTime( timeSpaceFrom );
            setTimeTarget( 'start' );


        };
    }, [ isOpen ]);

    useEffect( () => {
        if( isAKeyOneEvent ){
            setTimeTarget( 'start' );
        };
    }, [ isAKeyOneEvent ] );

    useEffect( () => {
        if( eventId !== null ){

            if( eventListById[ eventId ].type === EVENT_TYPE.FILE ){
                setDurationTime( convert_time_str_to_sec( eventListById[ eventId ].durationTime ) );
            }else if( eventListById[ eventId ].type === EVENT_TYPE.BLOCK ){
                setDurationTime( MIN_EVENT_DURATION_SEC );
            };

            
        }else{
            setDurationTime( 0 );
        }
    }, [ eventId ] );


    const create = () => {
        if( eventId !== null ){

            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            StoreScheduleResultEvents.CreateList();
            StoreScheduleResultEvents.AddEvent({
                gridCurrentDay,
                isAKeyPoint: isAKeyOneEvent,
                startTime,
                eventId,
                durationTime,
            });
            StoreScheduleResultEvents.SetListToStore( true );
            setIsOpen( false );

        };
    };


    
    return (

        <div className = 'G_AddNewEventComponent' >
            
            <GridEventType 
                isAKeyOneEvent =    { isAKeyOneEvent }
                setIsAKeyOneEvent = { setIsAKeyOneEvent }
            />

            {/* <SelectedEvent 
                eventId =       { eventId }
                setEventId =    { setEventId }
                durationLimit = { timeSpaceTo - timeSpaceFrom }
            /> */}

            <EventByCategorySelect 
                isOpen = { isOpen }
                value = { eventId }
                changeHandler = { setEventId }

                maxHeight = { 35 }
                maxDuration = { timeSpaceTo - timeSpaceFrom }
            />

            <AppearanceOfEvent 
                eventId =       { eventId }
                startTime =     { startTime }
                isAKeyOneEvent = { isAKeyOneEvent }
            />

            { eventId === null? '': (
                <TimeSelected
                    timeSpaceTo =   { timeSpaceTo }
                    timeSpaceFrom = { timeSpaceFrom }
                    startTime =     { startTime }
                    setStartTime =  { setStartTime }
                    timeTarget =    { timeTarget }
                    setTimeTarget = { setTimeTarget }
                    durationTime =  { durationTime }
                />
            ) }


            <CreateButton 
                eventId =       { eventId }
                createHandler = { create }
            />


            
        </div>

    )

};

export function AddNewEventComponent( props ){

    const layout = useSelector( layoutSlice );
    const scheduleResult = useSelector( scheduleResultSlise );



    
    
    const dispatch = useDispatch();

    return (
        <AddNewEventComponentComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            eventListById = { layout.eventListById }

            scheduleEventsList = { scheduleResult.scheduleEventsList }


            // // // categoryList = { layout.categoryList }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setGridDayEventsIsChanges = { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }


            


        />
    );


}
