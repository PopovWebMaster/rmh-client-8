
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventLinkedFileItem.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { set_event_changes_to_store } from './../../../../vendors/set_event_changes_to_store.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { get_metadata_from_video_file } from './../../../../../../../../helpers/get_metadata_from_video_file.js';

import { ELF_NewFileInput } from './ELF_NewFileInput/ELF_NewFileInput.js';
import { ELF_TakeFromFolder } from './ELF_TakeFromFolder/ELF_TakeFromFolder.js';
import { ELF_EventDuration } from './ELF_EventDuration/ELF_EventDuration.js';


const EventLinkedFileItemComponent = ( props ) => {

    let {
        id,
        linked_file,
        type,
        durationTime,

        // eventList,
        // setEventListAsChanged,

    } = props;

    let LINKED_FILE_TEXT = 'Привязать файл';

    let [ isOpen, setIsOpen ] = useState( false );

    let [ newFileName, setNewFileName ] = useState( '' );
    let [ newFileDuration, setNewFileDuration ] = useState( 0 );
    let [ eventDuration, setEventDuration ] = useState( 0 );


    let [ title, setTitle ] = useState( '' );

    useEffect( () => {
        if( linked_file === null ){
            setTitle( LINKED_FILE_TEXT );
        }else{
            if( linked_file[0] ){
                setTitle( linked_file[0].name );
            }else{
                setTitle( LINKED_FILE_TEXT );
            };
        };
    }, [ linked_file ] );

    useEffect( () => {

        if( isOpen === false ){
            setNewFileName( '' );
        };

    }, [ isOpen ] );



    return (

        <div className = 'LE_EventLinkedFileItem'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                title =     'Привязать файл'
                width =     '45vw'
                height =    '45vh'
            >

                <div className = 'LE_EventLinkedFileItem_container'>

                    <ELF_EventDuration
                        linked_file =       { linked_file }
                        type =              { type }
                        durationTime =      { durationTime }
                        eventDuration =     { eventDuration }
                        setEventDuration =  { setEventDuration }
                    />

                    <h3>Названия файла:</h3>

                    <ELF_NewFileInput
                        newFileName = { newFileName }
                        setNewFileName = { setNewFileName }
                    />

                    <ELF_TakeFromFolder
                        newFileDuration =       { newFileDuration }
                        setNewFileName =        { setNewFileName }
                        setNewFileDuration =    { setNewFileDuration }
                    />

                    

                </div>
                
            </AlertWindowContainer>

            <span 
                className = 'LE_ELF_addBtn'
                onClick = { () => { setIsOpen( true ) } }
            >{ title }</span>

        </div>
                

    )

};

export function EventLinkedFileItem( props ){

    const layout = useSelector( layoutSlice );
    
    const dispatch = useDispatch();

    return (
        <EventLinkedFileItemComponent
            { ...props }
            // eventList = { layout.eventList }

            // setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
