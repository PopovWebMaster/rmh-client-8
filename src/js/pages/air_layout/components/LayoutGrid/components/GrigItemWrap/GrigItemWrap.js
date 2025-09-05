
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './GrigItemWrap.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { StartTimeWithEdit } from './components/StartTimeWithEdit/StartTimeWithEdit.js';
import { DurationTimeEdit } from './components/DurationTimeEdit/DurationTimeEdit.js';
import { EVENT_TYPE } from './../../../../../../config/layout.js';

const GrigItemWrapComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        isCompletd = false,
        isKeyPoint = false,
        id = null,

        gridDayEventsListById,
        eventListById,

        children,
    } = props;

    let [ isError, setIsError ] = useState( false );

    let [ gridEventType, setGridEventType ] = useState( '' );


    useEffect( () => {
        if( gridDayEventsListById[ id ] ){

            let { eventId } = gridDayEventsListById[ id ];
            if( eventListById[ eventId ] ){
                let { type } = eventListById[ eventId ];
                setGridEventType( type );
            };
        };

    }, [ id ] );

    // console.dir( 'props' );
    //         console.dir( props );

    useEffect( () => {
        if( durationTime >= 0 ){
            setIsError( false );
        }else{

            // console.dir( 'props' );
            // console.dir( props );
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
        <div className = 'grigItem'>
            <div className = { `grigItemWrap ${ isCompletd? 'isCompletd': '' } ${ isError? 'errorTime': '' }` }>
                { isCompletd? (
                    <div className = 'grigItemTime'>
                        <StartTimeWithEdit 
                            startTimeValue =    { startTime }
                            isKeyPoint =        { isKeyPoint }
                            id =                { id }
                        />

                        { gridEventType === EVENT_TYPE.BLOCK? ( <DurationTimeEdit
                            durationTime = { durationTime }
                            id = { id }
                        />): (
                            <span className = 'ETS_duration'>{ convert_sec_to_time( durationTime ) }</span>
                        )  }

                        
                        
                    </div>
                ): (

                    <div className = 'grigItemTimeRemains'>
                        <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
                        
                        <span className = 'text'>{ isError? text_error: text_seccess }</span>
                        
                        <span className = 'time'>{ getDuration( durationTime ) }</span>
                    </div>
                ) }
                
                <div className = 'grigItemBody'>
                    { children }
                </div>
            </div>
        </div>
    )

};

export function GrigItemWrap( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <GrigItemWrapComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            eventListById = { layout.eventListById }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
