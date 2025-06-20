
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './TopHeaderPanel.scss';

import { DownloadButton } from './../DownloadButton/DownloadButton.js';
import { FileDate } from './../FileDate/FileDate.js';
import { FileDurations } from './../FileDurations/FileDurations.js';
import { MakePlayReport } from './../MakePlayReport/MakePlayReport.js';
 
const TopHeaderPanelComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <div className = 'FTATopHeaderPanel'>

            <div className = 'FTA_download_buttons'>
                <DownloadButton serverName = 'main'/>
                <DownloadButton serverName = 'backup'/>
            </div>

            <div className = 'FTA_file_dates'>
                <FileDate serverName = 'main' />
                <FileDate serverName = 'backup' />
            </div>

            <div className = 'FTA_file_durations'>
                <FileDurations serverName = 'main' />
                <FileDurations serverName = 'backup' />

            </div>

            <div className = 'FTA_file_others'>
                <MakePlayReport />
            </div>
            


        </div>
    )

};

export function TopHeaderPanel( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <TopHeaderPanelComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
