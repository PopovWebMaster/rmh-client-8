
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../redux/logsForwardTASlise.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';


import './MakePlayReport.scss';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { ROUTE } from './../../../../../../config/routes.js';


const MakePlayReportComponent = ( props ) => {

    let {
        selectedServerForReport,
        logFileDateMain,
        logFileDateBackup,
        processedListOfLogsMain,
        processedListOfLogsBackup,

        setSpinnerIsActive,

    } = props;

    let [ isActive, serIsActive] = useState( false );
    let [ localeString, setLocaleString ] = useState( '' );

    useEffect( () => {

        let main_is_full = processedListOfLogsMain.length > 0? true: false;
        let backup_is_full = processedListOfLogsBackup.length > 0? true: false;

        if( selectedServerForReport === 'main' ){
            if( main_is_full ){
                serIsActive( true );
                setLocaleString( logFileDateMain.localeString );
            }else{
                serIsActive( false );
                setLocaleString( '' );
            };

        }else if( selectedServerForReport === 'backup' ){

            if( backup_is_full ){
                serIsActive( true );
                setLocaleString( logFileDateBackup.localeString );
            }else{
                serIsActive( false );
                setLocaleString( '' );
            };
        };

    }, [
        selectedServerForReport,
        logFileDateMain,
        logFileDateBackup,
        processedListOfLogsMain,
        processedListOfLogsBackup,
    ] );

    const click = () => {

        if( selectedServerForReport === 'main' ){
            if( processedListOfLogsMain.length === 0 ){
                return ;
            };
        }else if( selectedServerForReport === 'backup' ){
            if( processedListOfLogsBackup.length === 0 ){
                return ;
            };
        };

        let data = {
            date: '',
            list: []
        };

        if( selectedServerForReport === 'main' ){
            data.date = logFileDateMain.YYYY_MM_DD;
            data.list = processedListOfLogsMain;
        }else if( selectedServerForReport === 'backup' ){
            data.date = logFileDateBackup.YYYY_MM_DD;
            data.list = processedListOfLogsBackup;
        };

        setSpinnerIsActive( true );

        console.dir( data );

        send_request_to_server({
            route: 'add-play-report',
            data,
            successCallback: ( response ) => {
                if( response.ok ){

                }else{
                    console.dir( 'response' );
                    console.dir( response );
                };

                setSpinnerIsActive( false );
            }
        });

    }


    return (
        <>{ isActive? (
            <div 
                className = 'FTA_MakePlayReport'
                onClick = { click }
            >
                <div className = 'dateStr'>
                    <span className = 'title'>Эф.отчёт</span>
                    <span className = 'serverName'>{ selectedServerForReport }</span>
                </div>
                
                <div className = 'fileDate' >
                    <span>{ localeString }</span>
                </div>
                <div className = 'make' >
                    <span>Создать</span>
                </div>
            </div>
        ): '' }</>

    )

};

export function MakePlayReport( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    const dispatch = useDispatch();

    return (
        <MakePlayReportComponent
            { ...props }

            logFileDateMain =           { logsForwardTA.logFileDateMain }
            logFileDateBackup =         { logsForwardTA.logFileDateBackup }
            processedListOfLogsMain =   { logsForwardTA.processedListOfLogsMain }
            processedListOfLogsBackup = { logsForwardTA.processedListOfLogsBackup }
            selectedServerForReport =   { logsForwardTA.selectedServerForReport }

            setSpinnerIsActive = { ( callback ) => { dispatch( setSpinnerIsActive( callback ) ) } }

        />
    );


}
