
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DurationEditComponent.scss';

import { selectorData as layoutSlice, setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../../../../redux/layoutSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainerSaveAdd } from './../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';
import { AWInputDuration } from './../../../../../../../../components/AlertWindowContainer/AWInputDuration/AWInputDuration.js';

import { make_analysis_of_reset_duration } from './vendors/make_analysis_of_reset_duration.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/layout.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';

const DurationEditComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        id,
        durationTime,
        linkedFile,


        // gridDayEventsList,
        // gridCurrentDay,

        setGridDayEventsList,
        setGridDayEventsIsChanges,
        setSpinnerIsActive,

    } = props;

    let [ value, setValue ] = useState( durationTime );
    let [ isError, setIsError] = useState( false );
    let [ errorMessage, setErrorMessage] = useState( '' );

    let [ isReady, setIsReady ] = useState( false );

    let [ minDuration, setMinDuration ] = useState( MIN_EVENT_DURATION_SEC );

    useEffect( () => {
        setValue( durationTime );
        setIsError( false );
        setErrorMessage( '' );
    }, [ durationTime ] );

    useEffect( () => {
        if( linkedFile === null ){
            setMinDuration( MIN_EVENT_DURATION_SEC );
        }else{
            let allDuration = 0;
            for( let i = 0; i < linkedFile.length; i++ ){
                let { duration } = linkedFile[ i ];
                allDuration = allDuration + duration;
            };
            setMinDuration( allDuration );
        };

    }, [ linkedFile ] );

    useEffect( () => {
        if( value === durationTime ){
            setIsReady( false );
        }else{
            if( value < minDuration ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };

        setIsError( false );
        setErrorMessage( '' );

    }, [ value ] );

    const change = ( sec, time ) => {
        if( isOpen ){
            setValue( sec );

            
        };
    }

    const clickSave = () => {
        if( isReady ){
            
            let addReport = make_analysis_of_reset_duration( id, value );

            if( addReport.isErrors ){
                setIsError( true );
                setErrorMessage( addReport.message );
            }else{

                setSpinnerIsActive( true );

                send_request_to_server({
                    route: `save-grid-event-list`,
                    data: { 
                        list: addReport.gridDayEventsList ,
                    },
                    successCallback: ( response ) => {
                        console.dir( 'response' );
                        console.dir( response );
                        if( response.ok ){
                            setSpinnerIsActive( false );
                            setGridDayEventsList( response.list );
                            setGridDayEventsIsChanges( false );

                            setIsOpen( false );

                        };
                    },
                });

            };

        };
    };



    return (
        <div className = 'durationEditComponent'>

            <AWInputDuration
                value = { value }
                changeHandler = { change }
            />

            <span className = 'DEC_min_time' >{ convert_sec_to_time( minDuration ) } (min)</span>

            { isError? (
                <p className = 'DEC_error' >{ errorMessage }</p>
            ): '' }

            
            <AlertWindowContainerSaveAdd 
                isActive = { isReady }
                clickHandler = { clickSave }
            />

        </div>
    )

};

export function DurationEditComponent( props ){

    // const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <DurationEditComponentComponent
            { ...props }
            // gridOneDayList = { layout.gridOneDayList }
            // gridDayEventsList = { layout.gridDayEventsList }
            // gridCurrentDay = { layout.gridCurrentDay }

            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }

            setGridDayEventsIsChanges = { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
