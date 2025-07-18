// ScheduleBody


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleBody.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const ScheduleBodyComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'scheduleBody'>
            { children }
        </div>
    )

};


export function ScheduleBody( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleBodyComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
