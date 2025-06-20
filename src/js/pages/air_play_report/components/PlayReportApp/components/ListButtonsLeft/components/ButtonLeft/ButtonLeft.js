
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ButtonLeft.scss';


const ButtonLeftComponent = ( props ) => {

    let {
        icon,
        text,
        click

    } = props;
    
    return (
        <div 
            className = 'PRL_ButtonLeft'
            onClick = { click }
        >
            <span className = { `PRL_ButtonLeft_icon ${ icon }` }></span>
            <span className = 'PRL_ButtonLeft_text'>{ text }</span>
        </div>
    )

};

export function ButtonLeft( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ButtonLeftComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

