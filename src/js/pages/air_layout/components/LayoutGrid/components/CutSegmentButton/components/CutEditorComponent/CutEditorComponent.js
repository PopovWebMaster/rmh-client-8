
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutEditorComponent.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { get_grid_event_parts_arr } from './vendors/get_grid_event_parts_arr.js';
import { get_max_duration } from './vendors/get_max_duration.js';

import { CutGridEventTimeTrack } from './../../../CutGridEventTimeTrack/CutGridEventTimeTrack.js';

const CutEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        id,
        firstSegmentId,
        durationTime,
        startTime,

        gridDayEventsListById,
        gridOneDayList,

    } = props;

    let [ gridEventsParts, setGridEventsParts ] = useState([]);

    let [ maxDurationTime, setMaxDurationTime ] = useState( 0 );

    useEffect( () => {

        if( isOpen ){
            setGridEventsParts( get_grid_event_parts_arr( gridOneDayList, id ) );
            setMaxDurationTime( get_max_duration( id ) );

        };

    }, [ gridOneDayList, isOpen ] );






    return (
        <div className = 'cutEditorComponent'>

            <CutGridEventTimeTrack 
                gridEventsParts =   { gridEventsParts }
                maxDurationTime =   { maxDurationTime }
                startTime =         { startTime }
                setGridEventsParts = { setGridEventsParts }
                setIsOpen = { setIsOpen }
            />
            
        </div>
    )

};

export function CutEditorComponent( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <CutEditorComponentComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
