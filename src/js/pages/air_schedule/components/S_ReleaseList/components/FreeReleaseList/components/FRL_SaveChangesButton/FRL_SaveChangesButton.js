
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FRL_SaveChangesButton.scss';

import { selectorData as scheduleResultSlise, setFreeReleasesIsChanges } from './../../../../../../../../redux/scheduleResultSlise.js';
import { setSpinnerIsActive } from './../../../../../../../../redux//spinnerSlice.js';


import { PageBodySaveButton } from './../../../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';


const FRL_SaveChangesButtonComponent = ( props ) => {

    let {
       freeReleasesIsChanges,
       freeReleasesList,

       setFreeReleasesIsChanges,

       setSpinnerIsActive,
    } = props;

    const save = () => {

        if( access_right( 'schedule_edit' ) ){
            if( freeReleasesIsChanges ){

                setSpinnerIsActive( true );

                send_request_to_server({
                    route: 'save-free-releases-list',
                    data: {
                        freeReleasesList,
                    },
                    successCallback: ( response ) => {
                        console.dir( 'response' );
                        console.dir( response );

                        setSpinnerIsActive( false );
                        setFreeReleasesIsChanges( false );

                    }
                });

            };
        };



    }


    return (
        <PageBodySaveButton
            isChanged =     { freeReleasesIsChanges }
            clickHandler =  { save }
        />
    )

};

export function FRL_SaveChangesButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <FRL_SaveChangesButtonComponent
            { ...props }

            freeReleasesIsChanges = { scheduleResult.freeReleasesIsChanges }
            freeReleasesList = { scheduleResult.freeReleasesList }

            setFreeReleasesIsChanges = { ( val ) => { dispatch( setFreeReleasesIsChanges( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


            

        />
    );


}
