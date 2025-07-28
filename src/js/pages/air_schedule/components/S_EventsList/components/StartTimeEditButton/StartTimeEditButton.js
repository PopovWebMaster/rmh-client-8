
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './StartTimeEditButton.scss';

// import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';


import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';

import { StartTimeEditor } from './../../../../../../components/StartTimeEditor/StartTimeEditor.js';
import { set_schedule_list_changes_to_store } from './../../../../vendors/set_schedule_list_changes_to_store.js';

const StartTimeEditButtonComponent = ( props ) => {

    let {
        startTime,
        isKeyPoint,
        gridEventId,

        scheduleEventsList

    } = props;


    let [ isOpen, setIsOpen ] = useState( false );

    let [ durationTime, setDurationTime ] = useState( 0 );
    // let [ startTime, setStartTime] = useState( 0 );
    let [ startTimeNext, setStartTimeNext ] = useState( 0 );

    let [ timeSpaceTo, setTimeSpaceTo ] = useState( 0 );
    let [ timeSpaceFrom, setTimeSpaceFrom ] = useState( 0 );
    let [ eventId, setEventId ] = useState( null );

    useEffect( () => {
        get_day_event_data();

    }, [ 
        gridEventId, 
        isOpen, 
        scheduleEventsList,
    ] )

    useEffect( () => { setStartTimeNext( startTime ) }, [startTime] );

    const clickAdd = () => {
        
        setIsOpen( true );
    };

    const get_day_event_data = () => {

        for( let i = 0; i < scheduleEventsList.length; i++ ){
            if( scheduleEventsList[ i ].gridEventId === gridEventId ){
                let { 
                    durationTime, 
                    // startTime, 
                    eventId 
                } = scheduleEventsList[ i ];

                let pointFrom = 0;
                let pointTo = 0;
                if( scheduleEventsList[ i - 1 ]){
                    pointFrom = scheduleEventsList[ i - 1 ].startTime + scheduleEventsList[ i - 1 ].durationTime + 1;
                };

                if( scheduleEventsList[ i + 1 ] ){
                    pointTo = scheduleEventsList[ i + 1 ].startTime - 1;
                }else{
                    pointTo = 24 * 60 * 60 -1;
                };

                setEventId( eventId );
                setDurationTime( durationTime );
                // setStartTime( startTime );
                setStartTimeNext( scheduleEventsList[ i ].startTime );

                setTimeSpaceFrom( pointFrom );
                setTimeSpaceTo( pointTo );
                break;
            };
        };
    }

    const clickSaveHandler = () => {
        set_schedule_list_changes_to_store( gridEventId, { startTime: startTimeNext } );
        setIsOpen( false );
    };
    

    return (<>

        <StartTimeEditor 
            isOpen =            { isOpen }
            setIsOpen =         { setIsOpen }
            durationTime =      { durationTime }
            // startTime =         { startTime }
            startTime =         { startTimeNext }

            timeSpaceTo =       { timeSpaceTo }
            timeSpaceFrom =     { timeSpaceFrom }
            eventId =           { eventId }
            // setStartTime =      { setStartTime }
            setStartTime =      { setStartTimeNext }

            clickSaveHandler =  { clickSaveHandler }
        />
    
        <span 
            className = { `SEC_time ${isKeyPoint? 'isKeyPoint': ''}` }
            onClick = { clickAdd }
        >{ convert_sec_to_time( startTimeNext ) }</span>
    </>)

};

export function StartTimeEditButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <StartTimeEditButtonComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
