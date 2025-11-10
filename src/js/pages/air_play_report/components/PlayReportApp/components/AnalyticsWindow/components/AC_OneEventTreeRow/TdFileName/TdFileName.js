
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdFileName.scss';

import { set_evenstTree_changes_to_store } from './../../../vendors/set_evenstTree_changes_to_store.js';

const TdFileNameComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        fileName,

        isUsed,


    } = props;

    const chack = ( e ) => {
        set_evenstTree_changes_to_store({
            category_id,
            event_id,
            fileName,
            changeObject: {
                isUsed: !isUsed
            }
        });
    };



    
    return (
        <td className = 'TdFileName'>
            <div>
                <input
                    type =      'checkbox'
                    value =     { true }
                    checked =   { isUsed }
                    onChange =  { chack }
                />
                <input
                    type =      'text'
                    className = { `TdFileName_inp ${isUsed? 'isUsed': ''}` }
                    value =     { fileName }
                    onChange =  { () => {} }

                />
            </div>

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
