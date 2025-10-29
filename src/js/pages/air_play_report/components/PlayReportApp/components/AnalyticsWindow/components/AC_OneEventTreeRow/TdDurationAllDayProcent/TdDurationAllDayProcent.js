// TdDurationAllDayProcent


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdDurationAllDayProcent.scss';

import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js'


const TdDurationAllDayProcentComponent = ( props ) => {

    let {

        procent,


    } = props;

    
    return (
        <td className = 'TdDurationAllDayProcent'>

            <input
                type = 'text'
                value = { `${procent}%` }
                onChange = { () => {} }
            />
        
        </td>
    )

};

export function TdDurationAllDayProcent( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdDurationAllDayProcentComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
