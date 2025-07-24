
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppearanceOfEvent.scss';

import { selectorData as layoutSlice } from './../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';

import { get_event_name_colors_style } from './../../vendors/get_event_name_colors_style.js';

const AppearanceOfEventComponent = ( props ) => {

    let {
        eventId,
        startTime,
        isAKeyOneEvent = false,

        eventListById,
        categoryListById,

    } = props;

    let [ isReady, setIsReady] = useState( false );
    let [ duration, setDuration ] = useState( 0 );
    let [ eventNotes, setEventNotes ] = useState('');

    let [ prefix, setPrefix ] = useState( '' );
    let [ eventName, setEventName ] = useState('');

    useEffect( () => {
        if( eventId === null ){
            setIsReady( false );
            setDuration( 0 );
            setEventNotes( '' );
        }else{
            setIsReady( true );
            if( eventListById[ eventId ] ){

                let { category_id, name, notes, durationTime } = eventListById[ eventId ];
                
                setDuration( durationTime );
                setEventNotes( notes );

                if( categoryListById[ category_id ] ){
                    let { prefix } = categoryListById[ category_id ];
                    setPrefix( prefix );
                    setEventName( name );
                }else{
                    setPrefix( '' );
                    setEventName( '' );
                };
            };


        };


    }, [ eventId ] );

    return (<>{
        isReady? (
            <div className = 'appearanceOfASingleGridEvent'>
                <div className = 'AOASGE_wrap'>
                    <div className = 'AOASGE_Time'>
                        <span className = { `AOASGE_Time_time ${isAKeyOneEvent? 'isKeyPoint': ''}` }>{ convert_sec_to_time( startTime ) }</span>
                        <span className = 'AOASGE_Time_duration'>{ duration }</span>
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
categoryListById = { layout.categoryListById }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
