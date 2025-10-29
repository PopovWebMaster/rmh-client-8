// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdIsPremiere.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdIsPremiereComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,
        isPremiere


    } = props;

    let [ chackValue, setChackValue ] = useState( false );


    const chack = ( e ) => {
        console.dir({
            category_id,
            event_id,
            fileName,
            isPremiere,
        });
    };



    
    return (
        <td 
            className = 'TdIsPremiere'
            onClick = { chack }
        >
            
            <span>Премьера</span>
        </td>
    )

};

export function TdIsPremiere( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <TdIsPremiereComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
