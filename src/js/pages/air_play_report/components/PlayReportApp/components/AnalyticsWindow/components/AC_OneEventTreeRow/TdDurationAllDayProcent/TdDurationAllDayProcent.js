
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';

import './TdDurationAllDayProcent.scss';

const TdDurationAllDayProcentComponent = ( props ) => {

    let {

        procent,
        isUsed,


    } = props;

    
    return (
        <td className = { `TdDurationAllDayProcent ${isUsed? 'isUsed': ''}` }>

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
