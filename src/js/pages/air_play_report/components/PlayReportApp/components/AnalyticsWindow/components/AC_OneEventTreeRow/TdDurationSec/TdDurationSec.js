// TdDurationSec

// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdDurationSec.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { set_evenstTree_changes_to_store } from './../../../vendors/set_evenstTree_changes_to_store.js';

const TdDurationSecComponent = ( props ) => {

    let {

        category_id,
        event_id,
        fileName,

        duration,
        isUsed,

    } = props;

    const change =  ( e ) => {
        if( isUsed ){
            let val = Number( e.target.value );
            if( val >= 0 ){
                set_evenstTree_changes_to_store({
                    category_id,
                    event_id,
                    fileName,
                    changeObject: {
                        duration: val
                    }
                });
            }
        };
        
    }

    
    return (
        <td className = { `TdDurationSec ${isUsed? 'isUsed': ''}` }>

            <input
                // type = 'text'
                type =      'number'
                onChange =  { change }
                value = { duration }
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
