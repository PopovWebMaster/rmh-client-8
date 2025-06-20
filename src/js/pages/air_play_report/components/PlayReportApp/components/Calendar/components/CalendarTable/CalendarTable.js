
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './CalendarTable.scss';

import { get_one_day_entire_list_from_server } from './../../../../vendors/get_one_day_entire_list_from_server.js';

const CalendarTableComponent = ( props ) => {

    let {
        monthCalendar,
        year,
        month,

        // setEntireList,
        // setSpinnerIsActive,
        setCalendarIsOpen,


    } = props;

    const click = ( item ) => {
        // setEntireList([]);

        if( item.file === true ){
            // setSpinnerIsActive( true );
            get_one_day_entire_list_from_server({
                // year,
                // date: String( item.date ).padStart( 2, '0' ),
                // month: String( month ).padStart( 2, '0' ),
                date_string: `${year}-${String( month ).padStart( 2, '0' )}-${String( item.date ).padStart( 2, '0' )}`,
                callback: ( resp ) => {

                    if( resp.ok ){
                        // setEntireList( resp.list );
                        setCalendarIsOpen( false );
                    };

                    // setSpinnerIsActive( false );

                    // console.dir( 'get_one_day_entire_list_from_server' );
                    // console.dir( resp );


                }
            });
        };

       

    }

    const create_tr = ( week, list ) => {

        let arr = [];
        for( let i = week * 7; i < ( week * 7 ) + 7; i++ ){
            arr.push( list[ i ] );
        };

        if( arr[0] === undefined ){
            return '';
        }else{

            let td = arr.map( ( item, index) => {
                let date = '';
                let className = '';
                if( item !== undefined ){
                    date = item.date;
                    className = item.file? 'isActive': '';
                };
                return ( 
                    <td
                        key = { index }
                        className = { className }
                        onClick = { () => { click( item ) } }
                    >{ date }</td>
                );
            } );

            return <tr>{ td }</tr>
        }

    }



    
    return (
        <div className = 'PR_Calendar_Table'>
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

export function CalendarTable( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CalendarTableComponent
            { ...props }
            monthCalendar = { playReport.monthCalendar }
            year = { playReport.year }
            month = { playReport.month }

            // setEntireList = { ( val ) => { dispatch( setEntireList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setCalendarIsOpen = { ( val ) => { dispatch( setCalendarIsOpen( val ) ) } }


            


            

        />
    );


}
