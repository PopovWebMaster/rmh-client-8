
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './StartTimeWithEdit.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { StartTimeEditComponent } from './../StartTimeEditComponent/StartTimeEditComponent.js';

import { StartTimeEditor } from './../../../../../../../../components/StartTimeEditor/StartTimeEditor.js';
import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';

const StartTimeWithEditComponent = ( props ) => {

    let {
        startTimeValue, // Нужна здесь только для того чтоб отслеживать его изменения и вовремя перерисовывать в DOM
        isKeyPoint = false,
        id = null,

        gridDayEventsList,
        gridCurrentDay,
        setDragIsActive = () => {},

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ durationTime, setDurationTime ] = useState( 0 );
    let [ startTime, setStartTime] = useState( 0 );
    let [ timeSpaceTo, setTimeSpaceTo ] = useState( 0 );
    let [ timeSpaceFrom, setTimeSpaceFrom ] = useState( 0 );
    let [ eventId, setEventId ] = useState( null );
    let [ isAKeyOneEvent, setIsAKeyOneEvent ] = useState( isKeyPoint );


    useEffect( () => {
        if( isOpen ){
            setIsAKeyOneEvent( isKeyPoint );
        }else{
            setDragIsActive( true );
        };
    }, [ isKeyPoint, isOpen ] );


    useEffect( () => {

        get_day_event_data();

    }, [ id, isOpen, startTimeValue ] )

    const clickAdd = () => {
        if( access_right( 'layout_grid_edit' ) ){
            setIsOpen( true );
            setDragIsActive( false );
        };
    };

    const get_day_event_data = () => {
        for( let i = 0; i < gridDayEventsList[ gridCurrentDay ].length; i++ ){
            if( gridDayEventsList[ gridCurrentDay ][ i ].id === id ){
                let { durationTime, startTime, eventId } = gridDayEventsList[ gridCurrentDay ][ i ];
                let pointFrom = 0;
                let pointTo = 0;

                if( gridDayEventsList[ gridCurrentDay ][ i - 1 ]){
                    pointFrom = gridDayEventsList[ gridCurrentDay ][ i - 1 ].startTime + gridDayEventsList[ gridCurrentDay ][ i - 1 ].durationTime + 1;
                };

                if( gridDayEventsList[ gridCurrentDay ][ i + 1 ] ){
                    pointTo = gridDayEventsList[ gridCurrentDay ][ i + 1 ].startTime - 1;
                }else{
                    pointTo = 24 * 60 * 60 -1;
                };

                setEventId( eventId );
                setDurationTime( durationTime );
                setStartTime( startTime );
                setTimeSpaceFrom( pointFrom );
                setTimeSpaceTo( pointTo );
                break;
            };
        };
    }

    const clickSaveHandler = () => {
        if( access_right( 'layout_grid_edit' ) ){
            set_grid_event_changes_to_store( id, { startTime, isKeyPoint: isAKeyOneEvent } );
            setIsOpen( false );
        };

    };
    
    return (<>
        <StartTimeEditor 
            isOpen =            { isOpen }
            setIsOpen =         { setIsOpen }
            durationTime =      { durationTime }
            startTime =         { startTime }
            timeSpaceTo =       { timeSpaceTo }
            timeSpaceFrom =     { timeSpaceFrom }
            eventId =           { eventId }
            setStartTime =      { setStartTime }
            clickSaveHandler =  { clickSaveHandler }

            isAKeyOneEvent =  { isAKeyOneEvent }
            setIsAKeyOneEvent =  { setIsAKeyOneEvent }



        />

        <span 
            className = { `ETS_time ${isKeyPoint? 'isKeyPoint': ''}` }
            onClick = { clickAdd }
        >{ convert_sec_to_time( startTime ) }</span>
    </>)

};

export function StartTimeWithEdit( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <StartTimeWithEditComponent
            { ...props }
            gridDayEventsList = { layout.gridDayEventsList }
            gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
