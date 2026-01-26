
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FRL_AddNewFiles.scss';

import { selectorData as scheduleResultSlise, setFreeReleasesIsChanges } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { get_metadata_from_video_file } from './../../../../../../../../helpers/get_metadata_from_video_file.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { FreeReleasesListClass } from './../../../../../../../../classes/FreeReleasesListClass.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

import { EventByCategorySelect } from './../../../../../../../../components/EventByCategorySelect/EventByCategorySelect.js';
import { FRL_ButtonAddFromFolder } from './components/FRL_ButtonAddFromFolder/FRL_ButtonAddFromFolder.js';
import { FRL_ButtonUploadTXT } from './components/FRL_ButtonUploadTXT/FRL_ButtonUploadTXT.js';
import { FRL_ButtonSaveAsTXTFile } from './components/FRL_ButtonSaveAsTXTFile/FRL_ButtonSaveAsTXTFile.js';


const FRL_AddNewFilesComponent = ( props ) => {

    let {
        isOpen,

        setFreeReleasesIsChanges,

        eventListById,

        // scheduleResult,

    } = props;

    let [ isReady, setIsReady ] = useState( false );
    let [ newFilesList, setNewFilesList ] = useState( [] );
    let [ eventId, setEventId ] = useState( null );

    useEffect( () => {
        if( isOpen === false ){
            setNewFilesList( [] );
            setEventId( null );
            setIsReady( false );
        };
    }, [ isOpen ] );

    useEffect( () => {

        if( eventId === null){
            setIsReady( false );
        }else{
            if( newFilesList.length === 0 ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };
    }, [ newFilesList, eventId ] );


    const add_new_free_releases = () => {
        if( access_right( 'schedule_edit' ) ){
            let FreeReleasesList = new FreeReleasesListClass();
            FreeReleasesList.SetListFromStore();
            FreeReleasesList.AddNewFiles( newFilesList, eventId );

            FreeReleasesList.FilterOnlyUniq();
            FreeReleasesList.SetToStore( true );
            FreeReleasesList.SetToStoreLastCurrentData();
            setNewFilesList( [] );



            // setEventId( null );
            // setIsReady( false );
        };
    }

    const remove = ( fileName ) => {

        let arr = [];
        for( let i = 0; i < newFilesList.length; i++ ){
            if( newFilesList[ i ].file_name !== fileName ){
                arr.push( newFilesList[ i ] );
            };
        }
        setNewFilesList( arr );

    }

    const create = ( arr, event_id ) => {

        let div = arr.map( ( item, index ) => {

            let { file_duration, file_name } = item;

            let style = null;
            let name = '';
            if( eventListById[ event_id ] ){
                style = eventListById[ event_id ].style;
                name = eventListById[ event_id ].name;
            };

            return (
                <div 
                    className = 'FRL_file_item'
                    key = { index }
                >
                    <input
                        type = 'text'
                        value = { file_name }
                        onChange = { () => {} }
                    />

                    { style === null? '': (
                        <span className = 'FRL_eventName' style = { style }>{ name }</span>
                    ) }

                    <span className = 'FRL_file_item_dur'>{ convert_sec_to_time( file_duration ) }</span>

                    <span
                        className = 'FRL_file_item_remove icon-cancel-2'
                        onClick = { () => { remove( file_name ) } }
                    >
                    </span>
                </div>
            )

        } );

        return div;

    }


    



    return (

        <div className = 'FRL_AddNewFiles'>

            <EventByCategorySelect
                isOpen =        { isOpen }
                value =         { eventId }
                changeHandler = { setEventId }
                maxHeight = { 45 }
            />

            <div className = 'FRL_files'>

                <div className = 'FRL_filesWrap'>

                    <ScrollContainer
                        height = { '6em' }
                    >
                        { create( newFilesList, eventId ) }
                    </ScrollContainer>

                    

                </div>

                <div className = 'FRL_add_right_buttons'>

                    <FRL_ButtonAddFromFolder
                        newFilesList = { newFilesList }
                        setNewFilesList = { setNewFilesList }
                    />

                    <FRL_ButtonUploadTXT
                        newFilesList = { newFilesList }
                        setNewFilesList = { setNewFilesList }
                    />

                    <FRL_ButtonSaveAsTXTFile />

                </div>

                


            </div>

            <div className = 'FRL_button_wrap'>
                <AWButtonAdd
                    isReady =       { isReady }
                    clickHandler =  { add_new_free_releases }
                />
            </div>

        </div>


    )

};

export function FRL_AddNewFiles( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );

    const dispatch = useDispatch();

    return (
        <FRL_AddNewFilesComponent
            { ...props }

            eventListById = { layout.eventListById }

            setFreeReleasesIsChanges = { ( val ) => { dispatch( setFreeReleasesIsChanges( val ) ) } }

        />
    );


}
