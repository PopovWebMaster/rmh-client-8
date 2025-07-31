
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EventNotesItem.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

// import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWTextarea } from './../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js'




const EventNotesItemComponent = ( props ) => {

    let {
        gridEventId,
        finalNotes,

        // scheduleEventsList,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ inputValue, setInputValue ] = useState( finalNotes );


    useEffect( () => {
        setInputValue( finalNotes );
    }, [ finalNotes ] )



    const clickOpen = () => {
        setIsOpen( true );
    }
    const change = ( e ) => {
        let val = e.target.value;
        setInputValue( val );
    };

    const save = () => {
        set_schedule_list_changes_to_store( gridEventId, { finalNotes: inputValue } );
        setIsOpen( false );
    }


    return (
        <div className = 'SEC_EventNotesItem'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title =         'Заметка для эфирщика'
                width =         { '30em' }
                height =        { '20em' }

            >

                <AWTextarea 
                    title = { 'Notes' }
                    value = { inputValue }
                    onChange = { change }

                    placeholder = 'Это прочтёт эфирщик'
                />

                <AWButtonAdd 
                    isReady = { true }
                    clickHandler = { save }
                />

            </AlertWindowContainer>

            <div
                className = 'SEC_EventNotesItem_btn'
                onClick = { clickOpen }
            >
                <span className = 'SEC_EventNotesItem_icon icon-edit'></span>
            </div>

            <span className = 'SEC_EventNotesItem_text'>{ inputValue }</span>

        </div>
    )

};

export function EventNotesItem( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <EventNotesItemComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
