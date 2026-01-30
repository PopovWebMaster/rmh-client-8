// AWTextarea


import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWTextarea.scss';

const AWTextareaComponent = ( props ) => {

    let {
        title,
        value,
        onChange,

        max = 255,
        min = 0,
        placeholder = '',
        enterHandler = () => {}

    } = props;

    let enter = ( e ) => {
        if( e.which === 13 ){
            enterHandler();
        };
    }


    return (
        <div
            className = 'AW_item AWTextarea'
        >
            <h3>{ title }</h3>
            <textarea 
                className = 'AW_textarea'
                maxLength = { max }
                minLength = { min }
                value =     { value }
                onChange =  { onChange }
                onKeyDown = { enter }
                placeholder = { placeholder }
            />
        </div>
    )

};

export function AWTextarea( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWTextareaComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
