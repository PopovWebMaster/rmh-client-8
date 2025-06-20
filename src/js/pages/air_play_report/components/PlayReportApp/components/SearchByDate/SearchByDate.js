
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './SearchByDate.scss';


const SearchByDateComponent = ( props ) => {

    let {
        searchValue,
        calendarIsOpen,
        setCalendarIsOpen,
    } = props;
    
    return (
        // <>{ searchValue === ''? (
            <div 
                className = 'PR_SearchByDate'
                onClick = { () => { setCalendarIsOpen( !calendarIsOpen ) } }
            >
                <span className = 'fa-calendar'></span>

            </div>
        // ): '' }</>


    )

};

export function SearchByDate( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchByDateComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
