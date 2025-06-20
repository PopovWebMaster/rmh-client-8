// SSW_ListItemMovie


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../../../redux/logsForwardTASlise.js';

import './SSW_ListItemMovie.scss';


const SSW_ListItemMovieComponent = ( props ) => {

    let {
        item,
    } = props;

    let {
        type,
        date,
        startTime,
        fileDuration,
        segmentExpectedDuration,
        segmentRealDuration,
        markIn,
        file,
        timePoint,
        graphics,
    } = item;

    const trimTime = ( str ) => {
        let arr = str.split( '.' );
        return arr[ 0 ];
    };

    const createGraphics = (arr) => {
        let span = arr.map( ( item, index ) => {
            return (<span key = { index }>{ item.file.name }</span>);
        });
        return span;
    }
            

    return (
        <div className = 'SSW_ListItemMovie'>

            <div className = 'SSL_itemMovie_time'>
                <input 
                    type = 'text'
                    value = { trimTime( startTime.time ) }
                    onChange = { () => {}}
                />
            </div>

            <div className = 'SSL_itemMovie_file'>
                <input 
                    type = 'text'
                    value = { file.name }
                    onChange = { () => {}}
                />
                <input 
                    type = 'text'
                    value = { file.puth  }
                    onChange = { () => {}}
                />
            </div>

            <div className = 'SSL_itemMovie_duration'>
                <input 
                    type = 'text'
                    value = { trimTime( segmentRealDuration.time ) }
                    onChange = { () => {}}
                />
                <input 
                    type = 'text'
                    value = { `${Math.round( segmentRealDuration.ms/1000 )} sec` }
                    onChange = { () => {}}
                />
            </div>

            { graphics.length > 0? (
                <div className = 'SSL_itemMovie_graphics'>
                    { createGraphics( graphics ) }
                </div>
            ): '' }





           
        </div>

    )

};

export function SSW_ListItemMovie( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <SSW_ListItemMovieComponent
            { ...props }
            processedListOfLogsMain = { logsForwardTA.processedListOfLogsMain }
            processedListOfLogsBackup = { logsForwardTA.processedListOfLogsBackup }

            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
