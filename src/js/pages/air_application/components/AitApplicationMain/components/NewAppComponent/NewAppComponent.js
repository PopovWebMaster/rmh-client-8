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

import { ItemEvents } from './components/ItemEvents/ItemEvents.js';

import { AlertWindowContainerButtonAdd } from './../../../../../../components/AlertWindowContainerButtonAdd/AlertWindowContainerButtonAdd.js'


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

    let [ eventId,       setEventId ] = useState( null );



    useEffect( () => {
        if( isOpen ){
            setAppName( '' );
            setAppNameIsError( false );
            setAppNum( '' );
            setAppNumIsError( false );
            setCategoryId( null );
            setManagerNotes( '' );
            setEventId( null );
        };

    }, [ isOpen ]);

    useEffect( () => {
        if( appNameIsError || appNumIsError || appName === '' ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ appNameIsError, appNumIsError, appName ] );


    const clickAdd = () => {
        if( isReady ){

            setSpinnerIsActive( true );
            send_request_to_server({
                route: `add-new-application`,
                data: {
                    applicationName: appName,
                    applicationNum: appNum,
                    applicationCategoryId: categoryId,
                    applicationEventId: eventId,

                    applicationManagerNotes: managerNotes,

                },

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

            <ItemCategory 
                categoryId =        { categoryId }
                setCategoryId =     { setCategoryId }
            />

            <ItemEvents 
                categoryId =    { categoryId }
                eventId =       { eventId }
                setEventId =    { setEventId }
            />

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
