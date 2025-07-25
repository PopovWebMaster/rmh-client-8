
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CompletedTimeSegment.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { SchEventContainer } from './../SchEventContainer/SchEventContainer.js';

import { EventNameItem } from './components/EventNameItem/EventNameItem.js';
import { EventNotesItem } from './components/EventNotesItem/EventNotesItem.js';
import { RemoveItem } from './components/RemoveItem/RemoveItem.js';
import { CutItem } from './components/CutItem/CutItem.js';
import { PremieraToggle } from './components/PremieraToggle/PremieraToggle.js';

import { convert_time_str_to_sec } from './../../../../../../helpers/convert_time_str_to_sec.js';
import { EVENT_TYPE } from './../../../../../../config/layout.js';

const CompletedTimeSegmentComponent = ( props ) => {

    let {
        gridEventId,
        firstSegmentId,
        eventId,
        notes,
        isKeyPoint,
        startTime,
        durationTime,
        cutPart,
        is_premiere,
        finalNotes,

        eventListById,

    } = props;

    let [ duration, setDuration ] = useState( 0 );

    useEffect( () => {

        if( firstSegmentId === null ){
            let event = eventListById[ eventId ];
            if( event.type === EVENT_TYPE.BLOCK ){
                setDuration( durationTime );
            }else if( event.type === EVENT_TYPE.FILE ){
                setDuration( convert_time_str_to_sec( event.durationTime ) );
            };

        }else{
            setDuration( durationTime );
        };

    }, [ eventListById, durationTime ]);


    return (
        <SchEventContainer
            startTime =     { startTime }
            eventId = { eventId }
            durationTime =  { duration }
            isCompletd =    { true }
            isKeyPoint =    { isKeyPoint }
            gridEventId =   { gridEventId }
        >
            <div className = 'completedTimeSegment'>

                <PremieraToggle
                    gridEventId = { gridEventId }
                    is_premiere = { is_premiere }
                />
                <EventNameItem 
                    eventId = { eventId }
                    cutPart = { cutPart }
                />
                <EventNotesItem 
                    gridEventId =   { gridEventId }
                    finalNotes =    { finalNotes }
                />
                <div className = 'SEC_right_buttons_wrap'>

                    <CutItem 
                        gridEventId = { gridEventId }
                    />

                    <RemoveItem 
                        gridEventId = { gridEventId }
                    />
                </div> 

            </div>
        </SchEventContainer>

    )

};

export function CompletedTimeSegment( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CompletedTimeSegmentComponent
            { ...props }
            eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
