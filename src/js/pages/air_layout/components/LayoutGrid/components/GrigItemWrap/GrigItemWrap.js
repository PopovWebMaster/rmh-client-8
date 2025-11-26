
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './GrigItemWrap.scss';

import { selectorData as layoutSlice, setDragebleGridEventId } from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { StartTimeWithEdit } from './components/StartTimeWithEdit/StartTimeWithEdit.js';
import { DurationTimeEdit } from './components/DurationTimeEdit/DurationTimeEdit.js';
import { EVENT_TYPE } from './../../../../../../config/layout.js';

// import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
import { set_grid_event_changes_to_store } from './../../vendors/set_grid_event_changes_to_store.js';

import { access_right } from './../../../../../../helpers/access_right.js';

import { GridTimePushButtons } from './components/GridTimePushButtons/GridTimePushButtons.js';

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

        dragebleGridEventId,

        setDragebleGridEventId,
    } = props;

    let [ isError, setIsError ] = useState( false );

    let [ isLighter, setIsLighter ] = useState( false );

    let [ gridEventType, setGridEventType ] = useState( '' );
    let [ linkedFile, setLinkedFile ] = useState( null );



    useEffect( () => {
        if( gridDayEventsListById[ id ] ){

            let { eventId } = gridDayEventsListById[ id ];
            if( eventListById[ eventId ] ){
                let { type, linked_file } = eventListById[ eventId ];
                setGridEventType( type );
                setLinkedFile( linked_file );
            }else{
                setLinkedFile( null );
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


















    const getTargetState = () => {
        let result = false;
        if( isCompletd ){
        }else{
            let dragebleGE = gridDayEventsListById[ dragebleGridEventId ];

            if( dragebleGE.startTime > startTime ){ // верхний
                if( startTime + durationTime !== dragebleGE.startTime ){
                    if( durationTime >= dragebleGE.durationTime ){
                        result = true;
                    };
                };
            }else{ // нижний
                if( dragebleGE.startTime + dragebleGE.durationTime + 1 !== startTime ){
                    if( durationTime >= dragebleGE.durationTime ){
                        result = true;
                    };
                };
            };
        };
        return result;

    }


    const drag_start = ( e, gridEventId ) => {
        if( access_right( 'layout_grid_edit' ) ){
            if( isCompletd ){
                setDragebleGridEventId( gridEventId );
            };     
        };

    }

    const drag_end = () => {
        if( access_right( 'layout_grid_edit' ) ){
            setDragebleGridEventId( null )
        };
        
    }

    const drag_over = ( e ) => {
        if( access_right( 'layout_grid_edit' ) ){
            e.preventDefault();
            let isTargetEvent = getTargetState();
            if( isTargetEvent ){
                setIsLighter( true );
            }else{
                setIsLighter( false );
            };
        };

    }
    
    const drag_leave = ( e ) => {
        if( access_right( 'layout_grid_edit' ) ){
            setIsLighter( false );
        };
        
    }
    
    const drop = () => {

        if( access_right( 'layout_grid_edit' ) ){

            setIsLighter( false );

            let isTargetEvent = getTargetState();
            if( isTargetEvent ){ 

                set_grid_event_changes_to_store( dragebleGridEventId, { startTime } );


                // let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
                // StoreScheduleResultEvents.CreateFromScheduleEventsList( scheduleEventsList );
                // StoreScheduleResultEvents.AddRelease( gridEventId, dragebleReleaseId );
                // StoreScheduleResultEvents.SetListToStore();

            };

        };

        

    }



    
    return (
        <div
            className = { `grigItem ${ isLighter? 'isLighter': '' } ${isCompletd? 'isCompletd_': ''}` }
            draggable = { true }
            onDragStart = { ( e ) => { drag_start( e, id ) } }
            onDragEnd =     { drag_end }

            onDragOver =    { drag_over }
            onDragLeave =   { drag_leave }
            onDrop =        { drop }
        >
            <div className = { `grigItemWrap ${ isCompletd? 'isCompletd': '' } ${ isError? 'errorTime': '' }` }>
                { isCompletd? (
                    <div className = 'grigItemTime'>

                        <GridTimePushButtons
                            id = { id }
                        />

                        <StartTimeWithEdit 
                            startTimeValue =    { startTime }
                            isKeyPoint =        { isKeyPoint }
                            id =                { id }
                        />

                        { gridEventType === EVENT_TYPE.BLOCK? ( 
                            <DurationTimeEdit
                                durationTime = { durationTime }
                                id = { id }
                                linkedFile = { linkedFile }
                            />
                        ): (
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
    const dispatch = useDispatch();

    return (
        <GrigItemWrapComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            eventListById = { layout.eventListById }


            dragebleGridEventId = { layout.dragebleGridEventId }

            setDragebleGridEventId = { ( callback ) => { dispatch( setDragebleGridEventId( callback ) ) } }

        />
    );


}
