
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SchEventContainer.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
// import { StartTimeWithEdit } from './components/StartTimeWithEdit/StartTimeWithEdit.js';

import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';

import { EVENT_TYPE } from './../../../../../../config/layout.js';
import { StartTimeEditButton } from './../StartTimeEditButton/StartTimeEditButton.js';

const SchEventContainerComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        eventId = null,


        isCompletd = false,
        isKeyPoint = false,
        gridEventId = null,

        // gridDayEventsListById,
        eventListById,

        children,
    } = props;

    let [ isError, setIsError ] = useState( false );
    let [ eventType, setEventType ] = useState( '' );

    useEffect( () => {
        if( eventListById[ eventId ] ){
            let { type } = eventListById[ eventId ];
            setEventType( type );
        }else{
            if( eventId !== null ){
                alert( 'Нужно пересоздать расписание, какое-то из событий было удалено' );
                setEventType( EVENT_TYPE.FILE );
            };

        };

    }, [ gridEventId ] );

    useEffect( () => {
        if( durationTime >= 0 ){
            setIsError( false );
        }else{
            setIsError( true );
        };
    }, [ durationTime ] );

    let text_seccess = 'Свободно:';
    let text_error = 'Ошибка, нарушение хронометража! Превышен на ';
    const getDuration = ( val ) => {
        if( val >= 0 ){
            return convert_sec_to_time( durationTime )
        }else{
            return convert_sec_to_time( durationTime * -1 );
        };

    };

   

    return (

       <div className = 'schEventContainer'>
            <div className = { `schEventContainerWrap ${ isCompletd? 'isCompletd': '' } ${ isError? 'errorTime': '' }` }>
                { isCompletd? (
                    <div className = 'schEventItemTime'>
                        {/* <span 
                            className = { `SEC_time ${isKeyPoint? 'isKeyPoint': ''}` }
                        >{ convert_sec_to_time( startTime ) }</span> */}
                        <StartTimeEditButton
                            isKeyPoint = { isKeyPoint }
                            gridEventId = { gridEventId }
                        />

                        <span className = 'SEC_duration'>{ convert_sec_to_time( durationTime ) }</span>
   
                    </div>
                ): (
                    <div className = 'schEventItemRemains'>
                        <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                        
                        <span className = 'text'>{ isError? text_error: text_seccess }</span>
                        
                        <span className = 'time'>{ getDuration( durationTime ) }</span>
                    </div>
                ) }
                
                <div className = 'schEventItemBody'>
                    { children }
                </div>
            </div>
        </div>
    )

};


export function SchEventContainer( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    const dispatch = useDispatch();

    return (
        <SchEventContainerComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }
            eventListById = { layout.eventListById }


            setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
