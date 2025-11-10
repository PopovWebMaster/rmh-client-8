
import React, { useRef, useState, useEffect } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';

import './TdIsPremiere.scss';

import { set_evenstTree_changes_to_store } from './../../../vendors/set_evenstTree_changes_to_store.js';

const TdIsPremiereComponent = ( props ) => {

    let {
        category_id,
        event_id,
        fileName,
        isPremiere,
        isUsed,
    } = props;

    const chack = ( e ) => {
        if( isUsed ){
            set_evenstTree_changes_to_store({
                category_id,
                event_id,
                fileName,
                changeObject: {
                    isPremiere: !isPremiere
                }
            });
        }
       
    };

    return (
        <td 
            className = 'TdIsPremiere'
            onClick = { chack }
        >
            <div>
                {
                    isUsed? isPremiere? <span className = 'TdIsPremiere_yes'>Есть</span>: <span className = 'TdIsPremiere_no'>Нет</span>: <span></span>
                } 
            </div>

        
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
