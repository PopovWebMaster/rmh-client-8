

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../redux/logsForwardTASlise.js';

import './FileDate.scss';

const FileDateComponent = ( props ) => {

    let {
        serverName,

        logFileDateMain,
        logFileDateBackup,

    } = props;

    let [ localeString, setLocaleString ] = useState( '' );

    let [ isError, serIsError ] = useState( false );

    useEffect( () => {

        if( serverName === 'main' ){
            if( logFileDateMain ){
                setLocaleString( logFileDateMain.localeString? logFileDateMain.localeString: '' );
            }else{
                setLocaleString( '' );
            };
        }else if( serverName === 'backup' ){

            if( logFileDateBackup ){
                setLocaleString( logFileDateBackup.localeString? logFileDateBackup.localeString: '' );
            }else{
                setLocaleString( '' );
            };

            if( logFileDateMain ){
                if( logFileDateBackup ){

                    // console.dir( logFileDateBackup.localeString );
                    // console.dir( logFileDateBackup.localeString );

                    if( logFileDateMain.localeString !== logFileDateBackup.localeString ){
                        serIsError( true );
                    }else{
                        serIsError( false );
                    };
                }else{
                    serIsError( false );
                };
            }else{
                serIsError( false );
            };



        };




    }, [
        logFileDateMain,
        logFileDateBackup,

    ] );


    return (
        <div className = 'FTA_FileDate' >
            <span className = 'dateStr'>{ localeString }</span>
            <span className = { `serverName ${isError? 'errorSignal': ''}` }>{ serverName }</span>
        </div>
    )

};

export function FileDate( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <FileDateComponent
            { ...props }
            logFileDateMain = { logsForwardTA.logFileDateMain }
            logFileDateBackup = { logsForwardTA.logFileDateBackup }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
