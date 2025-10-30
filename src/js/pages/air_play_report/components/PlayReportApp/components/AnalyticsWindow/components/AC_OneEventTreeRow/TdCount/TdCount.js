// TdCount

// TdIsPremiere

import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';

import './TdCount.scss';

import { set_evenstTree_changes_to_store } from './../../../vendors/set_evenstTree_changes_to_store.js';

const TdCountComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,
        count,
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
                        count: val
                    }
                });
            }
        };
        
    }

    
    return (
        <td className = { `TdCount ${isUsed? 'isUsed': ''}` }>
            <input
                type = 'number'
                value = { count }
                onChange = { change }
            />
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
