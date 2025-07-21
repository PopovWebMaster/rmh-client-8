
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CalendarButton.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const CalendarButtonComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
    } = props;

    return (
        <div
            className = 'calendarButton'
            onClick = { () => { setIsOpen( true ) } }
        >
            <span 
                className = 'fa-calendar'
                
            ></span>
  
        </div>
    )

};


export function CalendarButton( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <CalendarButtonComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
