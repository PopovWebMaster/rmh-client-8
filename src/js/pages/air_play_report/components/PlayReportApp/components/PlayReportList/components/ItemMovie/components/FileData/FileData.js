// FileData


import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../../../redux/playReportSlice.js';

import './FileData.scss';


const FileDataComponent = ( props ) => {

    let {

        file

    } = props;
    
    return (
        <div className = 'PRL_ItemMovie_FileData'>
            <input 
                type = 'text'
                value = { file.name }
                onChange = { () => {}}
            />
            <input 
                type = 'text'
                value = { file.puth  }
                onChange = { () => {}}
            />
            

        </div> 

    )

};

export function FileData( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <FileDataComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
