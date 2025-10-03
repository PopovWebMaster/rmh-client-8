
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CompletedTimeSector.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { StartTimeEditButton } from './../../../StartTimeEditButton/StartTimeEditButton.js';

import { TimePushButtons } from './../TimePushButtons/TimePushButtons.js';

const CompletedTimeSectorComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        isKeyPoint = false,
        gridEventId = null,

    } = props;

    return (
        <div className = 'schEventItemTime'>

            <TimePushButtons gridEventId = { gridEventId } />
            
            <StartTimeEditButton
                startTime =     { startTime }
                isKeyPoint =    { isKeyPoint }
                gridEventId =   { gridEventId }
            />

            

            <span className = 'SEC_duration'>{ convert_sec_to_time( durationTime ) }</span>

        </div>
    )

};


export function CompletedTimeSector( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <CompletedTimeSectorComponent
            { ...props }

            // setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
