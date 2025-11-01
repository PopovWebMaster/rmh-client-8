
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventNotesItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';


const EventNotesItemComponent = ( props ) => {

    let {
        eventId,
        id,
        notes,

        eventListById,
    } = props;

    let inputRef = useRef();

    let [ eventNotes, setEventNotes ] = useState('');
    let [ notesValue, setNotesValue ] = useState( notes );
    let [ inputValue, setInputValue ] = useState( '' );


    useEffect( () => {
        setNotesValue( notes );
    }, [ notes ] )

    useEffect( () => {
        if( eventListById[ eventId ] ){
            setEventNotes( eventListById[ eventId ].notes );
        };
    }, [ eventId, eventListById ]);

    useEffect(() => {
        if( eventNotes.trim() === '' ){
            setInputValue( notesValue );
        }else{
            setInputValue( `${eventNotes} ${notesValue}` );
            
        };
        
    }, [ eventNotes, notesValue ]);

    const set_changes_to_store = () => {
        if( access_right( 'layout_grid_edit' ) ){
            if( notesValue !== notes ){
                set_grid_event_changes_to_store( id, { notes: notesValue } );
            }; 
        };
    };

    const change = ( e ) => {
        if( access_right( 'layout_grid_edit' ) ){
            let val = e.target.value;
            if( eventNotes === '' ){
                setNotesValue( val );
            }else{
                if( val.indexOf( `${eventNotes} ` ) !== -1 ){
                    let val_2 = val.replace( `${eventNotes} `, '' );
                    setNotesValue( val_2 );
                };
            };
        };
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
        <div className = 'CTS_EventNotesItem'>
            <input 
                type =      'text'
                // value =     { `${eventNotes} ${notesValue}` }
                value =     { inputValue }

                maxLength = { 255 }
                onChange =  { change }
                onKeyDown = { enter }
                onBlur =    { blur }
                ref =       { inputRef }
            />
        </div>
    )

};

export function EventNotesItem( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EventNotesItemComponent
            { ...props }
            layout = { layout }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
