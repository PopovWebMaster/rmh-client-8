
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleRight.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const ScheduleRightComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div
            className = 'scheduleRight'
            style={{display: 'none'}}
        >
           { children }
           
        </div>
        
    )

};


export function ScheduleRight( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleRightComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
