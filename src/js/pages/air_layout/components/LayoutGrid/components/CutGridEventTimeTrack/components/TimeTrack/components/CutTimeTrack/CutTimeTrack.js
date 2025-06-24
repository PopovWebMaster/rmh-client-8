

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutTimeTrack.scss';

import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';
// import { round_to_number } from './../../../../../../../../../../helpers/round_to_number.js';

// import { add_cut_path_to_grid_events_groupe } from './../../../../vendors/add_cut_path_to_grid_events_groupe.js';
import { create_new_cut_putrs } from './../../../../vendors/create_new_cut_putrs.js';

const CutTimeTrackComponent = ( props ) => {

    let {
        // pointList,
        // setPointList,
        gridEventsParts,
        maxDurationTime,
        setGridEventsParts,
    } = props;

    let trackRef = useRef();
    let [ cutCursorDisplay, setCutCursorDisplay ] = useState( 'none' );
    let [ cutCursorLeft, setCutCursorLeft ] = useState( 0 );
    let [ cutCursorLeftProc, setCutCursorLeftProc ] = useState( 0 );
    let [ nextTimePoint, setNextTimePoint ] = useState( 0 );

    useEffect( () => {
        setNextTimePoint( Math.round( maxDurationTime * cutCursorLeftProc / 100 ) )
    }, [ cutCursorLeftProc ] );

    const track_move = ( e ) => {
        setCutCursorDisplay( 'flex' );
        let { clientX } = e;
        let trackRECT = trackRef.current.getBoundingClientRect()
        let track_left = trackRECT.left;
        let track_width = trackRECT.width;

        let left = 0;

        if( clientX <= track_left ){
            left = 0;
        }else if( clientX >= track_left + track_width ){
            left = track_width;
        }else{
            left = Math.round( clientX - track_left );
        };

        let left_proc = left * 100/track_width;

        setCutCursorLeft( left );
        setCutCursorLeftProc( left_proc );


    };

    const track_leave = () => {
        setCutCursorDisplay( 'none' );
    }

    const click = (   ) => {

        // let new_group = add_cut_path_to_grid_events_groupe({
        //     cut_point: Math.round( maxDurationTime * cutCursorLeftProc / 100 ),
        //     gridEventsParts,
        // });

        let new_group = create_new_cut_putrs({
            cut_point: nextTimePoint,
            gridEventsParts,
        });

        setGridEventsParts( new_group );


    }



    return (
        <div 
            className =     'CGETT_cut_time_track'
            ref =           { trackRef }
            onMouseMove =   { track_move }
            onMouseLeave =  { track_leave }
            onClick =       { click } 
        >
            <div 
                className = 'CGETT_cutTimeCursor'
                style = { {
                    display: cutCursorDisplay,
                    left: `${cutCursorLeft}px`
                } }
            >
                <span>{ convert_sec_to_time( nextTimePoint ) }</span>
            </div>

        </div>
    )

};

export function CutTimeTrack( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <CutTimeTrackComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
