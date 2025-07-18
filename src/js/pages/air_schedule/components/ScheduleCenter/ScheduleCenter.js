// ScheduleCenter


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleCenter.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const ScheduleCenterComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'scheduleCenter'>

            { children }
            
        </div>
    )

};


export function ScheduleCenter( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleCenterComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
