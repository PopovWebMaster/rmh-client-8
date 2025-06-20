

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './SSW_ListItemEmpty.scss';


const SSW_ListItemEmptyComponent = ( props ) => {

    let {
        item,
    } = props;

    let {
        startTime,
        duration,

    } = item;

    const trimTime = ( str ) => {
        let arr = str.split( '.' );
        return arr[ 0 ];
    };


    return (
        <div className = 'SSW_ListItemEmpty'>

            <div className = 'SSL_itemEmpty_time'>
                <input 
                    type = 'text'
                    value = { trimTime( startTime.time ) }
                    onChange = { () => {}}
                />
            </div>

            <div className = 'SSL_itemEmpty_file'>
                <span>Нет эфира</span>
            </div>

            <div className = 'SSL_itemEmpty_duration'>
                <input 
                    type = 'text'
                    value = { trimTime( duration.time ) }
                    onChange = { () => {}}
                />
                <input 
                    type = 'text'
                    value = { `${Math.round( duration.ms/1000 )} sec` }
                    onChange = { () => {}}
                />
            </div>



           
        </div>

    )

};

export function SSW_ListItemEmpty( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <SSW_ListItemEmptyComponent
            { ...props }
            processedListOfLogsMain = { logsForwardTA.processedListOfLogsMain }
            processedListOfLogsBackup = { logsForwardTA.processedListOfLogsBackup }

            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
