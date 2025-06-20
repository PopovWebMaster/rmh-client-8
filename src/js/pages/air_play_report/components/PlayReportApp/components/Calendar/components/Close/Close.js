// Close


import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './Close.scss';


const CloseComponent = ( props ) => {

    let {
        setCalendarIsOpen,
    } = props;


    
    return (
        <div className = 'PR_Calendar_Close'>
            <span
                onClick = { () => { setCalendarIsOpen( false ) } }
            >×</span>
        </div>


    )

};

export function Close( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CloseComponent
            { ...props }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( val ) => { dispatch( setCalendarIsOpen( val ) ) } }

        />
    );


}
