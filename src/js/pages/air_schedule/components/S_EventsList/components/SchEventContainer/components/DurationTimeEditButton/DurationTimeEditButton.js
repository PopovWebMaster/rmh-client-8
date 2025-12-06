
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './DurationTimeEditButton.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

// import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';

// import { StartTimeEditor } from './../../../../../../components/StartTimeEditor/StartTimeEditor.js';
// import { set_schedule_list_changes_to_store } from './../../../../vendors/set_schedule_list_changes_to_store.js';
import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

import { AlertWindowContainer }         from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputDuration }              from './../../../../../../../../components/AlertWindowContainer/AWInputDuration/AWInputDuration.js';
import { AlertWindowContainerSaveAdd }  from './../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

const DurationTimeEditButtonComponent = ( props ) => {

    let {

        durationTime,
        gridEventId,
        scheduleEventsList,
        scheduleEventsListByGridEventId,



    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isEditable, setIsEditable] = useState( false );


    let [ value, setValue ] = useState( durationTime );
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        // if( isOpen ){
            setValue( durationTime );
        // }else{

        // }
        

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
    };


    const clickSave = () => {
        if( isReady ){
            set_schedule_list_changes_to_store( gridEventId, { durationTime: value } );
            setIsOpen( false );
        };
    };

    const clickAdd = () => {
        if( isEditable ){
            setIsOpen( true );
        };
    };


    return (<>

        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '30em'
            height =    '18em'
            title = 'Хронометраж события'
        >

            <div className = 'SEC_duration_controller'>

                <div className = 'SEC_duration_controller_wrap'>
                    <AWInputDuration
                        value = { value }
                        changeHandler = { change }
                    />
                </div>

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


    
    // const dispatch = useDispatch();

    return (
        <DurationTimeEditButtonComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            scheduleEventsListByGridEventId = { scheduleResult.scheduleEventsListByGridEventId }

            
            gridDayEventsListById = { layout.gridDayEventsListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
