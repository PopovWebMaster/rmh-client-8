
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../redux/logsForwardTASlise.js';

import './FileDurations.scss';

const FileDurationsComponent = ( props ) => {

    let {
        serverName,

        logFileDurationMain,
        logFileDurationBackup,

    } = props;

    let [ durationTime, setDurationTime ] = useState( '' );

    useEffect( () => {
    
        if( serverName === 'main' ){
            if( logFileDurationMain ){
                setDurationTime( logFileDurationMain.time? logFileDurationMain.time: '' );
            }else{
                setDurationTime( '' );
            };
        }else if( serverName === 'backup' ){

            if( logFileDurationBackup ){
                setDurationTime( logFileDurationBackup.time? logFileDurationBackup.time: '' );
            }else{
                setDurationTime( '' );
            };
        };

    }, [
        logFileDurationMain,
        logFileDurationBackup,

    ] );
    
    return (
        <div className = 'FTA_FileDuration' >
            <span className = 'durationStr'>{ durationTime }</span>
            <span className = 'serverName'>{ serverName }</span>
        </div>
    )

};

export function FileDurations( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <FileDurationsComponent
            { ...props }
            logFileDurationMain = { logsForwardTA.logFileDurationMain }
            logFileDurationBackup = { logsForwardTA.logFileDurationBackup }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
