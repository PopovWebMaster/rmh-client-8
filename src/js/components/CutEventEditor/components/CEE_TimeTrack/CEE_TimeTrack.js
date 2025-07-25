

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CEE_TimeTrack.scss';

import { selectorData as cutEventEditorSlise } from './../../../../redux/cutEventEditorSlise.js';


import { PointOfTimeBoundary } from './components/PointOfTimeBoundary/PointOfTimeBoundary.js';
import { PointsTrack } from './components/PointsTrack/PointsTrack.js';
import { CutTimeTrack } from './components/CutTimeTrack/CutTimeTrack.js';

const CEE_TimeTrackComponent = ( props ) => {

    let {
        maxDurationTime,
    } = props;


    return (
        <div className = 'CGETT_timeTrack'>
            <div className = 'CGETT_wrap'>
                <PointOfTimeBoundary 
                    timeSec = { 0 }
                />
                <div className = 'CGETT_track_wrap'>
                    <PointsTrack />
                    <CutTimeTrack />
                </div>

                <PointOfTimeBoundary 
                    timeSec = { maxDurationTime } 
                />

            </div>
        </div>
    )

};

export function CEE_TimeTrack( props ){

        const cutEventEditor = useSelector( cutEventEditorSlise );
        const dispatch = useDispatch();
    

    return (
        <CEE_TimeTrackComponent
            { ...props }
            maxDurationTime = { cutEventEditor.maxDurationTime }
            // gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
