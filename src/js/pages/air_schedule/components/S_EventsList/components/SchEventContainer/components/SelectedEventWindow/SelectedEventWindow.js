
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SelectedEventWindow.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { SelectedEvent } from './../../../EmptyTimeSegment/components/SelectedEvent/SelectedEvent.js';



const SelectedEventWindowComponent = ( props ) => {

    let {
        selectedEventWindow_isOpen,
        setSelectedEventWindow_isOpen,
        alwaysOpen = false,

        selectedEventId,
        setSelectedEventId,
        durationLimit,
        setDurationLimit,
        eventClickHandler = () => {}

        


    } = props;




    return (
        <AlertWindowContainer
            isOpen =    { selectedEventWindow_isOpen }
            setIsOpen = { setSelectedEventWindow_isOpen }
            width =     '60vw'
            height =    '80vh'
            title = 'Пожалуйста, выберете событие'
        >

            <SelectedEvent
                eventId =       { selectedEventId }
                setEventId =    { setSelectedEventId }
                durationLimit = { durationLimit }
                alwaysOpen =    { alwaysOpen }
                eventClickHandler = { eventClickHandler }
            />


        </AlertWindowContainer>
    )

};

export function SelectedEventWindow( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <SelectedEventWindowComponent
            { ...props }

            // setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
