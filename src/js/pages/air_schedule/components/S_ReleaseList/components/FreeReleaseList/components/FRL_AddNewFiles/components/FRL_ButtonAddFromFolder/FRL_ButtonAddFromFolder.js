// FRL_ButtonAddFromFolder


import React, { useEffect, useState, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_ButtonAddFromFolder.scss';

// import { selectorData as scheduleResultSlise, setFreeReleasesIsChanges } from './../../../../../../../../redux/scheduleResultSlise.js';
// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { get_metadata_from_video_file } from './../../../../../../../../../../helpers/get_metadata_from_video_file.js';

const FRL_ButtonAddFromFolderComponent = ( props ) => {

    let {
        newFilesList,
        setNewFilesList,

    } = props;

    // let [ isReady, setIsReady ] = useState( false );
    // let [ newFilesList, setNewFilesList ] = useState( [] );
    // let [ eventId, setEventId ] = useState( null );

    // useEffect( () => {
    //     if( isOpen === false ){
    //         setNewFilesList( [] );
    //         setEventId( null );
    //         setIsReady( false );
    //     };
    // }, [ isOpen ] );

    // useEffect( () => {
    //     if( eventId === null){
    //         setIsReady( false );
    //     }else{
    //         if( newFilesList.length === 0 ){
    //             setIsReady( false );
    //         }else{
    //             setIsReady( true );
    //         };
    //     };
    // }, [ newFilesList, eventId ] );


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




    return (

        <div className = 'FRL_add_from_folder'>
            <span
                onClick = { click }
                className = 'FRL_btn'
            >Взять видео из папки</span>

            { newFilesList.length > 0? (
                <span className = 'FRL_count'>Всего: { newFilesList.length } шт.</span>
            ): '' }

            <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple = { true }
            />
        </div>


    )

};

export function FRL_ButtonAddFromFolder( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const layout = useSelector( layoutSlice );

    // const dispatch = useDispatch();

    return (
        <FRL_ButtonAddFromFolderComponent
            { ...props }

            // eventListById = { layout.eventListById }

            // setFreeReleasesIsChanges = { ( val ) => { dispatch( setFreeReleasesIsChanges( val ) ) } }

        />
    );


}
