
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './Month.scss';

// import { get_days_in_month } from './../../../../../../helpers/get_days_in_month.js';
import { set_calendar_data } from './../../../../vendors/set_calendar_data.js';


const MonthComponent = ( props ) => {

    let {

        year,
        month,
        monthTitle,

        setCalendarIsOpen,

    } = props;



    // const click = () => { 


    //     let date = new Date( '2025-04-06' );
    //     // let date = new Date();

    //     console.dir( date.getDay() );

    // }

    const click_preview = () => {

        let next_month = 0;
        let next_year = 0;

        if( month > 1 ){
            next_year = year;
            next_month = month - 1;
        }else{
            next_year = year - 1;
            next_month = 12;
        };

        set_calendar_data( next_year, next_month );
    };

    const click_next = () => {
        let next_month = 0;
        let next_year = 0;

        if( month < 12 ){
            next_year = year;
            next_month = month + 1;
        }else{
            next_year = year + 1;
            next_month = 1;
        };
        set_calendar_data( next_year, next_month );
    };

    
    return (
        <div className = 'PR_Calendar_Month'>

            <div className = 'PR_Calendar_Month_wrap'>
                <span className = 'PR_CM_year'>{ year }</span>
                <span className = 'PR_CM_month'>{ monthTitle }</span>

                <span 
                    onClick = { click_preview }
                    className = 'PR_CM_btn'
                >
                    <span className = 'icon-angle-left'></span>
                </span>

                <span className = 'PR_CM_btn'
                    onClick = { click_next }
                >
                    <span className = 'icon-angle-right'></span>
                </span>
            </div>


        </div>


    )

};

export function Month( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <MonthComponent
            { ...props }
            year = { playReport.year }
            monthTitle = { playReport.monthTitle }

            month = { playReport.month }

            setCalendarIsOpen = { ( val ) => { dispatch( setCalendarIsOpen( val ) ) } }

        />
    );


}
