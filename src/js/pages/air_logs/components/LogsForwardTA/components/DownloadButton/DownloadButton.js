
import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import {
    setProcessedListOfLogsMain,
    setProcessedListOfLogsBackup,
    setLogFileDateMain,
    setLogFileDateBackup,
    setLogFileDurationMain,
    setLogFileDurationBackup,
} from './../../../../../../redux/logsForwardTASlise.js';


import './DownloadButton.scss';

import { read_log_file } from './vendors/read_log_file.js';
import { LogListClass } from './classes/LogListClass.js';

const DownloadButtonComponent = ( props ) => {

    let {
        serverName, // main backup
        setProcessedListOfLogsMain,
        setProcessedListOfLogsBackup,
        setLogFileDateMain,
        setLogFileDateBackup,
        setLogFileDurationMain,
        setLogFileDurationBackup,
    } = props;

    const inputRef = useRef();

    const click = () => {

        let accept = [ '.PlayReport' ];
        let input = inputRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();
    };


    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };

        let files = e.target.files;
        let file = files[0];

        read_log_file( file, ( list ) => {

            let LogList = new LogListClass( list );

            if( serverName === 'main' ){
                setProcessedListOfLogsMain( LogList.GetResult() );
                setLogFileDateMain( LogList.GetFileDate() );
                setLogFileDurationMain( LogList.GetFileDurationTime() );

            }else if( serverName === 'backup' ){
                setProcessedListOfLogsBackup( LogList.GetResult() );
                setLogFileDateBackup( LogList.GetFileDate() );
                setLogFileDurationBackup( LogList.GetFileDurationTime() );
            };

        } );

        inputRef.current.value = "";

    }


    
    return (
        <div 
            className = 'FTA_DownloadButton'
            onClick = { click }
        >

            <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }    
            />

            <span className = 'icon fpd-icon-file-upload'></span>
            <span className = 'title'>Загрузить</span>
            <span className = 'extension'>.PlayReport</span>
            { serverName === 'main'? 
                <span className = 'title_second'>Основной</span>: 
                <span className = 'title_second'>Резервный</span> 
            } 
            
            <span className = 'serverName'>{ serverName === 'main'? 'main': 'backup' }</span>

        </div>
    )

};

export function DownloadButton( props ){

    const company = useSelector( companySlice );
    const dispatch = useDispatch();

    return (
        <DownloadButtonComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }

            setProcessedListOfLogsMain = { ( callback ) => { dispatch( setProcessedListOfLogsMain( callback ) ) } }
            setProcessedListOfLogsBackup = { ( callback ) => { dispatch( setProcessedListOfLogsBackup( callback ) ) } }

            setLogFileDateMain = { ( callback ) => { dispatch( setLogFileDateMain( callback ) ) } }
            setLogFileDateBackup = { ( callback ) => { dispatch( setLogFileDateBackup( callback ) ) } }

            setLogFileDurationMain = { ( callback ) => { dispatch( setLogFileDurationMain( callback ) ) } }
            setLogFileDurationBackup = { ( callback ) => { dispatch( setLogFileDurationBackup( callback ) ) } }





        />
    );


}
