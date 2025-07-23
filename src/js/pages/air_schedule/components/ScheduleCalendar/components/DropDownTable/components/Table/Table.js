// Table


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Table.scss';

import {
    selectorData as scheduleResultSlise,
    setCalendarMonth,
    setCalendarYear,
    setCurrentMonth,
    setCurrentYear,
    setCurrentDate,
    setCurrentDayNum,
} from './../../../../../../../../redux/scheduleResultSlise.js';

const TableComponent = ( props ) => {

    let {
        setIsOpen,

        calendarMonth,
        calendarYear,
        currentMonth,
        currentYear,
        monthCalendar,
        currentDate,
        setCalendarMonth,
        setCalendarYear,
        setCurrentDate,
        setCurrentMonth,
        setCurrentYear,
        setCurrentDayNum,

    } = props;

    const click = ( date, day ) => {
        setCurrentDate( date );
        setCurrentMonth( calendarMonth );
        setCurrentYear( calendarYear );
        setIsOpen( false );


        // if( day === 7 ){
        //     setCurrentDayNum( 0 );
        // }else{
            setCurrentDayNum( day - 1 );
        // };
    }


    const create_tr = ( week, list ) => {

        let monthAndYearIsActive = calendarMonth === currentMonth && calendarYear === currentYear;

        let arr = [];
        for( let i = week * 7; i < ( week * 7 ) + 7; i++ ){
            arr.push( list[ i ] );
        };

        if( arr[0] === undefined ){
            return '';
        }else{
            let td = arr.map( ( item, index) => {
                let date = '';
                let day = '';
                let className = '';
                if( item !== undefined ){
                    date = item.date;
                    day = item.day;

                    className = monthAndYearIsActive && currentDate === date? 'isSelected': '';
                };
                return ( 
                    <td
                        key = { index }
                        className = { className }
                        onClick = { () => { click( date, day ) } }
                    >{ date }</td>
                );
            } );

            return <tr>{ td }</tr>
        }

    }




    return (
        <div className = 'dropDownTable_Table'>
            <table>
                <thead>
                    <tr>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                    </tr>
                </thead>

                <tbody>
                    { create_tr( 0, monthCalendar ) }
                    { create_tr( 1, monthCalendar ) }
                    { create_tr( 2, monthCalendar ) }
                    { create_tr( 3, monthCalendar ) }
                    { create_tr( 4, monthCalendar ) }
                    { create_tr( 5, monthCalendar ) }

                </tbody>
            </table>
        </div>

    )

};


export function Table( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <TableComponent
            { ...props }

            calendarMonth = { scheduleResult.calendarMonth }
            calendarYear = { scheduleResult.calendarYear }
            monthCalendar = { scheduleResult.monthCalendar }
            currentMonth = { scheduleResult.currentMonth }
            currentYear = { scheduleResult.currentYear }
            currentDate = { scheduleResult.currentDate }




            setCalendarMonth = { ( val ) => { dispatch( setCalendarMonth( val ) ) } }
            setCalendarYear = { ( val ) => { dispatch( setCalendarYear( val ) ) } }
            setCurrentDate = { ( val ) => { dispatch( setCurrentDate( val ) ) } }
            setCurrentMonth = { ( val ) => { dispatch( setCurrentMonth( val ) ) } }
            setCurrentYear = { ( val ) => { dispatch( setCurrentYear( val ) ) } }
            setCurrentDayNum = { ( val ) => { dispatch( setCurrentDayNum( val ) ) } }
            



            

        />
    );


}
