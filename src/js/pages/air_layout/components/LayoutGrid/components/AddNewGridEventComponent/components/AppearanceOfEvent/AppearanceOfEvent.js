
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppearanceOfEvent.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';
import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';
import { AppearanceOfASingleGridEvent } from './../../../AppearanceOfASingleGridEvent/AppearanceOfASingleGridEvent.js';

const AppearanceOfEventComponent = ( props ) => {

    let {
        eventId,
        startTime,
        isAKeyOneEvent,

        eventListById,

    } = props;

    let [ isReady, setIsReady] = useState( false );
    let [ duration, setDuration ] = useState( 0 );
    let [ eventNotes, setEventNotes ] = useState('');

    useEffect( () => {
        if( eventId === null ){
            setIsReady( false );
            setDuration( 0 );
            setEventNotes( '' );
        }else{
            setIsReady( true );

            let { durationTime, notes } = eventListById[ eventId ];
            
            setDuration( convert_time_str_to_sec( durationTime ) );
            setEventNotes( notes );

        };


    }, [ eventId ] );

    return (<>{
        isReady? (
            <AppearanceOfASingleGridEvent 
                cutPart =           { null }
                durationTime =      { duration }
                firstSegmentId =    { null }
                id =                { null }
                isKeyPoint =        { isAKeyOneEvent }
                notes =             { eventNotes }
                startTime =         { startTime }
                eventId =           { eventId }
            />
        ): ''}</>
    )

};

export function AppearanceOfEvent( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AppearanceOfEventComponent
            { ...props }
            // eventList = { layout.eventList }
            eventListById = { layout.eventListById }
            // categoryListById = { layout.categoryListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
