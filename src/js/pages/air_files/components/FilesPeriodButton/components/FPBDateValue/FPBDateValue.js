
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';

// import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './FPBDateValue.scss';



const FPBDateValueComponent = ( props ) => {

    let {
        value,
    } = props;

        console.dir( value );
    
    return (
        <div className = 'FPBDateValue'>

            { value === null? (
                <span className = 'FPBDateValue_item'>---- -- --</span>
            ): ( 
                <span className = 'FPBDateValue_item'>2025.10.21</span>
            )}



        </div>
    )

};

export function FPBDateValue( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <FPBDateValueComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
