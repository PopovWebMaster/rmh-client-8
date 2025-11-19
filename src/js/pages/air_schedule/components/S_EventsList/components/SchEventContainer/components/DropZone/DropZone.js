
import React from "react";

import './DropZone.scss';


export const DropZone = ( props ) => {

    let {
        dragebleReleaseId,
        isEmpty,
        startTime,
        durationTime,

    } = props;

    const getPos = ( startTime, durationTime, position ) => {
        let part = durationTime/5;
        let pos = Math.floor( ( part * position ) + part/2 );
        return startTime + pos;


    }


    return (
        <div className = { `${dragebleReleaseId === null? 'displayNone': isEmpty === false? 'displayNone': ''}  SEC_DropZone` }>
            {/* <div 
                className = 'SEC_DropZone_0'
                data-drop-start-time = { startTime } ></div>
            <div   
                className = 'SEC_DropZone_1' 
                data-drop-start-time = { getPos(  startTime, durationTime, 1  ) }
            ></div>
            <div 
                className = 'SEC_DropZone_2' 
                data-drop-start-time = { getPos(  startTime, durationTime, 2  ) }
            ></div>
            <div 
                className = 'SEC_DropZone_3' 
                data-drop-start-time = { getPos(  startTime, durationTime, 3  ) }
            ></div>
            <div 
                className = 'SEC_DropZone_4' 
                data-drop-start-time = { startTime + durationTime } 
            ></div> */}

            <div 
                className = 'SEC_DropZone_0'
                data-drop-start-time = { 1 } ></div>
            <div   
                className = 'SEC_DropZone_1' 
                data-drop-start-time = { 2 }
            ></div>
            <div 
                className = 'SEC_DropZone_2' 
                data-drop-start-time = { 3 }
            ></div>
            <div 
                className = 'SEC_DropZone_3' 
                data-drop-start-time = { 4 }
            ></div>
            <div 
                className = 'SEC_DropZone_4' 
                data-drop-start-time = { 5 } 
            ></div>
        </div> 
    )

};

