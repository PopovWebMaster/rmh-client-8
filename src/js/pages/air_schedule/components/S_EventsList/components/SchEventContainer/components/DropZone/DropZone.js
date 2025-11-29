
import React from "react";

import './DropZone.scss';


export const DropZone = ( props ) => {

    let {
        // dragebleReleaseId,
        isEmpty,
        // startTime,
        // durationTime,

    } = props;

    const drag_over = ( e ) => {

        console.dir( e  );

    }




    return (<>
        { isEmpty? (
            <div
                className = { `SEC_DropZone` }
                onDragOver =    { drag_over }
            >

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


        ): '' }
    
    </>

    )

};

