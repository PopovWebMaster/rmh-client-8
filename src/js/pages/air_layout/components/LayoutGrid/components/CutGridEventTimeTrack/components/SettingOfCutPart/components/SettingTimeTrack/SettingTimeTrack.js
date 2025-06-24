
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SettingTimeTrack.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';
import { get_cut_part_left_proc } from './vendors/get_cut_part_left_proc.js';

const SettingTimeTrackComponent = ( props ) => {

    let {
        maxDurationTime,
        gridEventsParts,
        index,
        setGridEventsParts,

    } = props;

    let [ widthProc, setWidthProc ] = useState( 0 );
    let [ leftProc, setLeftProc ] = useState( 0 );


    useEffect( () => {

        let { durationTime } = gridEventsParts[ index ];
        
        setWidthProc( durationTime * 100 / maxDurationTime );
        let left_proc = get_cut_part_left_proc({
            gridEventsParts,
            index,
            maxDurationTime,
        }) 
        setLeftProc( left_proc );

    }, [ gridEventsParts, index ] );

    
    return (
        <div className = 'AOASGE_SettingTimeTrack'>

            <div className = 'AOASGE_track'>
                <div 
                    className = 'AOASGE_filled_track'
                    style = {{
                        left: `${ leftProc }%`,
                        width: `${ widthProc }%`,
                    }}
                ></div>
            </div>

        </div>

    )

};

export function SettingTimeTrack( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <SettingTimeTrackComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
