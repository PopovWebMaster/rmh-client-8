
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './StartTimeEditComponent.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { TimeSelected }         from './../../../AddNewGridEventComponent/components/TimeSelected/TimeSelected.js';
import { AppearanceOfEvent }    from './../../../AddNewGridEventComponent/components/AppearanceOfEvent/AppearanceOfEvent.js';

import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js'

const StartTimeEditComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        id,

        gridOneDayList,
        gridDayEventsList,
        gridCurrentDay,

    } = props;

    let [ isReady, setIsReady ] = useState( false );
    let [ durationTime, setDurationTime ] = useState( 0 );
    let [ startTime, setStartTime] = useState( 0 );
    let [ timeSpaceTo, setTimeSpaceTo ] = useState( 0 );
    let [ timeSpaceFrom, setTimeSpaceFrom ] = useState( 0 );
    let [ eventId, setEventId ] = useState( null );

    let [ timeTarget, setTimeTarget ] = useState( 'start' ); // 'finish' 


    useEffect( () => {

        if( isOpen ){
            updateData();

        }else{
            setIsReady( false );

            setEventId( null );
            setDurationTime( 0 );
            setStartTime( 0 );
            setTimeSpaceFrom( 0 );
            setTimeSpaceTo( 0 );
            setIsReady( false );
        };

    }, [ isOpen ] );

    const updateData = () => {

        setIsReady( false );

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
                setIsReady( true );

                break;

            };
        };
    }
    const click = () => {
        set_grid_event_changes_to_store( id, { startTime } );
        setIsOpen( false );
    };



    return (
        <div className = 'startTimeEditComponent'>

            { isReady? (<>

                {/* <DayName /> */}

                <AppearanceOfEvent 
                    eventId =       { eventId }
                    startTime =     { startTime }
                />

                <TimeSelected
                    timeSpaceTo =   { timeSpaceTo }
                    timeSpaceFrom = { timeSpaceFrom }
                    startTime =     { startTime }
                    setStartTime =  { setStartTime }
                    timeTarget =    { timeTarget }
                    setTimeTarget = { setTimeTarget }
                    durationTime =  { durationTime }
                />


                <div className = 'STEC_save_changes'>
                    <div 
                        className = 'btn'
                        onClick = { click }
                    >
                        <span className = 'icon icon-floppy'></span>
                        <span className = 'text'>Сохранить</span>

                    </div>
                </div>

            </>): '' }

            

        </div>
    )

};

export function StartTimeEditComponent( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <StartTimeEditComponentComponent
            { ...props }
            gridOneDayList = { layout.gridOneDayList }
            gridDayEventsList = { layout.gridDayEventsList }
            gridCurrentDay = { layout.gridCurrentDay }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
