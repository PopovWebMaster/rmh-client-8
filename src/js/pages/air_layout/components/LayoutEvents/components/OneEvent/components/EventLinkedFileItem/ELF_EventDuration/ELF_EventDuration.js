
import React, { useRef, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ELF_EventDuration.scss';

// import { selectorData as layoutSlice, setEventListAsChanged } from './../../../../../../../../redux/layoutSlice.js';

import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';
import { convert_time_str_to_sec } from './../../../../../../../../../helpers/convert_time_str_to_sec.js';


import { EVENT_TYPE } from './../../../../../../../../../config/layout.js';

const ELF_EventDurationComponent = ( props ) => {

    let {
        linked_file,
        type,
        durationTime,
        eventDuration,
        setEventDuration,
        
    } = props;

    useEffect( () => {

        if( linked_file === null ){
            setEventDuration( convert_time_str_to_sec( durationTime ) );
        }else{
            if( type === EVENT_TYPE.FILE ){
                if( linked_file[ 0 ] ){
                    let { duration } = linked_file[ 0 ];
                    setEventDuration( duration );
                };
            }else if( type === EVENT_TYPE.BLOCK ){

                let all_duration = 0;
                for( let i = 0; i < linked_file.length; i++ ){
                    let { duration } = linked_file[ i ];
                    all_duration = all_duration + duration;
                };
                let durSec = convert_time_str_to_sec( durationTime );
                if( all_duration > durSec ){
                    setEventDuration( all_duration );
                }else{
                    setEventDuration( durSec );
                };

            }else{
                setEventDuration( convert_time_str_to_sec( durationTime ) );
            };
        };

        
    }, [
        linked_file,
        type,
        durationTime,
    ] );

    



    return (
        <div className = 'ELF_EventDuration'>
            <span className = 'ELF_EventDuration_title'>Хронометраж события</span>
            <span className = 'ELF_EventDuration_dur'>{ convert_sec_to_time( eventDuration ) }</span>
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
