
import React, { useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWGetFileForEvent.scss';

import { TakeFromFolderButton } from './components/TakeFromFolderButton/TakeFromFolderButton.js';
import { FileNameTextarea } from './components/FileNameTextarea/FileNameTextarea.js';
import { FileDataEdit } from './components/FileDataEdit/FileDataEdit.js';

import { AWButtonAdd } from './../AWButtonAdd/AWButtonAdd.js';

const AWGetFileForEventComponent = ( props ) => {

    let {
        fileName,
        setFileName,
        fileDuration,
        setFileDuration,

        // isOpen,
        // setIsOpen,

    } = props;


    // useEffect( () => {
    //     if( isOpen ){
            
    //     }else{
    //         clearData();
    //     };

    // }, [ isOpen ] );


    const clearData = () => {
        setFileName( '' );
        setFileDuration( null );
    }



    return (
        <div className = 'AW_item AWGetFileForEvent'>

            <TakeFromFolderButton
                setFileName =       { setFileName }
                setFileDuration =   { setFileDuration }
                clearData =         { clearData }
            />

            <FileNameTextarea
                setFileName =       { setFileName }
                setFileDuration =   { setFileDuration }
                clearData =         { clearData }
            />

            <FileDataEdit
                fileName =          { fileName }
                setFileName =       { setFileName }
                fileDuration =      { fileDuration }
                setFileDuration =   { setFileDuration }
            />

        </div>
    )

};

export function AWGetFileForEvent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWGetFileForEventComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
