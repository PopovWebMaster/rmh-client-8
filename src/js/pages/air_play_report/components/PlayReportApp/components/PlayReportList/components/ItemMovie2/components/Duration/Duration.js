
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './Duration.scss';

const comvert_min_to_ms = ( min ) => {
    return min * 60 * 1000;

}

const DurationComponent = ( props ) => {

    let {
        fileDuration,
        segmentRealDuration,
        markIn,
    } = props;

    let max_time_ms = comvert_min_to_ms( 90 );
    let min_time_ms = comvert_min_to_ms( 1 );


    let hours_2_ms = comvert_min_to_ms( 90 );

    let [ isOpen, setIsOpen ] = useState( false );
    let [ fileWidth, setFileWidth ] = useState( 0 );
    let [ segmentWidth, setSegmentWidth ] = useState( 0 );
    let [ segmentLeft, setSegmentLeft ] = useState( 0 );

    useEffect( () => {

        // let file_W_proc =       Math.round( fileDuration.ms *100/max_time_ms );
        // let segment_W_proc =    Math.round( segmentRealDuration.ms *100/max_time_ms );
        // let segment_left_proc = Math.round( markIn.ms *100/max_time_ms );

        let file_W_proc =       0;
        let segment_W_proc =    0;
        let segment_left_proc = 0;

        if( fileDuration.ms <= max_time_ms && fileDuration.ms >= min_time_ms ){
            file_W_proc =       Math.round( fileDuration.ms *100/max_time_ms );
            segment_W_proc =    Math.round( segmentRealDuration.ms *100/max_time_ms );
            segment_left_proc = Math.round( markIn.ms *100/max_time_ms );

        }else{
            if( fileDuration.ms > max_time_ms ){
                file_W_proc =       100;
                segment_W_proc =    Math.round( segmentRealDuration.ms *100/fileDuration.ms );
                segment_left_proc = Math.round( markIn.ms *100/fileDuration.ms );
            }else{
                // file_W_proc =       Math.round( fileDuration.ms *100/min_time_ms );
                // segment_W_proc =    Math.round( segmentRealDuration.ms *100/min_time_ms );
                // segment_left_proc = Math.round( markIn.ms *100/min_time_ms );

                file_W_proc =       1;
                segment_W_proc =    (Math.round( segmentRealDuration.ms *100/fileDuration.ms ) * file_W_proc)/100;
                segment_left_proc = (Math.round( markIn.ms *100/fileDuration.ms) * file_W_proc)/100;



            };

        };

        setFileWidth( `${file_W_proc}%` );
        setSegmentWidth( `${segment_W_proc}%` );
        setSegmentLeft( `${segment_left_proc}%` );


    }, [
        fileDuration,
        segmentRealDuration,
        markIn,
    ] );



    const trim_ms = ( str ) => {
        let arr = str.split('.');
        return arr[0];
    }

    // const getFileWidth = () => {
    //     let result = Math.round( fileDuration.ms *100/hours_2_ms );
    //     if( result > 100 ){
    //         result = 100;
    //     };
    //     return `${result}%`;
    // }

    // const getSegmentWidth = () => {
    //     let result = Math.round( segmentRealDuration.ms *100/hours_2_ms );
    //     if( result > 100 ){
    //         result = 100;
    //     };
    //     return `${result}%`;
    // }

    // const getLeftWidth = () => {
    //     let result = Math.round( markIn.ms *100/hours_2_ms );
    //     if( result > 100 ){
    //         result = 100;
    //     };
    //     return `${result}%`;
    // }




    return (
        <div 
            className = { `PRL_ItemMovie2_Duration ${isOpen? 'isOpen': '' }` }
            onClick = { () => { setIsOpen( !isOpen ) } }
            onMouseLeave = { () => { setIsOpen( false ) } }
        >

            <div className = 'PRL_Duration_scale'>
                <div 
                    className = 'PRL_file_len'
                    style = { { width: fileWidth } }
                >

                </div>

                <div 
                    className = 'PRL_segment_len'
                    style = { { 
                        width: segmentWidth,
                        left: segmentLeft,
                     } }
                >

                </div>


            </div>

            <div className = 'PRL_Duration_data'>
                <ul>
                    <li>
                        <span>File: </span>
                        <span>{ trim_ms( fileDuration.time ) }</span>
                    </li>
                    <li>
                        <span>Segment: </span>
                        <span>{ trim_ms( segmentRealDuration.time ) }</span>
                    </li>
                    <li>
                        <span>Segment start: </span>
                        <span>{ trim_ms( markIn.time ) }</span>
                    </li>
                    
                </ul>

            </div>
           





            
        </div> 

    )

};

export function Duration( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <DurationComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
