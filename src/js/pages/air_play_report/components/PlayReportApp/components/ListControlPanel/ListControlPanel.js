
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ListControlPanel.scss';

import { Backligth } from './components/Backligth/Backligth.js';
  
const ListControlPanelComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PR_ListControlPanel'>
            <Backligth />
        </div>


    )

};

export function ListControlPanel( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ListControlPanelComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
