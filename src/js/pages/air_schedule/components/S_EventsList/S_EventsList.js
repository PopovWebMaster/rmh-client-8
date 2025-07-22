// S_EventsList


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './S_EventsList.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';


const S_EventsListComponent = ( props ) => {

    let {

    } = props;

    return (
       <div className = 'S_EventsList'></div>
    )

};


export function S_EventsList( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <S_EventsListComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
