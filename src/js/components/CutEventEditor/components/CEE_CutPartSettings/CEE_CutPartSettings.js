
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CEE_CutPartSettings.scss';


import { TimeArrowsBtn } from './components/TimeArrowsBtn/TimeArrowsBtn.js';
import { RemoveBtn } from './components/RemoveBtn/RemoveBtn.js';
import { SettingTimeTrack } from './components/SettingTimeTrack/SettingTimeTrack.js';

const CEE_CutPartSettingsComponent = ( props ) => {

    let {
        index,
    } = props;


    return (
        <div className = 'AOASGE_setting'>
            <div className = 'AOASGE_setting_buttons'>
                <TimeArrowsBtn 
                    index =                 { index }
                />
                <RemoveBtn 
                    index =                 { index }
                />
                
            </div>
            <div className = 'AOASGE_setting_time_track'>
                <SettingTimeTrack 
                    index =                 { index }
                />
            </div>
            
        </div>
    )

};

export function CEE_CutPartSettings( props ){

        // const layout = useSelector( layoutSlice );
        // const dispatch = useDispatch();

    return (
        <CEE_CutPartSettingsComponent
            { ...props }


        />
    );


}
