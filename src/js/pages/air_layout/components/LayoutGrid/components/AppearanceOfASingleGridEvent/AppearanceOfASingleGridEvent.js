

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppearanceOfASingleGridEvent.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { get_event_name_colors_style } from './../../vendors/get_event_name_colors_style.js';

const AppearanceOfASingleGridEventComponent = ( props ) => {

    let {
        cutPart,
        durationTime,
        firstSegmentId,
        id = null,
        isKeyPoint,
        notes,
        startTime,
        eventId,

        eventListById,
        categoryListById,

    } = props;

    let [ prefix, setPrefix ] = useState( '' );
    let [ eventName, setEventName ] = useState('');
    let [ eventNotes, setEventNotes ] = useState('');

    useEffect( () => {
        if( eventId === null ){
            setPrefix( '' );
            setEventName( '' );
            setEventNotes( '' );
        }else{
            if( eventListById[ eventId ] ){
                let { category_id, name, notes } = eventListById[ eventId ];

                if( categoryListById[ category_id ] ){
                    let { prefix } = categoryListById[ category_id ];
                    setPrefix( prefix );
                    setEventName( name );
                    setEventNotes( notes );

                }else{
                    setPrefix( '' );
                    setEventName( '' );
                    setEventNotes( '' );
                };
            };

        };

    }, [ 
        cutPart,
        durationTime,
        firstSegmentId,
        id,
        isKeyPoint,
        notes,
        startTime,
        eventId,
    ] );



    return (
        <div className = 'appearanceOfASingleGridEvent'>

            <div className = 'AOASGE_wrap'>
                <div className = 'AOASGE_Time'>
                    <span className = { `AOASGE_Time_time ${isKeyPoint? 'isKeyPoint': ''}` }>{ convert_sec_to_time( startTime ) }</span>
                    <span className = 'AOASGE_Time_duration'>{ convert_sec_to_time( durationTime ) }</span>
                </div>
                <div className = 'AOASGE_Body'>

                    <div className = 'AOASGE_PrefixItem'>
                        <span>{ prefix }</span>
                    </div>

                    <div className = 'AOASGE_EventNameItem'>
                        <input 
                            type =      'text'
                            value =     { eventName }
                            maxLength = { 255 }
                            onChange =  { () => {} }
                            style =     { get_event_name_colors_style( eventId ) }
                        />
                        { cutPart !== null? (
                            <div className = 'curPartName'>
                                <span>
                                    <span className = 'icon icon-scissors'></span>
                                    <span className = 'num'>{ cutPart }</span>
                                </span>
                            </div>
                        ): '' }
                        
                    </div>

                    <div className = 'AOASGE_EventNotesItem'>
                        <input 
                            type =      'text'
                            value =     { eventNotes }
                            onChange =  { () => {} }
                        />
                    </div>

                </div>
            </div>
        </div>
    )

};

export function AppearanceOfASingleGridEvent( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <AppearanceOfASingleGridEventComponent
            { ...props }
            // gridDayEventsListById = { layout.gridDayEventsListById }
            // gridOneDayList = { layout.gridOneDayList }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
