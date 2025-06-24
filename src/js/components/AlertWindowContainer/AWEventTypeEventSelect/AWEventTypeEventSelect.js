// AWEventTypeEventSelect


import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWEventTypeEventSelect.scss';

import { EVENT_TYPE } from './../../../config/layout.js';

const AWEventTypeEventSelectComponent = ( props ) => {

    let {
        value,
        changeHandler,

    } = props;

    return (
        <div className = 'AW_item AWEventTypeEventSelect'>
            <h3>Тип:</h3>
            <div className = 'AW_item_type'>

                <span 
                    className = { value === EVENT_TYPE.FILE? 'isActive': 'noActive' }
                    onClick = { () => { changeHandler( EVENT_TYPE.FILE ) } }
                >Файл</span>

                <span 
                    className = { value === EVENT_TYPE.BLOCK? 'isActive': 'noActive' }
                    onClick = { () => { changeHandler( EVENT_TYPE.BLOCK ) } }
                >Блок</span>

            </div>
        </div>
    )

};

export function AWEventTypeEventSelect( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWEventTypeEventSelectComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
