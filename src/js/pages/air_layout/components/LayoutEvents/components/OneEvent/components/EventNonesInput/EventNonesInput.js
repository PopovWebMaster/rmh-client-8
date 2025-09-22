
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventNonesInput.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

// import { seve_one_event_changes_on_setver } from './../../../../vendors/seve_one_event_changes_on_setver.js';

import { set_event_changes_to_store } from './../../../../vendors/set_event_changes_to_store.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';


const EventNonesInputComponent = ( props ) => {

    let {
        id,
        notes,
        eventList,
        setEventListAsChanged,

    } = props;

    let [ notesValue, setNotesValue ] = useState( notes );

    let inputRef = useRef();

    useEffect( () => {
        setNotesValue( notes );
    }, [ notes ] );

    const set_changes_to_store = () => {

        if( notesValue.trim() !== notes ){

            set_event_changes_to_store( id, { notes: notesValue.trim() } );

            // seve_one_event_changes_on_setver({
            //     eventId: id,
            //     eventData: { 
            //         notes: notesValue,
            //     },
            //     callback: () => {},
            // });

        };

       

    };

    const change = ( e ) => {
        access_right( 'layout_event_edit', () => {
            let val = e.target.value;
            setNotesValue( val );
        } );


    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            set_changes_to_store();
            inputRef.current.blur();
        };
    };

    const blur = ( e ) => {
        set_changes_to_store();
    };

    return (

        <div className = 'LE_EventNonesInput'>
            <input 
                type =      'text'
                value =     { notesValue }
                maxLength = { 255 }
                onChange =  { change }
                onKeyDown = { enter }
                onBlur =    { blur }
                ref =       { inputRef }
            />
        </div>
                

    )

};

export function EventNonesInput( props ){

    const layout = useSelector( layoutSlice );
    
    const dispatch = useDispatch();

    return (
        <EventNonesInputComponent
            { ...props }
            eventList = { layout.eventList }

            setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
