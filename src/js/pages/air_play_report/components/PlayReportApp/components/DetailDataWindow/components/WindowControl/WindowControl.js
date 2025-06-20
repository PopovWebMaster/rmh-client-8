

import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setDetailDataWindowIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './WindowControl.scss';

let topVal = 0
let leftVal = 0;

const WindowControlComponent = ( props ) => {

    let {
        children,
        detailDataWindow_isOpen,
        setDetailDataWindowIsOpen

    } = props;

    let boxRef = useRef();

    const windowMouseMove = ( event ) => {
        let width_val = event.clientX - leftVal;
        let height_val = event.clientY - topVal;
        boxRef.current.style.width = width_val + 'px';
        boxRef.current.style.height = height_val + 'px';


    };

    const windowMouseUp = ( event ) => {
        document.removeEventListener( 'mousemove', windowMouseMove );
        document.removeEventListener( 'mouseup', windowMouseUp );


        let elem = document.getElementById('PR_DetailDataWindow_curtain');
        elem.remove();


        

    };

    const resize_start = ( e ) => {
        let div = document.createElement( 'div' );
        div.id = 'PR_DetailDataWindow_curtain';
        let elem = document.querySelector( '.PR_DetailDataWindow' );
        elem.prepend( div );

        document.addEventListener( 'mousemove', windowMouseMove );
        document.addEventListener( 'mouseup', windowMouseUp );


        let rect = window.getComputedStyle( boxRef.current );
        let top = parseFloat( rect.top );
        let left = parseFloat( rect.left );


        topVal = top;
        leftVal = left;



    }




    return (

        <div 
            className = { detailDataWindow_isOpen? 'windowControl': 'windowControl hidden' }
            ref = { boxRef }
        >
            <div className = 'AWC_header'>

                <span
                    onClick = { () => { setDetailDataWindowIsOpen( false ) } }
                
                >✖</span>
            
            </div>
            <div className = 'AWC_body'>
                { children }

            </div>
            <div className = 'AWC_footer'>
                <span 
                    className = 'fpd-icon-corner-resize'
                    onMouseDown =   { resize_start }

                ></span>
            </div>
        </div>
        
    )

};


export function WindowControl( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <WindowControlComponent
            { ...props }
   

            detailDataWindow_isOpen = { playReport.detailDataWindow_isOpen }

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
