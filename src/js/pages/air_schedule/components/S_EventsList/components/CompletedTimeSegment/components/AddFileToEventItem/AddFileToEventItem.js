
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddFileToEventItem.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { MIN_EVENT_DURATION_SEC } from './../../../../../../../../config/layout.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWGetFileForEvent } from './../../../../../../../../components/AlertWindowContainer/AWGetFileForEvent/AWGetFileForEvent.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';

import { ARFE_Button } from './ARFE_Button/ARFE_Button.js';

const AddFileToEventItemComponent = ( props ) => {

    let {
        gridEventId,
        releases,
        eventId,
        firstSegmentId,
        setDragIsActive,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ fileName, setFileName ] = useState( '' );
    let [ fileDuration, setFileDuration ] = useState( null );
    let [ isReady, setIsReady ] = useState( false );


    useEffect( () => {
        if( isOpen ){
            setDragIsActive( false );

        }else{
            setDragIsActive( true );
            setFileName( '' );
            setFileDuration( null );
        };

    }, [ isOpen ] );

    useEffect( () => {
        if( fileName.trim() === '' ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ fileName ] );

    const save = () => {

        console.dir( {
            fileDuration,
            fileName,
        } );
        if( fileName !== '' ){

            let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
            StoreScheduleResultEvents.CreateList();

            StoreScheduleResultEvents.CreateNewGridEvent({
                startTime:      0,
                eventId:        eventId,
            });

            StoreScheduleResultEvents.NewGridEventGroup.AddFreeRelease({
                name:       fileName,
                duration:   fileDuration === null? MIN_EVENT_DURATION_SEC: fileDuration,
                startTime:  0,
            });

            StoreScheduleResultEvents.AddReleasesFromNewGridEvent( gridEventId );
            StoreScheduleResultEvents.SetListToStore( true );

            setIsOpen( false );

        };

        // setDragIsActive( true );
    }


    return (
        <div className = 'SEC_AddFileToEventItem'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title =         'Добавить файл'
                width =         { '40em' }
                height =        { '50vh' }

            >

                <AWGetFileForEvent
                    fileName =          { fileName }
                    setFileName =       { setFileName }
                    fileDuration =      { fileDuration }
                    setFileDuration =   { setFileDuration }
                    isOpen =            { isOpen }
                    setIsOpen =         { setIsOpen }

                />

                <AWButtonAdd
                    title =         'Сохранить'
                    icon =          'icon-floppy'
                    isReady =       { isReady }
                    clickHandler =  { save }
                />
                

            </AlertWindowContainer>


            <ARFE_Button
                gridEventId =       { gridEventId }
                releases =          { releases }
                eventId =           { eventId }
                firstSegmentId =    { firstSegmentId }
                setIsOpen =         { setIsOpen }
            />
            

        </div>
    )

};

export function AddFileToEventItem( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <AddFileToEventItemComponent
            { ...props }
            // scheduleEventsList = { scheduleResult.scheduleEventsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
