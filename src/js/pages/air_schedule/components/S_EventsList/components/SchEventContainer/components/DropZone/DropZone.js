
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import './DropZone.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { selectorData as scheduleResultDragEventSlise } from './../../../../../../../../redux/scheduleResultDragEventSlise.js';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import { START_FROM } from './../../../../../../../../config/scheduleResult.js';
import { BLIND_STYLE, BLIND_CHAR_NAME } from './../../../../../../../../config/layout.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';


const DropZoneComponent = ( props ) => {

    let {
        
        isEmpty,
        durationTime,
        startTime,
        startTimePlus,
        setStartTimePlus,
        dropZoneIsActive,
        // nextStartTime,


        dragStartEventId,
        dragStartDuration,
        // dragStartLinkedFileDuration,

        scheduleEventsList,

        nextStartTime,
        setNextStartTime,

        eventListById,

    } = props;

    let canvasRef = useRef();
    let dropZoneRef = useRef();
    let eventRef = useRef();


    let [ eventTop, setEventTop ] = useState( 0 );

    let [ eventName, setEventName ] = useState( '' );
    let [ eventStyle, setEventStyle ] = useState( {} );
    let [ eventIsShow, setEventIsShow ] = useState( false );





    useEffect( () => {
        if( dropZoneIsActive ){
            if( eventListById[ dragStartEventId ] ){
                let { style, name } = eventListById[ dragStartEventId ];
                setEventStyle( style );
                setEventName( name );

            }else{
                setEventStyle( BLIND_STYLE );
                setEventName( BLIND_CHAR_NAME );
            };

            // if( nextStartTime === null ){

            //     setNextStartTime( 100 );

            //     console.dir('!!!!!!!!!');

            // }



        //     nextStartTime,
        // setNextStartTime,


            
        }else{
            setEventStyle( {} );
            setEventName( '' );
            setEventIsShow( false );
        };

    }, [ dropZoneIsActive ] );

    const getNextStartTime = () => {
        let res = 24*60*60;
        for( let i = 0; i < scheduleEventsList.length; i++ ){
            if( scheduleEventsList[ i ].startTime > startTime ){
                res = scheduleEventsList[ i ].startTime;
                break;
            };
        };
        return res;

    }


    const drag_over = ( e ) => {

        
        if( dropZoneIsActive ){

            let next_StartTime = nextStartTime;
            if( next_StartTime === null ){
                next_StartTime = getNextStartTime()
                setNextStartTime( next_StartTime );
            };

            let zone_height = get_zone_height();
            let event_height = get_event_height();
            let cursor_y = get_cursor_y( e );

            let min_raznica_px = 30;

            if( zone_height > (event_height + min_raznica_px) ){

                if( durationTime >= dragStartDuration ){
                    setEventIsShow( true );
                    let top_position = get_top_position({
                        zone_height,
                        event_height,
                        cursor_y
                    });
                    setEventTop( top_position );

                    let start_time_plus = get_start_time_plus({
                        zone_height,
                        event_height,
                        top_position,
                        dutation: durationTime,
                        next_StartTime
                    });

                    setStartTimePlus( start_time_plus );
                };

            }else{
                // setEventIsShow( false );
                setStartTimePlus( 0 );
            }


        }else{
            setEventIsShow( false );
            setStartTimePlus( 0 );
        };

    }

    const drag_leave = () => {
        setEventIsShow( false );
        setStartTimePlus( 0 );
    }

    const get_zone_height = () => {
        var rect_1 = dropZoneRef.current.getBoundingClientRect();
        return  rect_1.height;
    }

    const get_event_height = () => {
        var rect = eventRef.current.getBoundingClientRect();
        return  rect.height;
    }

    const get_cursor_y = ( e ) => {
        var rect = canvasRef.current.getBoundingClientRect();
        return e.clientY - rect.top;
    };

    const get_top_position = ( params ) => {
        let {
            zone_height,
            event_height,
            cursor_y
        } = params;
        let result = 0;

        let lim_px = 14;

        let top = cursor_y - ( event_height / 2 );

        if( top < lim_px ){
            result = 0;
        }else if( top > (zone_height - event_height - ( event_height / 2 ) - lim_px) ){
            result = zone_height - event_height;
        }else{
            result = top;
        };

        return result;
    }

    

    const get_start_time_plus = ( params ) => {
        let {
            zone_height,
            event_height,
            top_position,
            dutation,
            next_StartTime,
        } = params;
        let max_limit = zone_height - event_height;
        let proc = top_position * 100 / max_limit;
        // console.log( 'startTime', startTime );

        // let next_StartTime = startTime + dutation + 1;
        // if( nextStartTime !== null ){
        //     next_StartTime = nextStartTime
        // }else{
        //     next_StartTime = startTime + dutation + 1;
        // }

        let gridEventDuration = dragStartDuration;


        let val =  ((dutation - dragStartDuration) * proc) / 100;

        let plus = Math.round( val );
        if( plus < 0 ){
            plus = 0;
        }else{


            let startTimePos = startTime + plus;

            if( startTimePos + gridEventDuration < next_StartTime ){
                // console.dir('!!!!!!!!');
            }else{
                plus = next_StartTime - startTime - gridEventDuration - 1;
            };




            // if( ( startTime + plus + dragStartDuration + dragStartLinkedFileDuration ) < startTime + dutation ){
            //     // plus = plus - 1;

            // }else{
            //     // console.dir( 'plus !!!!!!!!!!!!!!!!!' );
            //     // console.dir( plus );
            //     // console.dir( '( dutation - dragStartDuration - dragStartLinkedFileDuration - 1 )' );
            //     // console.dir( ( dutation - dragStartDuration - dragStartLinkedFileDuration - 1 ) );

            //     // plus = ( dutation - dragStartDuration + dragStartLinkedFileDuration - 1 );
            //     plus = ( dutation - dragStartDuration - dragStartLinkedFileDuration - 1 );

            // };

        };
        // console.log( 'dutation', dutation );
        // console.log( 'startTime', startTime );
        // console.log( 'plus', plus );
        // console.log( 'dragStartDuration', dragStartDuration );
        // console.log( 'dragStartLinkedFileDuration', dragStartLinkedFileDuration );


        return plus;
    }

    return (<>
        { isEmpty? (
            <div
                className = { `SEC_DropZone` }
                onDragOver =    { drag_over }
                onDragLeave =   { drag_leave }
                // onDrop =        { drop }
                ref = { dropZoneRef }
            >
                <div
                    className = { `SEC_DropZone_event ${ eventIsShow? 'show': ''} ` }
                    style = { { top: `${eventTop}px` } }
                    ref = { eventRef }
                >
                    <span className = 'DropZone_time'>{ convert_sec_to_time( startTime + startTimePlus ) }</span>

                    <span className = 'DropZone_dur'>{ convert_sec_to_time( dragStartDuration ) }</span>
                    <div className = 'DropZone_event' >
                        <input
                            type = 'text'
                            value = { eventName }
                            style = { eventStyle }
                            onChange = { () => {} }
                        />
                    </div>
                </div>

                { dropZoneIsActive? (
                                 <canvas
                    ref = { canvasRef }
                />   
                ): '' }



                

            </div> 


         ): '' }
    
    </>

    )

};

export function DropZone( props ){

    const scheduleResultDragEvent = useSelector( scheduleResultDragEventSlise );

    const scheduleResult = useSelector( scheduleResultSlise );


    
    const layout = useSelector( layoutSlice );


    layoutSlice
    // const dispatch = useDispatch();

    return (
        <DropZoneComponent
            { ...props }
            dragStartFrom =         { scheduleResultDragEvent.dragStartFrom }
            dragStartEventId =      { scheduleResultDragEvent.dragStartEventId }
            dragStartDuration =     { scheduleResultDragEvent.dragStartDuration }
            dragStartLinkedFileDuration =     { scheduleResultDragEvent.dragStartLinkedFileDuration }


            scheduleEventsList =     { scheduleResult.scheduleEventsList }



            eventListById =     { layout.eventListById }


            // setDragebleReleaseId = { ( val ) => { dispatch( setDragebleReleaseId( val ) ) } }

        />
    );


}

