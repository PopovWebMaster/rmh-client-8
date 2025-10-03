
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ReleaseBuffer.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';

import { BufferButtons } from './components/BufferButtons/BufferButtons.js';
import { BufferList } from './components/BufferList/BufferList.js';



const ReleaseBufferComponent = ( props ) => {

    let {

    } = props;

    let bufferRef = useRef();

    let [ bufferButtonsHeight, setBufferButtonsHeight ] = useState( 0 );
    let [ bufferListHeight, setBufferListHeight ] = useState( 0 );

     useEffect( () => {
        let bufferElem = bufferRef.current;
        let { height } = window.getComputedStyle( bufferElem );
        setBufferListHeight( parseFloat( height ) - bufferButtonsHeight );
    }, [ bufferButtonsHeight ] );


    return (
       <div 
            className = 'releaseBuffer'
            ref = { bufferRef }

        >
            <BufferButtons
                setBufferButtonsHeight = { setBufferButtonsHeight }
            />
            
            <BufferList
                height = { bufferListHeight }
            />


        
       </div>
    )

};


export function ReleaseBuffer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <ReleaseBufferComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
