
import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BufferButtons.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { AddAllBtn } from './../AddAllBtn/AddAllBtn.js';

let flag = true; 
const BufferButtonsComponent = ( props ) => {

    let {
        setBufferButtonsHeight,

    } = props;

    useEffect(() => {
        setStyleHeight();
    }, []);

    let buttonsRef = useRef();
    const setStyleHeight = () => {
        if( flag ){
            flag = false;
            let timerId = setTimeout( () => {
                let elem = buttonsRef.current;
                let style = window.getComputedStyle( elem );
                setBufferButtonsHeight( parseFloat( style.height ) );
                flag = true;
                clearTimeout( timerId );
            }, 300 );
        };
    };

    



    return (
       <div 
            className = 'RB_BufferButtons'
            ref = { buttonsRef }
        >
            <AddAllBtn />


        
       </div>
    )

};


export function BufferButtons( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <BufferButtonsComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
