// TdFileName

// TdEvent

// TdCategory

// AC_OneEventTreeRow


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdFileName.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdFileNameComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,


    } = props;

    let [ chackValue, setChackValue ] = useState( false );


    const chack = ( e ) => {
        console.dir({
            category_id,
            event_id,
            fileName,
        });
    };



    
    return (
        <td className = 'TdFileName'>
            <input
                type =      'checkbox'
                value =     { true }
                checked =   { chackValue }
                onChange =  { chack }
            />
            <input
                type =      'text'
                className = 'TdFileName_inp'
                value =     { fileName }
                onChange =  { () => {} }

            />
        </td>
    )

};

export function TdFileName( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdFileNameComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
