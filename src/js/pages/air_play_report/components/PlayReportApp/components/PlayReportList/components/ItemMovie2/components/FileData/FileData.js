
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';

import './FileData.scss';

const FileDataComponent = ( props ) => {

    let {
        // file,

        item,

        eventListById,
    } = props;

    let [ value, setValue ] = useState( '' );

    let [ fileName, setFileName] = useState( '' );
    let [ filePuth, setfilePuth ] = useState( '' );

    let [ eventStyle, setEventStyle ] = useState( {} );
    let [ eventName, setEventName ] = useState( '' );
    let [ eventIdValue, setEventIdValue ] = useState( null );





    let [ showIsFile, setShowIsFile ] = useState( true );

    // useEffect( () => {
    //     setValue( file.name );
    // }, [ file ] );

    useEffect( () => {
        // setValue( file.name );
        // console.dir( item );

        let { type } = item;
        if( type === 'movie' ){
            let { file, eventId } = item;
            
            setValue( file.name );
            setFileName( file.name );
            setfilePuth( file.puth );

            if( eventListById[ eventId ] ){
                setEventStyle( eventListById[ eventId ].style );
                setEventName( eventListById[ eventId ].name );
                setEventIdValue( eventId );
            };

        };

        

    }, [ item ] );



    const clickFile = () => {
        setShowIsFile( true );
        setValue( fileName );
    }

    const clickPuth = () => {
        setShowIsFile( false );
        setValue( filePuth );

    }


    return (
        <div 
            className = 'PRL_ItemMovie2_FileData'
            // onMouseLeave = { clickFile }
        >

            <div className = 'PRL_FileData_wrap'>

                <div className = 'PRL_FileData_btn'>
                    <span 
                        className = { showIsFile? 'PRL_FileData_btn_isActive': '' }
                        onClick = { clickFile }
                    >file</span>

                    <span 
                        className = { showIsFile? '': 'PRL_FileData_btn_isActive' }
                        onClick = { clickPuth }
                    >puth</span>

                </div>

                <input 
                    type = 'text'
                    value = { value }
                    onChange = { () => {} }
                />

                { eventIdValue === null? '': (
                    <div className = 'PRL_FileData_event'>
                        <span
                            className = 'PRL_FileData_event_name'
                            style = { eventStyle }
                        >{ eventName }</span>
                    </div>
                ) }

                
                

            </div>
            





            
        </div> 

    )

};

export function FileData( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <FileDataComponent
            { ...props }
            eventListById = { layout.eventListById }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
