// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdCount.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdCountComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,
        count


    } = props;

    
    return (
        <td className = 'TdCount'>
            
            <span>{ count }</span>
        </td>
    )

};

export function TdCount( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdCountComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
