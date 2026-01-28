// NewAppComponent


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewAppComponent.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { ItemName } from './components/ItemName/ItemName.js';
import { ItemNum } from './components/ItemNum/ItemNum.js';
import { ItemCategory } from './components/ItemCategory/ItemCategory.js';
import { ItemManagerNotes } from './components/ItemManagerNotes/ItemManagerNotes.js';
import { ItemBlindChar } from './components/ItemBlindChar/ItemBlindChar.js';

import { ItemEvents } from './components/ItemEvents/ItemEvents.js';
import { ItemForceEventId } from './components/ItemForceEventId/ItemForceEventId.js';

import { AlertWindowContainerButtonAdd } from './../../../../../../components/AlertWindowContainerButtonAdd/AlertWindowContainerButtonAdd.js';
import { EventByCategorySelect } from './../../../../../../components/EventByCategorySelect/EventByCategorySelect.js';

import { get_event_by_id } from './../../../../../../helpers/get_event_by_id.js';


const NewAppComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        setSpinnerIsActive,
        setApplicationList,
    } = props;

    // let errorText = 'Заявка с таким названием уже существует. Пожалуйста, придумайте уникальнои имя для заявки.';

    let [ isReady, setIsReady ] = useState( false );

    let [ appName,          setAppName ] = useState( '' );
    let [ appNameIsError,   setAppNameIsError ] = useState( false );
    let [ appNum,           setAppNum ] = useState( '' );
    let [ appNumIsError,    setAppNumIsError ] = useState( false );
    let [ categoryId,       setCategoryId ] = useState( null );
    let [ managerNotes,     setManagerNotes ] = useState( '' );

    let [ eventId,          setEventId ] = useState( null );
    let [ forceEventId,     setForceEventId ] = useState( null );

    let [ isBlindChar, setIsBlindChar ] = useState( false );


    useEffect( () => {
        if( isOpen ){
            setAppName( '' );
            setAppNameIsError( false );
            setAppNum( '' );
            setAppNumIsError( false );
            setCategoryId( null );
            setManagerNotes( '' );
            setEventId( null );
            setForceEventId( null );
            setIsBlindChar( false );
        };

    }, [ isOpen ]);

    useEffect( () => {
        if( appNameIsError || appNumIsError || appName === '' ){
            setIsReady( false );
        }else{
            if( forceEventId === null ){
                setIsReady( false );
            }else{
                setIsReady( true );
            };
        };

    }, [ appNameIsError, appNumIsError, appName, forceEventId ] );

    useEffect( () => {
        if( forceEventId === null ){
            setIsBlindChar( false );
        };
    }, [ forceEventId ] );


    const clickAdd = () => {




        // console.dir( {
        //     applicationName: appName,
        //     applicationNum: appNum,
        //     applicationCategoryId: categoryId,
        //     applicationEventId: eventId,
        //     applicationForceEventId: categoryId === null && eventId === null? forceEventId: null,
        //     applicationManagerNotes: managerNotes,
        // } );


        if( isReady ){

            let event = get_event_by_id( forceEventId );
            let { category_id } = get_event_by_id( forceEventId );
            let event_id = forceEventId;

            if( isBlindChar ){
                event_id = null;
            }

            // console.dir( 'event' );
            // console.dir( event );


            let data = {
                applicationName:            appName,
                applicationNum:             appNum,
                applicationCategoryId:      category_id,
                applicationEventId:         event_id,
                applicationForceEventId:    forceEventId,
                applicationManagerNotes:    managerNotes,
            };

            console.dir( 'data' );
            console.dir( data );

            setSpinnerIsActive( true );
            send_request_to_server({
                route: `add-new-application`,
                // data: {
                //     applicationName: appName,
                //     applicationNum: appNum,
                //     applicationCategoryId: categoryId,
                //     applicationEventId: eventId,
                //     applicationForceEventId: categoryId === null && eventId === null? forceEventId: null,
                //     applicationManagerNotes: managerNotes,
                // },
                data,

                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setApplicationList( response.list );
                        setIsOpen( false );
                    };

                },
            });
        };


    };

    
    return (
        <div className = 'ANApplContainer'>

            <ItemName 
                appName =           { appName }
                appNameIsError =    { appNameIsError }
                setAppNameIsError = { setAppNameIsError }
                setAppName =        { setAppName }

            />

            <ItemNum 
                appNum =            { appNum }
                setAppNum =         { setAppNum }
                appNumIsError =     { appNumIsError }
                setAppNumIsError =  { setAppNumIsError }
            />

            <EventByCategorySelect
                isOpen =        { isOpen }
                value =         { forceEventId }
                changeHandler = { setForceEventId }
                maxHeight =     { 40 } 
            />
            {/* <ItemCategory 
                categoryId =        { categoryId }
                setCategoryId =     { setCategoryId }
            />

            <ItemEvents 
                categoryId =    { categoryId }
                eventId =       { eventId }
                setEventId =    { setEventId }
            />

            <ItemForceEventId
                forceEventId =      { forceEventId }
                categoryId =        { categoryId }
                eventId =           { eventId }
                setForceEventId =   { setForceEventId }
            
            /> */}

            { forceEventId === null? '': (
               <ItemBlindChar
                    isBlindChar =       { isBlindChar }
                    setIsBlindChar =    { setIsBlindChar }
                /> 
            ) }

            

            <ItemManagerNotes 
                managerNotes =      { managerNotes }
                setManagerNotes =   { setManagerNotes }
            />

            <AlertWindowContainerButtonAdd 
                isActive =      { isReady }
                clickHandler =  { clickAdd }
            />

        </div>
    )

};

export function NewAppComponent( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <NewAppComponentComponent
            { ...props }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
