
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CompletedTimeSegment.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { GrigItemWrap } from './../GrigItemWrap/GrigItemWrap.js';

import { EventNameItem } from './components/EventNameItem/EventNameItem.js';
import { PrefixItem } from './components/PrefixItem/PrefixItem.js';
import { EventNotesItem } from './components/EventNotesItem/EventNotesItem.js';
import { RemoveItem } from './components/RemoveItem/RemoveItem.js';
import { CutItem } from './components/CutItem/CutItem.js';

import { convert_time_str_to_sec } from './../../../../../../helpers/convert_time_str_to_sec.js';
import { EVENT_TYPE } from './../../../../../../config/layout.js';

const CompletedTimeSegmentComponent = ( props ) => {

    let {
        id,
        firstSegmentId,
        eventId,
        notes,
        isKeyPoint,
        startTime,
        durationTime,
        cutPart,

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
        <GrigItemWrap
            startTime =     { startTime }
            durationTime =  { duration }
            isCompletd =    { true }
            isKeyPoint =    { isKeyPoint }
            id =            { id }
        >
            <div className = 'completedTimeSegment'>

                <PrefixItem eventId = { eventId }/>
                <EventNameItem 
                    eventId = { eventId }
                    cutPart = { cutPart }
                />
                <EventNotesItem 
                    eventId =   { eventId }
                    id =        { id }
                    notes =     { notes }
                />
                <div className = 'CTS_right_buttons_wrap'>

                    <CutItem 
                        id = { id }
                        // firstSegmentId = { firstSegmentId }
                    />

                    {/* <AddItem 
                        id = { id }
                        firstSegmentId = { firstSegmentId }
                    /> */}
                    <RemoveItem 
                        id = { id }
                    />
                </div>

            </div>
        </GrigItemWrap>

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
