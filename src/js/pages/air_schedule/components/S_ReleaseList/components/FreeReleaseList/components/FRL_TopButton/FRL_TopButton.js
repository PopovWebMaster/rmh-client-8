// FRL_TopButton


import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_TopButton.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

const FRL_TopButtonComponent = ( props ) => {

    let {
        title,
        icon = '',
        clickHandler = () => {},
       
    } = props;



    return (

        <div 
            className = 'FRL_TopButton'
            onClick = { clickHandler }
        >
            <span className = { `icon ${icon}` }></span>
            <span className = 'title'>{ title }</span>
        </div>

        
    )

};

export function FRL_TopButton( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_TopButtonComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
