
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_EditContainer.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { AWEventSelect } from './../../../../../../../../components/AlertWindowContainer/AWEventSelect/AWEventSelect.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { PageBodySaveButton } from './../../../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { get_metadata_from_video_file } from './../../../../../../../../helpers/get_metadata_from_video_file.js';

import { FRL_SaveChangesButton } from './../FRL_SaveChangesButton/FRL_SaveChangesButton.js';
 
import { FRL_AddNewFiles } from './../FRL_AddNewFiles/FRL_AddNewFiles.js';

const FRL_EditContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        
       
    } = props;

    let [ isChanged, setIsChanged ] = useState( false );
    let [ isReady, setIsReady ] = useState( false );

    let [ newFilesList, setNewFilesList ] = useState( [] );
    let [ eventId, setEventId ] = useState( null );

    useEffect( () => {
        if( isOpen === false ){
            setIsChanged( false );
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


    const inputRef = useRef();

    const click = () => {

        let accept = [ '.mp4' ];
        let input = inputRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;
        let arr = [];
        const finish = () => {
            setNewFilesList( arr );
        };
        const recursive_get = ( files, index ) => {
            if( files[ index ] ){
                get_metadata_from_video_file( files[ index ], ( fileName, fileDuration ) => {
                    if( fileDuration !== null ){
                        arr.push( {
                            file_name: fileName,
                            file_duration: fileDuration,
                        } );
                    };
                    recursive_get( files, index + 1 )
                } );
            }else{
                finish();
            };
        };
        recursive_get( files, 0 );
    }

    const change_event_id = ( id ) => {
        setEventId( id );
    };

    const add_new_free_releases = () => {
        setIsChanged( true );
    }


    



    return (
        <div className = 'FRL_EditContainer'>

            <div className = 'FRL_EditContainer_topPanel'>
                <FRL_SaveChangesButton />
            </div>

            <FRL_AddNewFiles
                isOpen = { isOpen }
            />

            {/* <div className = 'FRL_EditContainer_addPanel'>

                <AWEventSelect
                    value = { eventId }
                    changeHandler = { change_event_id }
                />

                <div className = 'FRL_files'>
                    <div className = 'FRL_filesWrap'>

                    </div>

                    <div className = 'FRL_add_from_folder'>

                        <span
                            onClick = { click }
                        >Взять из папки</span>

                        <input 
                            type =          'file' 
                            ref =           { inputRef }
                            className =     'hiddenInput'
                            onChange =      { inputHandler }
                            multiple = { true }
                        />

                    </div>


                </div>

                <AWButtonAdd
                    isReady =       { isReady }
                    clickHandler =  { add_new_free_releases }
                />


            </div> */}


        </div>
    )

};

export function FRL_EditContainer( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_EditContainerComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
