
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DurationTimeEditButton.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as scheduleResultSlise, setInfoMessageText } from './../../../../../../../../redux/scheduleResultSlise.js';


// import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';

// import { StartTimeEditor } from './../../../../../../components/StartTimeEditor/StartTimeEditor.js';
// import { set_schedule_list_changes_to_store } from './../../../../vendors/set_schedule_list_changes_to_store.js';
import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { AlertWindowContainer }         from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { AWShowErrors }         from './../../../../../../../../components/AlertWindowContainer/AWShowErrors/AWShowErrors.js';


import { AWInputDuration }              from './../../../../../../../../components/AlertWindowContainer/AWInputDuration/AWInputDuration.js';
import { AlertWindowContainerSaveAdd }  from './../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { drag_event_button_click_is_allowed } from './../../../../vendors/drag_event_button_click_is_allowed.js';


import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';

const DurationTimeEditButtonComponent = ( props ) => {

    let {

        durationTime,
        gridEventId,
        scheduleEventsList,
        scheduleEventsListByGridEventId,
        setDragIsActive = () => {},
        setInfoMessageText,



    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isEditable, setIsEditable] = useState( false );
    let [ errorMessage, setErrorMessage] = useState( '' );






    let [ value, setValue ] = useState( durationTime );
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        setValue( durationTime );
    }, [ durationTime ] );

    useEffect( () => {
        if( isOpen ){
           
        }else{
            setValue( durationTime );
            setDragIsActive( true );
        };
 

    }, [ gridEventId, isOpen ] );

    useEffect( () => {
        if( scheduleEventsListByGridEventId[ gridEventId ] ){
            if( scheduleEventsListByGridEventId[ gridEventId ].releases.length === 0 ){
                setIsEditable( true );
            }else{
                setIsEditable( false );
            };
        }else{
            setIsEditable( false );
        };
    }, [ gridEventId, scheduleEventsListByGridEventId ] );

    useEffect( () => {
        if( value === durationTime ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };
    }, [ value ] );

    const change = ( sec, time ) => {
        setValue( sec );
        if( errorMessage !== ''){
            setErrorMessage( '' );
        };
    };


    const clickSave = () => {

        if( isReady ){

            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            StoreScheduleResultEvents.CreateList();
            StoreScheduleResultEvents.SetDurationForEmptyGridEvent( gridEventId, value );
            let { isError } = StoreScheduleResultEvents.SetListToStoreOnlySaccess( true );

            if( isError ){
                let durStr = convert_sec_to_time( value );
                setErrorMessage( `Хронометраж ${durStr} не может быть добавлен. Не достаточно места в блоке` );
                setIsReady( false );
            }else{
                setIsOpen( false );
            };

        };
    };

    const clickAdd = ( e ) => {
        let is_allowed = drag_event_button_click_is_allowed( e );
        if( is_allowed === false ){
            return ;
        };

        if( isEditable ){
            setIsOpen( true );
            setDragIsActive( false );
        };
    };


    return (<>

        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '30em'
            height =    '20em'
            title = 'Хронометраж события'
        >

            <div className = 'SEC_duration_controller'>

                <div className = 'SEC_duration_controller_wrap'>
                    <AWInputDuration
                        value =         { value }
                        changeHandler = { change }
                    />

                </div>
                <AWShowErrors
                    errors = { errorMessage }
                />

                <AlertWindowContainerSaveAdd 
                    isActive = { isReady }
                    clickHandler = { clickSave }
                />

            </div>

        </AlertWindowContainer>

        <span
            className = { `${isEditable? 'isEditable': '' } SEC_duration` }
            onClick = { clickAdd }
        >{ convert_sec_to_time( durationTime ) }</span>
    </>)

};

export function DurationTimeEditButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const layout = useSelector( layoutSlice );


    
    const dispatch = useDispatch();

    return (
        <DurationTimeEditButtonComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            scheduleEventsListByGridEventId = { scheduleResult.scheduleEventsListByGridEventId }

            
            gridDayEventsListById = { layout.gridDayEventsListById }

            setInfoMessageText = { ( val ) => { dispatch( setInfoMessageText( val ) ) } }

        />
    );


}
