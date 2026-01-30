
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

import { ReleasesItem } from './components/ReleasesItem/ReleasesItem.js';
import { AddFreeReleaseItem } from './components/AddFreeReleaseItem/AddFreeReleaseItem.js';
import { AddFreeReleaseAsTextItem } from './components/AddFreeReleaseAsTextItem/AddFreeReleaseAsTextItem.js'

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
        releases,

        eventListById,

    } = props;

    let [ dragIsActive, setDragIsActive ] = useState( true );


    // let [ duration, setDuration ] = useState( 0 );


    // useEffect( () => {

    //     if( firstSegmentId === null ){
    //         let event = eventListById[ eventId ];
    //         if( event.type === EVENT_TYPE.BLOCK ){
    //             setDuration( durationTime );
    //         }else if( event.type === EVENT_TYPE.FILE ){
    //             setDuration( convert_time_str_to_sec( event.durationTime ) );
    //         };

    //     }else{
    //         setDuration( durationTime );
    //     };


    // }, [ eventListById, durationTime ]);


    return (
        <SchEventContainer
            startTime =     { startTime }
            eventId =       { eventId }
            durationTime =  { durationTime }
            isCompletd =    { true }
            isKeyPoint =    { isKeyPoint }
            gridEventId =   { gridEventId }
            firstSegmentId = { firstSegmentId }
            dragIsActive = { dragIsActive }
            setDragIsActive = { setDragIsActive }
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
                    setDragIsActive = { setDragIsActive }
                />

                

                <div className = 'SEC_right_buttons_wrap'>

                    <AddFreeReleaseItem
                        gridEventId =       { gridEventId }
                        releases =          { releases }
                        eventId =           { eventId }
                        firstSegmentId =    { firstSegmentId }
                        setDragIsActive = { setDragIsActive }
                    />

                    <AddFreeReleaseAsTextItem
                        gridEventId =       { gridEventId }
                        releases =          { releases }
                        eventId =           { eventId }
                        firstSegmentId =    { firstSegmentId }
                        setDragIsActive =   { setDragIsActive }
                    />

                    <CutItem 
                        gridEventId = { gridEventId }
                        setDragIsActive = { setDragIsActive }
                    />

                    <RemoveItem 
                        gridEventId = { gridEventId }

                    />
                </div> 

            </div>

            <ReleasesItem
                releases = { releases }
                gridEventId = { gridEventId }
                firstSegmentId = { firstSegmentId }
            />
            
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
