
import React, { useRef, useState, useEffect } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './TakeFromFolderButton.scss';

import { get_metadata_from_video_file } from './../../../../../helpers/get_metadata_from_video_file.js';

const TakeFromFolderButtonComponent = ( props ) => {

    let {
        setFileName,
        setFileDuration,
        clearData,

    } = props;

    const inputRef = useRef();

    const click = () => {

        // clearData();

        let accept = [ '.mp4', '.mov', '.MOV', '.mxf' ];
        let input = inputRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();
    };

    const inputHandler = (e) => {
        
    
        if( !e.target.files.length ){
            return;
        };
        clearData();

        let files = e.target.files;

        get_metadata_from_video_file( files[ 0 ], ( fileName, fileDuration ) => {
            setFileName( fileName );
            setFileDuration( fileDuration );
        } );
    }



    return (
        <div className = 'AWGFFE_TakeFromFolderButton'>

            <span 
                className = 'AWGFFE_TakeFromFolderButton'
                onClick = { click }
            >Взять из папки</span>

             <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { false }
            />

        </div>
    )

};

export function TakeFromFolderButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <TakeFromFolderButtonComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
