
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './DateItem.scss';

const DateItemComponent = ( props ) => {

    let {
        date
    } = props;


    
    return (
        <div className = 'PRL_ItemMovie2_date'>
            <span>{ date.YYYY_MM_DD }</span>
        </div> 

    )

};

export function DateItem( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DateItemComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
