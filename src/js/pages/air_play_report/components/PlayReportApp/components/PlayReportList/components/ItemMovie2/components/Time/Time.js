
import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './Time.scss';

const TimeComponent = ( props ) => {

    let {
        startTime
    } = props;

    let arr = startTime.time.split('.');
    let arr_2 = arr[0].split(':');
    let hour = arr_2[0];
    let minutes = arr_2[1];
    let seconds = arr_2[2];

    
    return (
        <div className = 'PRL_ItemMovie2_Time'>
            <div className = 'PRL_ItemMovie2_Time_wrap'>
                <input 
                    className = 'PRL_hours_minutes'
                    type = 'text'
                    value = { `${hour}:${minutes}` }
                    onChange = { () => {} }
                />
                <input 
                    className = 'PRL_seconds'
                    type = 'text'
                    value = { `:${seconds}`}
                    onChange = { () => {} }
            />
            </div>
            
            <input 
                className = 'PRL_forFocus'
                type = 'text'
                value = { `${hour}:${minutes}:${seconds}`}
                onChange = { () => {} }
            />
            
        </div> 

    )

};

export function Time( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <TimeComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
