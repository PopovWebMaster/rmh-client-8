
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MonthBtn.scss';

import { selectorData as scheduleResultSlise, setCalendarMonth, setCalendarYear, setMonthCalendar } from './../../../../../../../../redux/scheduleResultSlise.js';


import { MOUNTH_NAME } from './../../../../../../../../config/mounth.js';


const MonthBtnComponent = ( props ) => {

    let {
        calendarMonth,
        calendarYear,
        setCalendarMonth,
        setCalendarYear,
        setMonthCalendar,

    } = props;

    const click_preview = () => {

        let next_month = 0;
        let next_year = 0;

        if( calendarMonth > 0 ){
            next_year = calendarYear;
            next_month = calendarMonth - 1;
        }else{
            next_year = calendarYear - 1;
            next_month = 11;
        };

        setCalendarYear( next_year );
        setCalendarMonth( next_month );
        setMonthCalendar( { 
            year: next_year,
            month: next_month
        } );

    };

    const click_next = () => {
        let next_month = 0;
        let next_year = 0;

        if( calendarMonth < 11 ){
            next_year = calendarYear;
            next_month = calendarMonth + 1;
        }else{
            next_year = calendarYear + 1;
            next_month = 0;
        };
        setCalendarYear( next_year );
        setCalendarMonth( next_month );
        setMonthCalendar( { 
            year: next_year,
            month: next_month
        } );
    };




    return (
        <div className = 'dropDownTable_monthBtn'>
            <div className = 'monthBtn_wrap'>
                <span className = 'DDT_M_year'>{ calendarYear }</span>
                <span className = 'DDT_M_month'>{ MOUNTH_NAME[ calendarMonth ] }</span>

                <span 
                    onClick = { click_preview }
                    className = 'DDT_M_btn'
                >
                    <span className = 'icon-angle-left'></span>
                </span>

                <span className = 'DDT_M_btn'
                    onClick = { click_next }
                >
                    <span className = 'icon-angle-right'></span>
                </span>
            </div>
        </div>

    )

};


export function MonthBtn( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <MonthBtnComponent
            { ...props }

            calendarMonth = { scheduleResult.calendarMonth }
            calendarYear = { scheduleResult.calendarYear }


            setCalendarMonth = { ( val ) => { dispatch( setCalendarMonth( val ) ) } }
            setCalendarYear = { ( val ) => { dispatch( setCalendarYear( val ) ) } }
            setMonthCalendar = { ( obj ) => { dispatch( setMonthCalendar( obj ) ) } }



            

        />
    );


}
