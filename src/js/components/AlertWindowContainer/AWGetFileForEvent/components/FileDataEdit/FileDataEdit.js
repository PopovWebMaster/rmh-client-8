
import React, { useState, useEffect } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './FileDataEdit.scss';

import { MIN_EVENT_DURATION_SEC } from './../../../../../config/layout.js';

import { AWInputDuration } from './../../../AWInputDuration/AWInputDuration.js';



const FileDataEditComponent = ( props ) => {

    let {
        fileName,
        setFileName,
        fileDuration,
        setFileDuration,
    } = props;

    let [ isDown, setIsDown ] = useState( false );
    let [ duration, setDuration ] = useState( MIN_EVENT_DURATION_SEC );
    let [ fileNameValue, setFileNameValue ] = useState( '' );

    let [ timeBlink, setTimeBlink ] = useState( false );

    useEffect( () => {
        if( fileName === '' ){
            setIsDown( false );
            setTimeBlink( false );

            setDuration( MIN_EVENT_DURATION_SEC );
        }else{

            if( fileDuration === null || fileDuration === MIN_EVENT_DURATION_SEC ){
                setDuration( MIN_EVENT_DURATION_SEC );
                setTimeBlink( true );
                
            }else{
                setDuration( fileDuration );
                setTimeBlink( false );
            };

            setIsDown( true );
        };

        setFileNameValue( fileName )

    }, [ fileName, fileDuration ] );

    const onChange = ( e ) => {
        let val = e.target.value;
        setFileName( val );

    }

    useEffect( () => {

        if( timeBlink ){

            let timerId = setTimeout( () => {

                setTimeBlink( false );
                clearTimeout( timerId );
            }, 1000 );

        };


    }, [ timeBlink ] );


    return (
        <div className = 'AWGFFE_FileDataEdit'>

            <div className = 'AWGFFE_container'>
                <div className = { `AWGFFE_amin_curtain ${isDown? 'isDown': ''} ${timeBlink? 'timeBlink': ''}` }>

                    <AWInputDuration
                        value = { duration }
                        title = ''
                        changeHandler = { setFileDuration }
                    />

                    <input
                        type =      'text'
                        className = 'AWGFFE_input_text'
                        maxLength = { 200 }
                        minLength = { 4 }
                        value =     { fileNameValue }
                        onChange =  { onChange }
                    />

                    
                </div>
            </div>

        </div>
    )

};

export function FileDataEdit( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <FileDataEditComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
