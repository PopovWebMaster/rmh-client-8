// TdDurationAllSec

// TdDurationSec

// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdDurationAllSec.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdDurationAllSecComponent = ( props ) => {

    let {

        durationAllSec,


    } = props;

    
    return (
        <td className = 'TdDurationAllSec'>

            <input
                type = 'text'
                value = { durationAllSec }
                onChange = { () => {} }
            />
        
        </td>
    )

};

export function TdDurationAllSec( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdDurationAllSecComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
