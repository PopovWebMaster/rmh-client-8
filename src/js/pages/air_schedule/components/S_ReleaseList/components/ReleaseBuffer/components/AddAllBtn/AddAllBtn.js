
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddAllBtn.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { BuffferButtonContainer } from './../BuffferButtonContainer/BuffferButtonContainer.js';

const AddAllBtnComponent = ( props ) => {

    let {

    } = props;

    let [ isActive, setIsActive ] = useState( true );

    const click = () => {
        console.dir( 'Расставить все' );
    }


    return (
        <BuffferButtonContainer 
            isActive =      { isActive }
            title =         'Расставить все'
            clickHandler =  { click }
        />

        
    )

};


export function AddAllBtn( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <AddAllBtnComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
