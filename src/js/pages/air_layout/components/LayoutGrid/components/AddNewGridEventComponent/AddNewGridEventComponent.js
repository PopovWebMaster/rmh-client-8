
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewGridEventComponent.scss';

import { selectorData as layoutSlice, setGridDayEventsList, setGridDayEventsIsChanges }    from './../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { convert_time_str_to_sec } from './../../../../../../helpers/convert_time_str_to_sec.js';

import { GridEventType } from './components/GridEventType/GridEventType.js';
import { SelectedEvent } from './components/SelectedEvent/SelectedEvent.js';
import { TimeSelected } from './components/TimeSelected/TimeSelected.js';
import { AppearanceOfEvent } from './components/AppearanceOfEvent/AppearanceOfEvent.js';
import { CreateButton } from './components/CreateButton/CreateButton.js';

const AddNewGridEventComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        timeSpaceFrom,
        timeSpaceTo,

        eventListById,
        currentPage,
        gridCurrentDay,
        setSpinnerIsActive,

        setGridDayEventsList,
        setGridDayEventsIsChanges,
        

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

        };
    }, [ isOpen ]);

    useEffect( () => {
        if( isAKeyOneEvent ){
            setTimeTarget( 'start' );
        };
    }, [ isAKeyOneEvent ] );

    useEffect( () => {
        if( eventId !== null ){
            setDurationTime( convert_time_str_to_sec( eventListById[ eventId ].durationTime ) );
        }else{
            setDurationTime( 0 );
        }
    }, [ eventId ] );


    const create = () => {

        if( eventId !== null ){
            setSpinnerIsActive( true );
            
            send_request_to_server({
                route: `add-new-grid-event`,
                data: { 
                    dayNum: gridCurrentDay,
                    isAKeyPoint: isAKeyOneEvent,
                    startTime,
                    eventId,
                    durationTime,
                },

                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setGridDayEventsList( response.list );
                        setGridDayEventsIsChanges( false );
                        setIsOpen( false );
                    };

                },
            });
        };
    };


    
    return (

        <div className = 'G_AddNewGridEventComponent' >
            
            <GridEventType 
                isAKeyOneEvent =    { isAKeyOneEvent }
                setIsAKeyOneEvent = { setIsAKeyOneEvent }
            />

            <SelectedEvent 
                eventId =       { eventId }
                setEventId =    { setEventId }
                durationLimit = { timeSpaceTo - timeSpaceFrom }
            />

            <AppearanceOfEvent 
                eventId =       { eventId }
                startTime =     { startTime }
                isAKeyOneEvent = { isAKeyOneEvent }
            />

            { eventId === null? '': (
                <TimeSelected
                    // eventId =       { eventId }
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

export function AddNewGridEventComponent( props ){

    const layout = useSelector( layoutSlice );
    
    const dispatch = useDispatch();

    return (
        <AddNewGridEventComponentComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            eventListById = { layout.eventListById }

            // // categoryList = { layout.categoryList }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setGridDayEventsIsChanges = { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }


            


        />
    );


}
