
import React, { useState, useEffect } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './FileNameTextarea.scss';

import { pars_string_by_fileName_and_duration } from './../../vendors/pars_string_by_fileName_and_duration.js';


const FileNameTextareaComponent = ( props ) => {

    let {
        setFileName,
        setFileDuration,
        clearData,
    } = props;

    let [ value, setValue ] = useState( '' );
    let [ isEdittable, setIsEdittable ] = useState( false );

    const enterHandler = () => {
        let {
            duratin,
            fileName,
        } = pars_string_by_fileName_and_duration( value );

        setFileName( fileName );
        setFileDuration( duratin );

        let timerId = setTimeout( () => {
            setValue( '' );
            setIsEdittable( false );
            clearTimeout( timerId );
        }, 100 );
        
    }

    let enter = ( e ) => {
        if( e.which === 13 ){
            if( e.shiftKey === false ){
                enterHandler();
            };
        };
    }

    const onChange = ( e ) => {
        let val = e.target.value;
        setValue( val );
        if( isEdittable === false ){
            clearData();
            setIsEdittable( true );
        };
    }

   
    return (
        <div className = 'AWGFFE_FileNameTextarea'>
            <h4>Введите имя файла + время + ↵Enter</h4>

            <textarea 
                className = 'AWGFFE_textarea'
                value =     { value }
                onChange =  { onChange }
                onKeyDown = { enter }
                placeholder = { `Пример:\nPRK_REK_RABOTA_FRP_20260130.mp4 0:00:17\n0:00:17 PRK_REK_RABOTA_FRP_20260130.mp4\nPRK_REK_RABOTA_FRP_20260130.mp4` }
            />

           

        </div>
    )

};

export function FileNameTextarea( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <FileNameTextareaComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
