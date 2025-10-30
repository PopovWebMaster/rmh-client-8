// TdDurationSec

// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdDurationSec.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdDurationSecComponent = ( props ) => {

    let {

        duration,
        isUsed,

    } = props;

    
    return (
        <td className = { `TdDurationSec ${isUsed? 'isUsed': ''}` }>

            <input
                type = 'text'
                value = { duration }
                onChange = { () => {} }
            />
        
        </td>
    )

};

export function TdDurationSec( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdDurationSecComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
