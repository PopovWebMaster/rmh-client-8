
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';

import './AWInputText.scss';

const AWInputTextComponent = ( props ) => {

    let {
        title,
        value,
        onChange,

        max = 255,
        min = 0,
        placeholder = '',

    } = props;


    return (
        <div className = 'AW_item AWInputText'>
            <h3>{ title }</h3>
            <input 
                type =      'text'
                className = 'AW_input_text'
                maxLength = { max }
                minLength = { min }
                value =     { value }
                onChange =  { onChange }
                placeholder = { placeholder }
            />
        </div>
    )

};

export function AWInputText( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <AWInputTextComponent
            { ...props }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
