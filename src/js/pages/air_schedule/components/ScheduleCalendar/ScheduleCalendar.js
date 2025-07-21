
import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleCalendar.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { CalendarButton } from './components/CalendarButton/CalendarButton.js';
import { DropDownTable } from './components/DropDownTable/DropDownTable.js';
import { CurrentDay } from './components/CurrentDay/CurrentDay.js';
import { CurrentDate } from './components/CurrentDate/CurrentDate.js';



const ScheduleCalendarComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    return (
        <div className = 'scheduleCalendar'>

            <CalendarButton 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

            <CurrentDate setIsOpen = { setIsOpen } />
            <CurrentDay setIsOpen = { setIsOpen } />

            <DropDownTable
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

            
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
