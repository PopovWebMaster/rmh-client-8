// Close


import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './Close.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';



const CloseComponent = ( props ) => {

    let {
        setIsOpen,
    } = props;



    return (
        <div className = 'dropDownTable_Close'>
            <span
                onClick = { () => { setIsOpen( false ) } }
            >×</span>
            
        </div>
    )

};


export function Close( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <CloseComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
