
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventNonesInput.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';


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

        if( notesValue !== notes ){
            let newArr = [];

            for( let i = 0; i < eventList.length; i++ ){
                if( eventList[ i ].id === id ){
                    let item = { ...eventList[ i ] };
                    item.notes = notesValue;
                    newArr.push( item );
                }else{
                    newArr.push({ ...eventList[ i ] });
                };

            };

            setEventListAsChanged( newArr );
        };

       

    };

    const change = ( e ) => {
        let val = e.target.value;
        setNotesValue( val );

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
