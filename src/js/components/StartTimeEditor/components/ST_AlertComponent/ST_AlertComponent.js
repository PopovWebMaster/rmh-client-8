
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ST_AlertComponent.scss';

import { selectorData as layoutSlice } from './../../../../redux/layoutSlice.js';
import { AppearanceOfEvent } from './../AppearanceOfEvent/AppearanceOfEvent.js';
import { TimeSelected } from './../TimeSelected/TimeSelected.js';

const ST_AlertComponentComponent = ( props ) => {

    let {
        durationTime,
        startTime,
        timeSpaceTo,
        timeSpaceFrom,
        eventId,
        setStartTime,

        clickSaveHandler,
        
    } = props;

    let [ timeTarget, setTimeTarget ] = useState( 'start' );

    
    return (
        <div className = 'ST_AlertComponent'>

            <AppearanceOfEvent
                eventId = { eventId }
                startTime = { startTime }
            />

            <TimeSelected
                timeSpaceTo =   { timeSpaceTo }
                timeSpaceFrom = { timeSpaceFrom }
                startTime =     { startTime }
                setStartTime =  { setStartTime }
                timeTarget =    { timeTarget }
                setTimeTarget = { setTimeTarget }
                durationTime =  { durationTime }
            />

            <div className = 'STEC_save_changes'>
                <div 
                    className = 'btn'
                    onClick = { clickSaveHandler }
                >
                    <span className = 'icon icon-floppy'></span>
                    <span className = 'text'>Сохранить</span>
                </div>
            </div>
            
        </div>
    )

};

export function ST_AlertComponent( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <ST_AlertComponentComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
