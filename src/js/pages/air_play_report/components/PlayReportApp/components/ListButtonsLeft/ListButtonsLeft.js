
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ListButtonsLeft.scss';

import { TimeScrollButtons } from './components/TimeScrollButtons/TimeScrollButtons.js';
import { DateListSelect } from './components/DateListSelect/DateListSelect.js';

// import { DownloadAsText } from './components/DownloadAsText/DownloadAsText.js';
// import { DownloadAsExel } from './components/DownloadAsExel/DownloadAsExel.js';
import { DetailDataWindowButton } from './components/DetailDataWindowButton/DetailDataWindowButton.js';

import { ButtonShowDayAsTextForExcel } from './components/ButtonShowDayAsTextForExcel/ButtonShowDayAsTextForExcel.js';
import { ButtonShowAllDaysAsTextForExcel } from './components/ButtonShowAllDaysAsTextForExcel/ButtonShowAllDaysAsTextForExcel.js';
import { ButtonDownloadDayAsExcel } from './components/ButtonDownloadDayAsExcel/ButtonDownloadDayAsExcel.js';
import { ButtonDownloadAllDaysAsExcel } from './components/ButtonDownloadAllDaysAsExcel/ButtonDownloadAllDaysAsExcel.js';

import { ButtonDayAnalytics } from './components/ButtonDayAnalytics/ButtonDayAnalytics.js';

import { ButtonDownloadAsReport } from './components/ButtonDownloadAsReport/ButtonDownloadAsReport.js';
 
const ListButtonsLeftComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'PRL_ListButtonsLeft'>

            <div className = 'PRL_ListButtonsLeft_wrap'>

                <div className = 'PRL_ListButtonsLeft_wrap_row'>
                    
                    <ButtonShowDayAsTextForExcel />
                    <ButtonShowAllDaysAsTextForExcel />
                    <ButtonDownloadDayAsExcel />
                    <ButtonDownloadAllDaysAsExcel />

                    {/* <ButtonDownloadAsReport /> */}

                    

                </div>

                <div className = 'PRL_ListButtonsLeft_wrap_row'>
                    <DetailDataWindowButton />
                    <ButtonDayAnalytics />
                </div>

            </div>

            <DateListSelect />
            <TimeScrollButtons />
        </div>


    )

};

export function ListButtonsLeft( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ListButtonsLeftComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

