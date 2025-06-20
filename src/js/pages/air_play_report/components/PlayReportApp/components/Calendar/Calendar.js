
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './Calendar.scss';

import { Close } from './components/Close/Close.js';
import { Month } from './components/Month/Month.js';
import { CalendarTable } from './components/CalendarTable/CalendarTable.js';


const CalendarComponent = ( props ) => {

    let {
        calendarIsOpen,
    } = props;


    
    return (
        <>{ calendarIsOpen? (
            <div className = 'PR_Calendar'>
                <Close />
                <Month />

                <CalendarTable />

                
                
            </div>
        ): '' }</>


    )

};

export function Calendar( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CalendarComponent
            { ...props }
            calendarIsOpen = { playReport.calendarIsOpen }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
