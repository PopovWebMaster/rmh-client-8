// TimeScrollButtons


import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './TimeScrollButtons.scss';

import { TimeButtons } from './../TimeButtons/TimeButtons.js';

 
const TimeScrollButtonsComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PRL_TimeScrollButtons'>
            <TimeButtons />

        </div>


    )

};

export function TimeScrollButtons( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <TimeScrollButtonsComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

