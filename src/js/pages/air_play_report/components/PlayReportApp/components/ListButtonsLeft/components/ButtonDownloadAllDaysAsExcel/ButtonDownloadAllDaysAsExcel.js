// ButtonDownloadAllDaysAsExcel


import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ButtonDownloadAllDaysAsExcel.scss';

import { ButtonLeft } from './../ButtonLeft/ButtonLeft.js';

// import { get_content_as_table_from_list } from './../../../../vendors/get_content_as_table_from_list.js';

import { ExcelPlayReportClass } from './../../../../../../../../classes/ExcelPlayReportClass.js';


const ButtonDownloadAllDaysAsExcelComponent = ( props ) => {

    let {
        filteredList,
        entireList,

        playReport,
    } = props;

    const click = () => {


        let ExcelPlayReport = new ExcelPlayReportClass();
        ExcelPlayReport.AddList( entireList );

        ExcelPlayReport.Download();

    };

    
    return (
        <div className = 'PRL_ButtonDownloadAllDaysAsExcel'>
            
            <ButtonLeft 
                icon = 'icon-download-alt'
                text = { <>Скачать Excel <span className = 'PRL_ButtonLeft_textSecond'>ВСЕ ДНИ</span></> }
                click = { click }
            />
        </div>
    )

};

export function ButtonDownloadAllDaysAsExcel( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonDownloadAllDaysAsExcelComponent
            { ...props }
            filteredList = { playReport.filteredList }
            playReport = { playReport }
            entireList = { playReport.entireList }


            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

