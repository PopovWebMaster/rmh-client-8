
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ButtonDownloadDayAsExcel.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';

// import { get_content_as_table_from_list } from './../../../../vendors/get_content_as_table_from_list.js';

import { ExcelPlayReportClass } from './../../../../../../../../classes/ExcelPlayReportClass.js';


const ButtonDownloadDayAsExcelComponent = ( props ) => {

    let {
        filteredList,
        entireList,
    } = props;

    const click = () => {

        let ExcelPlayReport = new ExcelPlayReportClass();
        ExcelPlayReport.AddList( filteredList );

        ExcelPlayReport.Download();

    };

    
    return (
        <div className = 'PRL_ButtonDownloadDayAsExcel'>
            
            <ButtonLeft 
                icon = 'icon-download-alt'
                text = { <>Скачать Excel <span className = 'PRL_ButtonLeft_textSecond'>ЭТОТ ДЕНЬ</span></> }
                click = { click }
            />
        </div>
    )

};

export function ButtonDownloadDayAsExcel( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonDownloadDayAsExcelComponent
            { ...props }
            filteredList = { playReport.filteredList }
            playReport = { playReport }
            entireList = { playReport.entireList }


            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

