
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../../../redux/playReportSlice.js';

import './Duration.scss';


const DurationComponent = ( props ) => {

    let {

        fileDuration,
        segmentRealDuration,
        markIn,

    } = props;

    let hours_2_ms = 7200000;

    const trim_ms = ( str ) => {
        let arr = str.split('.');
        return arr[0];
    }

    const getFileWidth = () => {
        let result = Math.round( fileDuration.ms *100/hours_2_ms );
        if( result > 100 ){
            result = 100;
        };
        return `${result}%`;
    }

    const getSegmentWidth = () => {
        let result = Math.round( segmentRealDuration.ms *100/hours_2_ms );
        if( result > 100 ){
            result = 100;
        };
        return `${result}%`;
    }

    const getLeftWidth = () => {
        let result = Math.round( markIn.ms *100/hours_2_ms );
        if( result > 100 ){
            result = 100;
        };
        return `${result}%`;
    }
    
    return (
        <div className = 'PRL_ItemMovie_Duration'>

            <div className = 'PRL_ItemMovie_Duration_indicator'>

                <div 
                    className = 'PRL_file_len'
                    style = { { width: getFileWidth() } }
                >

                </div>

                <div 
                    className = 'PRL_segment_len'
                    style = { { 
                        width: getSegmentWidth(),
                        left: getLeftWidth(),
                     } }

                >

                </div>


            </div>

            <div className = 'PRL_ItemMovie_Duration_values'>

                <div className = 'PRL_ItemMovie_Duration_item'>
                    <h2>Сегмент</h2>
                    <input 
                        type = 'text'
                        value = { trim_ms( segmentRealDuration.time ) }
                        onChange = { () => {}}
                    />
                    {/* <span className = 'PRL_ItemMovie_Duration_sec'>sec</span> */}
                    <input 
                        type = 'text'
                        value = { ( Math.round( segmentRealDuration.ms/1000 ) )  }
                        onChange = { () => {}}
                    />

                    
                </div>

                <div className = 'PRL_ItemMovie_Duration_item'>
                    <h2>Файл</h2>

                    <input 
                        type = 'text'
                        value = { trim_ms( fileDuration.time ) }
                        onChange = { () => {}}
                    />
                    <input 
                        type = 'text'
                        value = { ( Math.round( fileDuration.ms/1000 ) )  }
                        onChange = { () => {}}
                    />

                </div>

                <div className = 'PRL_ItemMovie_Duration_item'>
                    <h2>Начало</h2>

                    <input 
                        type = 'text'
                        value = { trim_ms( markIn.time ) }
                        onChange = { () => {}}
                    />
                    <input 
                        type = 'text'
                        value = { ( Math.round( markIn.ms/1000 ) )  }
                        onChange = { () => {}}
                    />

                </div>


            </div>


            

        </div> 

    )

};

export function Duration( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <DurationComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
