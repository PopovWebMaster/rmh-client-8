
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './AC_CurrentDay.scss';

import { get_full_day_info_from_day_seconds } from './../../../../../../../../helpers/get_full_day_info_from_day_seconds.js';
import { MOUNTH_NAME } from './../../../../../../../../config/mounth.js';





const AC_CurrentDayComponent = ( props ) => {

    let {
        playReport,
        dateListSelected,
    } = props;

    

    const get_value = ( YYYY_MM_DD ) => {
        let date_obj = new Date( YYYY_MM_DD );
        let seconds = Math.floor( date_obj.getTime() / 1000 );

        let {
            year,
            mounth,
            date,
            dayName,

        } = get_full_day_info_from_day_seconds( seconds );

        return `${ date } ${MOUNTH_NAME[ mounth ]} ${ year }     ${dayName}`;
    }



    
    return (

        <div className = 'AC_CurrentDay'>

            <span>{ get_value( dateListSelected ) }</span>

        </div>

    )

};

export function AC_CurrentDay( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <AC_CurrentDayComponent
            { ...props }
            playReport = { playReport }
            dateListSelected = { playReport.dateListSelected }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
