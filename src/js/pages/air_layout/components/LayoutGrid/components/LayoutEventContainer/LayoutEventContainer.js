
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutEventContainer.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { LayoutDragAndDropEvent } from './../LayoutDragAndDropEvent/LayoutDragAndDropEvent.js';
 

const LayoutEventContainerComponent = ( props ) => {

    let {
        children,

        isEmpty =       false,
        isCompleted =   false,

        startTime,
        durationTime,

    } = props;




    return (
        <LayoutDragAndDropEvent>
            { children }
        </LayoutDragAndDropEvent>

    )

};

export function LayoutEventContainer( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <LayoutEventContainerComponent
            { ...props }
            eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
