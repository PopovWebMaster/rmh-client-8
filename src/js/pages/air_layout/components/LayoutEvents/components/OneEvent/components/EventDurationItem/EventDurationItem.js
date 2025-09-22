
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EventDurationItem.scss';

import { selectorData as layoutSlice, setEventListAsChanged, setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../redux/spinnerSlice.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/events.js';

import { InputDuration } from './../../../../../../../../components/InputDuration/InputDuration.js';

import { seve_one_event_changes_on_setver } from './../../../../vendors/seve_one_event_changes_on_setver.js';

import { get_gridDayEventsList_with_new_duration_time } from './vendors/get_gridDayEventsList_with_new_duration_time.js';
import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';



const EventDurationItemComponent = ( props ) => {

    let {
        id,
        durationTime,

        eventList,
        setGridDayEventsList,
        setGridDayEventsIsChanges,
        setSpinnerIsActive,

    } = props;

    let [ HH, setHH ] = useState( '' );
    let [ MM, setMM ] = useState( '' );
    let [ SS, setSS ] = useState( '' );

    let [ isOpen, setIsOpen ] = useState( false );

    const splitTimeAndSetToState = () => {
        let arr = durationTime.split( ':' );
        setHH( arr[ 0 ] );
        setMM( arr[ 1 ] );
        setSS( arr[ 2 ] );
    };

    useEffect( () => {
        splitTimeAndSetToState();

    }, [ durationTime ] );

    const getTimeInSeconds = ( hh, mm, ss ) => {
        let sec_hh = Number( hh ) * 60 * 60;
        let sec_mm = Number( mm ) * 60;
        let sec_ss = Number( ss );
        return sec_hh + sec_mm + sec_ss;
    }

    const set_changes_to_store = () => {

        access_right( 'layout_event_edit', () => {
            
            let duration_sec = getTimeInSeconds( HH, MM, SS );

            let new_durationTime = `${HH}:${MM}:${SS}`;

            if( duration_sec >= MIN_EVENT_DURATION_SEC ){

            }else{
                setHH( '00' );
                setMM( '00' );
                setSS( '05' );
                new_durationTime = `00:00:05`;
            };

            let addReport = get_gridDayEventsList_with_new_duration_time( id, duration_sec );
            if( addReport.isErrors ){
                let arr = durationTime.split( ':' );
                setHH( arr[ 0 ] );
                setMM( arr[ 1 ] );
                setSS( arr[ 2 ] );

                alert( addReport.message );

            }else{

                if( new_durationTime !== durationTime ){
                    setIsOpen( true );
                };

            };

        } );

        

    };

    const setNewDuration = () => {
        setIsOpen( false );

        let duration_sec = getTimeInSeconds( HH, MM, SS );
        let new_durationTime = `${HH}:${MM}:${SS}`;

        if( duration_sec >= MIN_EVENT_DURATION_SEC ){

        }else{
            setHH( '00' );
            setMM( '00' );
            setSS( '05' );
            new_durationTime = `00:00:05`;
        };

        setSpinnerIsActive( true );

        let addReport = get_gridDayEventsList_with_new_duration_time( id, duration_sec );

        send_request_to_server({
            route: `save-grid-event-list`,
            data: { 
                list: addReport.gridDayEventsList,
            },
            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );
                if( response.ok ){
                    setSpinnerIsActive( false );
                    setGridDayEventsList( response.list );
                    setGridDayEventsIsChanges( false );

                    

                    seve_one_event_changes_on_setver({
                        eventId: id,
                        eventData: { 
                            durationTime: new_durationTime,
                            durationSec: duration_sec,
                        },
                        callback: () => {},
                    });
                    
                };

            },
        });

    }

    const cancelChangesDuration = () => {
        setIsOpen( false );
        splitTimeAndSetToState();
    }

    return (

        <div className = 'LE_EventDurationItem'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title =     'Подтверждение нового хронометража'
                width =     '30em'
                height =    '13em'
            >
                <AWConfirm
                    text =              { `Новый хронометраж ${HH}:${MM}:${SS} будет присвоен всем событиям в эфирной сетке` }
                    type =              'confirm'
                    continueHandler =   { setNewDuration }
                    cancelHandler =     { cancelChangesDuration }
                    titleContinue =     'Продолжить'
                    titlecancel =       'Отмена'
                />
            </AlertWindowContainer>

            <InputDuration 
                HH = { HH }
                MM = { MM }
                SS = { SS }
                setHH = { setHH }
                setMM = { setMM }
                setSS = { setSS }
                enterHandler = { set_changes_to_store }
            
            />

        </div>
                

    )

};

export function EventDurationItem( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <EventDurationItemComponent
            { ...props }
            eventList = { layout.eventList }

            setEventListAsChanged = { ( val ) => { dispatch( setEventListAsChanged( val ) ) } }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setGridDayEventsIsChanges = { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


            


            


        />
    );


}
