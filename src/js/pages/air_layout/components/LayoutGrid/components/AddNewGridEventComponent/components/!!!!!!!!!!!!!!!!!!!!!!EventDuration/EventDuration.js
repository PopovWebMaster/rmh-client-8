
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventDuration.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';
// import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';

const EventDurationComponent = ( props ) => {

    let {
        eventId,
        eventListById,

    } = props;

    let [ isReady, setIsReady ] = useState( false );
    let [ time, setTime ] = useState( '' );

    useEffect( () => {
        if( eventId === null ){
            setIsReady( false);
            setTime( '' );
        }else{
            setIsReady( true );
            let event = eventListById[ eventId ];
            setTime( event.durationTime );
        };

    }, [ eventId ] );


    return (<>
    { isReady? (
        <div className = 'G_ANG_EventDuration'>
            <span className = 'name'>Длительность: </span>
            <span className = 'value'>{ time }</span>
        </div>

    ): '' }
    </>)

};

export function EventDuration( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventDurationComponent
            { ...props }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
