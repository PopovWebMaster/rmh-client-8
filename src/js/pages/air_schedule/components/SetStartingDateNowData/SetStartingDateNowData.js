
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './SetStartingDateNowData.scss';

import { 
    selectorData as scheduleResultSlise,
    setCalendarYear,
    setCalendarMonth,
    setCalendarDate,

    setCurrentDate,
    setCurrentDayNum,
    setCurrentMonth,
    setCurrentYear,
    setMonthCalendar,

} from './../../../../redux/scheduleResultSlise.js';

import { get_full_day_info_from_day_seconds } from './../../../../helpers/get_full_day_info_from_day_seconds.js';


const SetStartingDateNowDataComponent = ( props ) => {

    let {
        children,
        setCalendarYear,
        setCalendarMonth,
        setCalendarDate,
        setCurrentDate,
        setCurrentDayNum,
        setCurrentMonth,
        setCurrentYear,
        setMonthCalendar

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        let dateObj = new Date();
        let now_seconds = dateObj.getTime() / 1000;
        let {
            date,
            dayNum,
            // mounth,
            month,
            year,

        } = get_full_day_info_from_day_seconds( now_seconds );

        setCalendarYear( year );
        setCalendarMonth( month );
        setCalendarDate( date );
        setCurrentDate( date );
        setCurrentDayNum( dayNum );
        setCurrentMonth( month );
        setCurrentYear( year );
        setMonthCalendar( { year, month } );

        setIsReady( true );



    }, [] );



    return (
        <>{ isReady? children: '' }</>
    )

};


export function SetStartingDateNowData( props ){

    const company = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <SetStartingDateNowDataComponent
            { ...props }

            setCalendarMonth = { ( val ) => { dispatch( setCalendarMonth( val ) ) } }
            setCalendarYear = { ( val ) => { dispatch( setCalendarYear( val ) ) } }

            setCalendarDate = { ( val ) => { dispatch( setCalendarDate( val ) ) } }
            setCurrentDate = { ( val ) => { dispatch( setCurrentDate( val ) ) } }
            setCurrentDayNum = { ( val ) => { dispatch( setCurrentDayNum( val ) ) } }
            setCurrentMonth = { ( val ) => { dispatch( setCurrentMonth( val ) ) } }
            setCurrentYear = { ( val ) => { dispatch( setCurrentYear( val ) ) } }
            setMonthCalendar = { ( obj ) => { dispatch( setMonthCalendar( obj ) ) } }




            

        />
    );


}
