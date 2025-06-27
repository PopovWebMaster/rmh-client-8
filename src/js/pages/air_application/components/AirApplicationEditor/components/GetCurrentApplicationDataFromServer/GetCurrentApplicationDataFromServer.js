
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as applicationSlice } from './../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { set_application_data_to_store } from './../../vendors/set_application_data_to_store.js'

const GetCurrentApplicationDataFromServerComponent = ( props ) => {

    let {
        children,

        currentApplicationId,
        setSpinnerIsActive,


    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        setIsReady( false );
        setSpinnerIsActive( true );

        send_request_to_server({
            route: `get-application-data`,
            data: { 
                applicationId: currentApplicationId,
            },

            successCallback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    set_application_data_to_store( response.application );
                    setSpinnerIsActive( false );
                    setIsReady( true );
                };

            },
        });

       
    }, [ currentApplicationId ] );

    return (<>{ isReady? children: '' }</>)

};

export function GetCurrentApplicationDataFromServer( props ){

    const application = useSelector( applicationSlice );

    const dispatch = useDispatch();

    return (
        <GetCurrentApplicationDataFromServerComponent
            { ...props }
            currentApplicationId = { application.currentApplicationId }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
