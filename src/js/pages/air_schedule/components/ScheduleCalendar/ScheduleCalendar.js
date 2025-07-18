
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleCalendar.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';



const ScheduleCalendarComponent = ( props ) => {

    let {

    } = props;

    return (
        <div className = 'scheduleCalendar'>
            
        </div>
    )

};


export function ScheduleCalendar( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleCalendarComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
