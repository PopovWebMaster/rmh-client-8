// TopCenterButtonComponent


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TopCenterButtonComponent.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const TopCenterButtonComponentComponent = ( props ) => {

    let {
        icon = false,
        title,
        isActive = true,
        clickHandler,
    } = props;

    const click = () => {
        if( isActive ){
            clickHandler();
        };
    }

    return (
        <div 
            className = { `topCenterButtonComponent ${isActive? 'isActive': ''}` }
            onClick = { click }
        >
            { icon === false? '': (
                <span className = { `${icon} TCBC_icon` }></span>
            ) }
            <span className = 'TCBC_title'>{title}</span>
            
        </div>
    )

};


export function TopCenterButtonComponent( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <TopCenterButtonComponentComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
