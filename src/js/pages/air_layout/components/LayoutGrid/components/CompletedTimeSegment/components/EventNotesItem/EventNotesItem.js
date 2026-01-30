
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventNotesItem.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWTextarea } from './../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';


const EventNotesItemComponent = ( props ) => {

    let {
        eventId,
        id,
        notes,

        eventListById,
        setDragIsActive,
    } = props;

    // let inputRef = useRef();

    let [ isOpen, setIsOpen ] = useState( false );

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

    useEffect( () => {
        if( isOpen ){
            setDragIsActive( false );
        }else{
            setDragIsActive( true );
        };
    }, [ isOpen ] );

    const set_changes_to_store = () => {
        if( access_right( 'layout_grid_edit' ) ){
            if( notesValue !== notes ){
                set_grid_event_changes_to_store( id, { notes: notesValue } );
            }; 
        };
    };

    const clickOpen = () => {
        setIsOpen( true );
    }

    const changeGridEvent = ( e ) => {
        if( access_right( 'layout_grid_edit' ) ){
            let val = e.target.value;
            setNotesValue( val );
        };
    }

    const save = () => {
        set_changes_to_store();
        setIsOpen( false );
    };
    


    return (
        <div className = 'CTS_EventNotesItem'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title =         'Заметки'
                width =         { '30em' }
                height =        { '20em' }

            >

                {/* <AWTextarea 
                    title =         { 'Заметки событий' }
                    value =         { eventNotes }
                    onChange =      { () => {} }
                    placeholder =   'Редактируются в событиях'
                /> */}

                <div
                    className = 'CTS_EventNotesItem_all_val'
                >
                    <p>{ inputValue }</p>
                </div>

                <AWTextarea 
                    title =         { '' }
                    max = { 250 }
                    value =         { notesValue }
                    onChange =      { changeGridEvent }
                    placeholder =   'Это прочтёт эфирщик'
                />

                <AWButtonAdd 
                    title =         'Сохранить'
                    icon =          'icon-floppy'
                    isReady =       { true }
                    clickHandler =  { save }
                />

            </AlertWindowContainer>

            <span 
                className = 'SEC_EventNotesItem_text'
                onClick = { clickOpen }
            >{ inputValue }</span>
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
