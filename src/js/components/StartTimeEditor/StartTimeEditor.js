
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './StartTimeEditor.scss';

import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../AlertWindowContainer/AlertWindowContainer.js';
import { ST_AlertComponent } from './components/ST_AlertComponent/ST_AlertComponent.js';


const StartTimeEditorComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        isKeyPoint,
        durationTime,
        startTime,
        timeSpaceTo,
        timeSpaceFrom,
        eventId,
        setStartTime,
        clickSaveHandler,
        isAKeyOneEvent,
        setIsAKeyOneEvent,
        
    } = props;

    return (
        <div className = 'startTimeEditor'>
            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '90vw'
                height =    '60vh'
                title = 'Редактр времени выхода'
                showCurrentDayName = { true }
            >
                <ST_AlertComponent 
                    // isOpen = { isOpen }
                    durationTime =      { durationTime }
                    startTime =         { startTime }
                    timeSpaceTo =       { timeSpaceTo }
                    timeSpaceFrom =     { timeSpaceFrom }
                    eventId =           { eventId }
                    setStartTime =      { setStartTime }
                    clickSaveHandler =  { clickSaveHandler }
                    // isKeyPoint = { isKeyPoint }

                    setIsAKeyOneEvent = { setIsAKeyOneEvent }

                    isAKeyOneEvent = { isAKeyOneEvent }


                   
                />
            </AlertWindowContainer>
        </div>
    )

};

export function StartTimeEditor( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <StartTimeEditorComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
