
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as layoutSlice } from './../../../../../../../redux/layoutSlice.js';

const ItemPrefixComponent = ( props ) => {

    let {
        prefix,
        setPrefix,
    } = props;

    const changePrefix = ( e ) => {
        let val = e.target.value;
        setPrefix( val );
    }


    return (
        <div className =  'LCACC_item'>
            <h3>Префикс:</h3>
            <input 
                type =      'text'
                className = 'LCACC_input_text'
                maxLength = '255'
                value =     { prefix }
                onChange =  { changePrefix }
            />
        </div>
    )

};

export function ItemPrefix( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ItemPrefixComponent
            { ...props }


        />
    );


}
