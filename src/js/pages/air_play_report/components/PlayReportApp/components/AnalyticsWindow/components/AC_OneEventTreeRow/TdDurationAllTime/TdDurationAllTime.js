
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdDurationAllTime.scss';

import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js'


const TdDurationAllTimeComponent = ( props ) => {

    let {

        durationAllSec,
        isUsed,

    } = props;

    
    return (
        <td className = { `TdDurationAllTime ${isUsed? 'isUsed': ''}` }>

            <input
                type = 'text'
                value = { convert_sec_to_time( durationAllSec ) }
                onChange = { () => {} }
            />
        
        </td>
    )

};

export function TdDurationAllTime( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdDurationAllTimeComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
