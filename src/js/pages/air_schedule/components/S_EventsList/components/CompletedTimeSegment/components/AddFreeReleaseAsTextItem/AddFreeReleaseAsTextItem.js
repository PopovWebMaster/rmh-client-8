
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddFreeReleaseAsTextItem.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

// import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
// import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
// import { AWTextarea } from './../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
// import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

// import { set_schedule_list_changes_to_store } from './../../../../../../vendors/set_schedule_list_changes_to_store.js'


import { access_right } from './../../../../../../../../helpers/access_right.js';
import { get_metadata_from_video_file } from './../../../../../../../../helpers/get_metadata_from_video_file.js';
// import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { get_event_by_id } from './../../../../../../../../helpers/get_event_by_id.js';
import { EVENT_TYPE, MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/layout.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWTextarea } from './../../../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWInputDuration } from './../../../../../../../../components/AlertWindowContainer/AWInputDuration/AWInputDuration.js';




import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';

import { pars_string_by_fileName_and_duration } from './../../../../vendors/pars_string_by_fileName_and_duration.js';




const AddFreeReleaseAsTextItemComponent = ( props ) => {

    let {
        gridEventId,
        releases,
        eventId,
        firstSegmentId,
        setDragIsActive,

        // scheduleEventsList,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ inputValue, setInputValue ] = useState( '' );
    let [ fileName, setFileName ] = useState( '' );
    let [ isReady, setIsReady ] = useState( false );




    let [ durationValue, setDurationValue ] = useState( MIN_EVENT_DURATION_SEC );

    useEffect( () => {
        if( isOpen ){
            setDragIsActive( false );

        }else{
            setDragIsActive( false );
            setFileName( '' );
            setInputValue( '' );
            setDurationValue( MIN_EVENT_DURATION_SEC );
        };

    }, [ isOpen ] );

    useEffect( () => {
        if( fileName.trim() === '' ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ fileName ] );



    // const inputRef = useRef();

    const get_is_active = ( event_id, releases_list ) => {
        let result = false

        if( firstSegmentId === null || firstSegmentId === gridEventId ){
            let { type } = get_event_by_id( event_id );
            if( type === EVENT_TYPE.BLOCK ){
                result = true;
            }else if( type === EVENT_TYPE.FILE ){
                if( releases_list.length > 0 ){

                }else{
                    result = true;
                };
            };
        };
        
        return result;
    }

    const click = () => {
        if( access_right( 'schedule_edit' ) ){
            let isActive = get_is_active( eventId, releases );
            if( isActive ){
                setIsOpen( true );
            };
        };
    };

    const save = () => {
        if( fileName !== '' ){

            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            StoreScheduleResultEvents.CreateList();

            StoreScheduleResultEvents.CreateNewGridEvent({
                startTime:      0,
                eventId:        eventId,
            });

            StoreScheduleResultEvents.NewGridEventGroup.AddFreeRelease({
                name:       fileName,
                duration:   durationValue,
                startTime:  0,
            });

            StoreScheduleResultEvents.AddReleasesFromNewGridEvent( gridEventId );
            StoreScheduleResultEvents.SetListToStore( true );

            setIsOpen( false );

        };
    }

    const change = ( e ) => {
        let val = e.target.value;
        // if( val.indexOf( '\n' ) === -1 ){
            setInputValue( val );
        // };
        
    }

    const changeDuration = ( val  ) => {
        setDurationValue( val );
    }

    const enterHandler = () => {

        let parseResult  = pars_string_by_fileName_and_duration( inputValue );
        setInputValue( '' );
        setFileName( parseResult.fileName );
        if( parseResult.duratin !== null ){
            setDurationValue( parseResult.duratin );
        };
        
    }



    return (
        <div className = 'SEC_AddFreeReleaseAsTextItem'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title =         'Добавить файл из строки'
                width =         { '40em' }
                height =        { '50vh' }

            >

                <AWTextarea 
                    title = { '' }
                    value = { inputValue }
                    onChange = { change }
                    enterHandler = { enterHandler }
                    placeholder = 'После ввода нажмите Enter'
                />

                {/* <AWButtonAdd 
                    // title =         'Сохранить'
                    // icon =          'icon-floppy'
                    isReady = { true }
                    clickHandler = { save }
                /> */}

                <div className = 'SEC_AddFreeReleaseAsTextItem_res_wrap' >
                    <h4>{ fileName }</h4>
                    <div className = 'SEC_AddFree_dur_wrap'>
                        <AWInputDuration
                            title =         ''
                            value =         { durationValue }
                            changeHandler = { changeDuration }
                        />
                    </div>
                    
                </div>

                

                <AWButtonAdd 
                    // title =         'Сохранить'
                    // icon =          'icon-floppy'
                    isReady =       { isReady }
                    clickHandler =  { save }
                />

            </AlertWindowContainer>


            { get_is_active( eventId, releases )? <span className = 'SEC_AddFreeReleaseAsTextItem_text' onClick = { click }>Взять как текст</span>: '' }
            
{/* 
            <input 
                type =          'file' 
                ref =           { inputRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { false }
            /> */}


        </div>
    )

};

export function AddFreeReleaseAsTextItem( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <AddFreeReleaseAsTextItemComponent
            { ...props }
            scheduleEventsList = { scheduleResult.scheduleEventsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
