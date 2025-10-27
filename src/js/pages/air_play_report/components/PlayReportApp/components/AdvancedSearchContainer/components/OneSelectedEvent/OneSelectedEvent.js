
import React, { useRef, useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import './OneSelectedEvent.scss';


const OneSelectedEventComponent = ( props ) => {

    let {
        event_id,
        category_id,
        name,
        style,
        type,
        removeSelectedEvent,


    } = props;



    return (
        <div
            className = 'PR_ASC_OneSelectedEvent'
            
        >
            <span
                className = 'PR_ASC_OneSelectedEvent_title'
                style = { style }
            >{ name }</span>
            <span
                className = 'PR_ASC_OneSelectedEvent_remove icon-cancel-2'
                onClick = { () => { removeSelectedEvent( event_id ) } }
            ></span>

        </div>

    )

};

export function OneSelectedEvent( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <OneSelectedEventComponent
            { ...props }
            // eventListById = { layout.eventListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
