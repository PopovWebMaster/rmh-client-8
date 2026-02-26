
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as applicationSlice, setCurrentAppIsChanged } from './../../../../../../redux/applicationSlice.js';

import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { set_application_data_to_store } from './../../vendors/set_application_data_to_store.js';


const SaveApplicationChangesComponent = ( props ) => {

    let {
        currentApplicationId,
        currentAppName,
        currentAppCategoryId,
        currentAppNum,
        currentAppIsChanged,
        currentAppManagerNotes,
        setSpinnerIsActive,
        // setCurrentAppIsChanged,

        currentAppManagerId,

    } = props;

    useEffect(() => {
        if( currentAppIsChanged ){
            window.onbeforeunload = ( ev ) => {
                ev.preventDefault();
                ev.returnValue = 'Are you sure you want to close?';
                // return 
            };
        }else{
            window.onbeforeunload = null
        };
    }, [ currentAppIsChanged ]);


    const click = () => {
        if( currentAppIsChanged ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `seve-application-data`,
                data: { 

                    applicationId:              currentApplicationId,
                    applicationName:            currentAppName,
                    applicationCategoryId:      currentAppCategoryId,
                    applicationNum:             currentAppNum,
                    applicationManagerNotes:    currentAppManagerNotes,

                    applicationManagerId:    currentAppManagerId,


                    
                },

                successCallback: ( response ) => {

                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        set_application_data_to_store( response.application, response.applicationList );
                        setSpinnerIsActive( false );

                    };
                },
            });

        };
        
    };


    return (
        <PageBodySaveButton 
            isChanged = { currentAppIsChanged }
            clickHandler = { click }
        />
    )

};

export function SaveApplicationChanges( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <SaveApplicationChangesComponent
            { ...props }
            currentApplicationId =  { application.currentApplicationId }

            currentAppName =            { application.currentAppName }
            currentAppCategoryId =      { application.currentAppCategoryId }
            currentAppNum =             { application.currentAppNum }
            currentAppManagerNotes =    { application.currentAppManagerNotes }

            currentAppIsChanged =  { application.currentAppIsChanged }
            currentAppManagerId =  { application.currentAppManagerId }


            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setCurrentAppIsChanged =    { ( val ) => { dispatch( setCurrentAppIsChanged( val ) ) } }


            


        />
    );


}
