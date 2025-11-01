// TdDurationSec

// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';

import './TdDurationTime.scss';

import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js'


const TdDurationTimeComponent = ( props ) => {

    let {

        duration,
        isUsed,

    } = props;

    
    return (
        <td className = { `TdDurationTime ${isUsed? 'isUsed': ''}` }>

            <input
                type = 'text'
                value = { convert_sec_to_time( duration ) }
                onChange = { () => {} }
            />
        
        </td>
    )

};

export function TdDurationTime( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdDurationTimeComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
