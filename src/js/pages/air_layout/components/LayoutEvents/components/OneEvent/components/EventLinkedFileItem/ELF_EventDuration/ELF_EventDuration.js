
import React, { useRef, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ELF_EventDuration.scss';

// import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { get_metadata_from_video_file } from './../../../../../../../../../helpers/get_metadata_from_video_file.js';
import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';

const ELF_EventDurationComponent = ( props ) => {

    let {
        linked_file,
        type,
        durationTime,
        eventDuration,
        setEventDuration,
        
    } = props;

    useEffect( () => {



    }, [
        linked_file,
        type,
        durationTime,
    ] );

    



    return (
        <div className = 'ELF_EventDuration'>
            <span className = 'ELF_EventDuration_title'>Общий хрон. события</span>
            <span className = 'ELF_EventDuration_dur'>{ eventDuration }</span>
        </div>

    )

};

export function ELF_EventDuration( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ELF_EventDurationComponent
            { ...props }
            // eventList = { layout.eventList }

            // setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }

        />
    );


}
