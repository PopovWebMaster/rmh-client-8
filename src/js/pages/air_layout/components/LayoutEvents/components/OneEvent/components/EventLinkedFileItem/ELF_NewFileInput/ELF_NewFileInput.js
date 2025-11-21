
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ELF_NewFileInput.scss';

// import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

const ELF_NewFileInputComponent = ( props ) => {

    let {
        newFileName,
        setNewFileName,

    } = props;

    const change_name = ( e ) => {
        // let val = e.target.value;
        // setNewFileName( val );
    };

    return (
        <input 
            type =          'text'
            value =         { newFileName }
            className =     'LE_ELF_container_newFileInput'
            onChange =      { change_name }
            maxLength =     { 250 }
            // placeholder =   { "" }
        /> 

    )

};

export function ELF_NewFileInput( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ELF_NewFileInputComponent
            { ...props }
            // eventList = { layout.eventList }

            // setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
