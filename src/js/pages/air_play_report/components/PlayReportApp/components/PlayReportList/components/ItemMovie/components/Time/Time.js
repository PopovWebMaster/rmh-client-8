
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../../../redux/playReportSlice.js';

import './Time.scss';


const TimeComponent = ( props ) => {

    let {
        startTime,
        date,

    } = props;

    const trim_ms = ( str ) => {
        let arr = str.split('.');
        return arr[0];

    }
    
    return (
        <div className = 'PRL_ItemMovie_Time'>
            <input 
                type = 'text'
                value = { trim_ms( startTime.time ) }
                onChange = { () => {} }
            />
            
            <h2>{ date.localeString }</h2>
            
            

        </div> 

    )

};

export function Time( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <TimeComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
