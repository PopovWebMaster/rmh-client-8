
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SettingOfCutPart.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
// import { TimeArrowsBtn } from './components/TimeArrowsBtn/TimeArrowsBtn.js';
import { TimeArrowsBtn } from './components/TimeArrowsBtn/TimeArrowsBtn.js';
import { RemoveBtn } from './components/RemoveBtn/RemoveBtn.js';
import { SettingTimeTrack } from './components/SettingTimeTrack/SettingTimeTrack.js';

const SettingOfCutPartComponent = ( props ) => {

    let {
        gridEventsParts,
        index,
        gridEvent,
        setGridEventsParts,
        maxDurationTime,

    } = props;

    // useEffect( () => {
    //     // console.dir( props );

    //     if( gridEventsParts[ index + 1 ] ){
    //         setIsLastPart( false );
    //     }else{
    //         setIsLastPart( true );
    //     };

    //     if( gridEventsParts[ index - 1 ] ){
    //         setIsFirstPart( false );
    //     }else{
    //         setIsFirstPart( true );
    //     };

    // }, [ gridEventsParts ] );

    // let {
    //     cutPart,
    //     durationTime,
    //     firstSegmentId,
    //     id,
    //     isKeyPoint,
    //     notes,
    //     startTime,
    //     eventId,
    // } = gridEvent;


    return (
        <div className = 'AOASGE_setting'>
            <div className = 'AOASGE_setting_buttons'>
                <TimeArrowsBtn 
                    gridEventsParts =       { gridEventsParts }
                    index =                 { index }
                    setGridEventsParts =    { setGridEventsParts }
                />
                <RemoveBtn 
                    gridEventsParts =       { gridEventsParts }
                    index =                 { index }
                    setGridEventsParts =    { setGridEventsParts }
                />
                
            </div>
            <div className = 'AOASGE_setting_time_track'>
                <SettingTimeTrack 
                    maxDurationTime =       { maxDurationTime }
                    gridEventsParts =       { gridEventsParts }
                    index =                 { index }
                    setGridEventsParts =    { setGridEventsParts }
                />
            </div>
            
        </div>
    )

};

export function SettingOfCutPart( props ){

        // const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        // const dispatch = useDispatch();
    

    return (
        <SettingOfCutPartComponent
            { ...props }
            // gridDayEventsListById = { layout.gridDayEventsListById }
            // gridOneDayList = { layout.gridOneDayList }

            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
