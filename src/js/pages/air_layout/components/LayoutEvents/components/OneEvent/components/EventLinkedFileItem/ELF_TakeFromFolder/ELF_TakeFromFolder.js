
import React, { useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ELF_TakeFromFolder.scss';

// import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { get_metadata_from_video_file } from './../../../../../../../../../helpers/get_metadata_from_video_file.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';

const ELF_TakeFromFolderComponent = ( props ) => {

    let {
        newFileDuration,
        setNewFileName,
        setNewFileDuration,
        
    } = props;

    const inputRef_hidden = useRef();
    
    const click = () => {

        let accept = [ '.mp4', '.mov' ];
        let input = inputRef_hidden.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };

        get_metadata_from_video_file( e.target.files[0], ( fileName, fileDuration ) => {
            if( fileDuration !== null ){
                setNewFileName( fileName );
                setNewFileDuration( fileDuration );
            };
        } );

    };


    return (

        <div className = 'ELF_TakeFromFolder'>

            <span className = 'ELF_TakeFromFolder_allDur'>Хронометраж: { convert_sec_to_time( newFileDuration ) }</span>

            <span
                onClick = { click }
                className = 'ELF_TakeFromFolder_btn'
            >Взять из папки</span>

            <input 
                type =          'file' 
                ref =           { inputRef_hidden }
                className =     'ELF_TakeFromFolder_inp_file'
                onChange =      { inputHandler }
            />

        </div>


    )

};

export function ELF_TakeFromFolder( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ELF_TakeFromFolderComponent
            { ...props }
            // eventList = { layout.eventList }

            // setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
