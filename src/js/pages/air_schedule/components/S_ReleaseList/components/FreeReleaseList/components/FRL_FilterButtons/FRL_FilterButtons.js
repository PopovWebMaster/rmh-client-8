
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FRL_FilterButtons.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';


const FRL_FilterButtonsComponent = ( props ) => {

    let {

       
    } = props;

    



    



    return (
        <div className = 'FRL_FilterButtons' id = 'FRL_FilterButtons'>

FRL_FilterButtons
           



        </div>
    )

};

export function FRL_FilterButtons( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <FRL_FilterButtonsComponent
            { ...props }

            // releaseList = { scheduleResult.releaseList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}


