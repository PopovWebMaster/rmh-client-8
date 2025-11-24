
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventLinkedFileItem.scss';

import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { set_event_changes_to_store } from './../../../../vendors/set_event_changes_to_store.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


import { ELF_NewFileInput } from './ELF_NewFileInput/ELF_NewFileInput.js';
import { ELF_TakeFromFolder } from './ELF_TakeFromFolder/ELF_TakeFromFolder.js';
import { ELF_EventDuration } from './ELF_EventDuration/ELF_EventDuration.js';
import { ELF_ButtonAddFile } from './ELF_ButtonAddFile/ELF_ButtonAddFile.js';

import { ELF_LinkedFilesList } from './ELF_LinkedFilesList/ELF_LinkedFilesList.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../../../../../../helpers/convert_time_str_to_sec.js';

// import { get_gridDayEventsList_with_new_duration_time } from './vendors/get_gridDayEventsList_with_new_duration_time.js';
import { get_gridDayEventsList_with_new_duration_time } from './../EventDurationItem/vendors/get_gridDayEventsList_with_new_duration_time.js';

import { seve_on_server_new_grid_event_list } from './../../../../vendors/seve_on_server_new_grid_event_list.js';
import { seve_one_event_changes_on_setver } from './../../../../vendors/seve_one_event_changes_on_setver.js';

const EventLinkedFileItemComponent = ( props ) => {

    let {
        id,
        linked_file,
        type,
        durationTime,

        // eventList,
        // setEventListAsChanged,

    } = props;

    // let LINKED_FILE_TEXT = 'Привязать файл';
    let LINKED_FILE_TEXT = 'файл';


    let [ isOpen, setIsOpen ] = useState( false );
    let [ savingIsNeeded, setSavingIsNeeded ] = useState( false );

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

        if( isOpen === true ){

        }else if( isOpen === false ){
            setNewFileName( '' );

            if( savingIsNeeded ){
                let durSec = convert_time_str_to_sec( durationTime );

                if( eventDuration !== durSec ){

                    let addReport = get_gridDayEventsList_with_new_duration_time( id, eventDuration );
                    
                    seve_on_server_new_grid_event_list( addReport.gridDayEventsList, () => {
                        seve_one_event_changes_on_setver({
                            eventId: id,
                            eventData: { 
                                durationTime: convert_sec_to_time( eventDuration ),
                                durationSec: eventDuration,
                                linked_file: linked_file,
                            },
                            callback: () => {},
                        });
                    } );

                }else{
                    seve_one_event_changes_on_setver({
                        eventId: id,
                        eventData: { 
                            linked_file: linked_file,
                        },
                        callback: () => {},
                    });
                };
            };

            
        };
        setSavingIsNeeded( false );

    }, [ isOpen ] );

    const click = () => {

        access_right( 'layout_event_edit', () => {
            setIsOpen( true );
        } );

    }



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

                    <ELF_LinkedFilesList
                        event_id =          { id }
                        linked_file =       { linked_file }
                        type =              { type }
                        setSavingIsNeeded = { setSavingIsNeeded }
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

                    <ELF_ButtonAddFile
                        event_id =          { id }
                        linked_file =       { linked_file }
                        type =              { type }
                        newFileName =       { newFileName }
                        newFileDuration =   { newFileDuration }
                        setNewFileName =        { setNewFileName }
                        setNewFileDuration =    { setNewFileDuration }
                        setSavingIsNeeded =     { setSavingIsNeeded }
                    />

                    

                </div>
                
            </AlertWindowContainer>

            <span 
                className = 'LE_ELF_addBtn'
                onClick = { click }
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
