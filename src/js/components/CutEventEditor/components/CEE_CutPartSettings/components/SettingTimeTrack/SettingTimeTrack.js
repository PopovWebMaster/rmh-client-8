
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SettingTimeTrack.scss';

import { selectorData as cutEventEditorSlise } from './../../../../../../redux/cutEventEditorSlise.js';

import { get_cut_part_left_proc } from './vendors/get_cut_part_left_proc.js';

const SettingTimeTrackComponent = ( props ) => {

    let {
        index,

        maxDurationTime,
        eventsPartsList,

    } = props;

    let [ widthProc, setWidthProc ] = useState( 0 );
    let [ leftProc, setLeftProc ] = useState( 0 );


    useEffect( () => {

        let { durationTime } = eventsPartsList[ index ];
        
        setWidthProc( durationTime * 100 / maxDurationTime );
        let left_proc = get_cut_part_left_proc( index );

        setLeftProc( left_proc );

    }, [ eventsPartsList, index ] );

    
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

    const cutEventEditor = useSelector( cutEventEditorSlise );
    const dispatch = useDispatch();

    return (
        <SettingTimeTrackComponent
            { ...props }

            eventsPartsList = { cutEventEditor.eventsPartsList }
            maxDurationTime = { cutEventEditor.maxDurationTime }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
