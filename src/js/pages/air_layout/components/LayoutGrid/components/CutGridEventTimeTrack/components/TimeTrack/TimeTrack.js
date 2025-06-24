
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TimeTrack.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

// import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
// import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';

import { PointOfTimeBoundary } from './components/PointOfTimeBoundary/PointOfTimeBoundary.js';
import { PointsTrack } from './components/PointsTrack/PointsTrack.js';
import { CutTimeTrack } from './components/CutTimeTrack/CutTimeTrack.js';

const TimeTrackComponent = ( props ) => {

    let {
        pointList,
        setPointList,
        maxDurationTime,
        gridEventsParts,
        setGridEventsParts,
    } = props;


    return (
        <div className = 'CGETT_timeTrack'>
            <div className = 'CGETT_wrap'>
                <PointOfTimeBoundary 
                    timeSec = { 0 }
                />
                <div className = 'CGETT_track_wrap'>
                    <PointsTrack 
                        maxDurationTime = { maxDurationTime }
                        gridEventsParts = { gridEventsParts }
                    />
                    <CutTimeTrack 
                        maxDurationTime = { maxDurationTime }
                        gridEventsParts = { gridEventsParts }
                        setGridEventsParts = { setGridEventsParts }

                    />
                </div>

                <PointOfTimeBoundary 
                    timeSec = { maxDurationTime } 
                />

            </div>
        </div>
    )

};

export function TimeTrack( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <TimeTrackComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
