
import React, {useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise, setSelectedServerForReport } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './SelectServerForReport.scss';

import { SSWHeaderButton } from './../SSWHeaderButton/SSWHeaderButton.js';

const SelectServerForReportComponent = ( props ) => {

    let {

        server,

        processedListOfLogsMain,
        processedListOfLogsBackup,

        selectedServerForReport,
        setSelectedServerForReport,

    } = props;

    useEffect( () => {
        let main_is_full = processedListOfLogsMain.length > 0? true: false;
        let backup_is_full = processedListOfLogsBackup.length > 0? true: false;

        if( server === 'main' ){
            if( main_is_full === true && backup_is_full === false ){
                setSelectedServerForReport( server )
            };
        }else if( server === 'backup' ){
            if( main_is_full === false && backup_is_full === true ){
                setSelectedServerForReport( server )
            };
        };
    }, [
        processedListOfLogsMain,
        processedListOfLogsBackup,
    ] );


    return (

        <SSWHeaderButton
            isActive =      { selectedServerForReport === server }
            clickHandler =  { () => { setSelectedServerForReport( server ) } }
            title =         { 'Основной' }
            server =        { server }
            className =     'selectedServerForReport'
        >

        </SSWHeaderButton>
    )

};

export function SelectServerForReport( props ){
    const logsForwardTA = useSelector( logsForwardTASlise );
    const dispatch = useDispatch();

    return (
        <SelectServerForReportComponent
            { ...props }

            selectedServerForReport = { logsForwardTA.selectedServerForReport }
            processedListOfLogsMain = { logsForwardTA.processedListOfLogsMain }
            processedListOfLogsBackup = { logsForwardTA.processedListOfLogsBackup }


            setSelectedServerForReport = { ( val ) => { dispatch( setSelectedServerForReport( val ) ) } }

        />
    );


}
