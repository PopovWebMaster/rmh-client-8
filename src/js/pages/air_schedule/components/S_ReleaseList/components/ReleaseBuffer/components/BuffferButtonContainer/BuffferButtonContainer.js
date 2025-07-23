// BuffferButtonContainer


import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BuffferButtonContainer.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

const BuffferButtonContainerComponent = ( props ) => {

    let {
        isActive = true,
        title,
        clickHandler,
    } = props;

    const click = () => {
        if( isActive ){
            clickHandler();
        };
    }

   

    return (
       <div 
            className = { `RB_BuffferButtonContainer ${ isActive? 'isActive': '' }` }
            onClick = { click }
        >
            <span>{ title }</span>

       </div>
    )

};


export function BuffferButtonContainer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <BuffferButtonContainerComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
