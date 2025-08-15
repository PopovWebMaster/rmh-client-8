

import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice } from './../../../../../../../../redux/adminSlice.js';
import { setSpinnerIsActive } from './../../../../../../../../redux/spinnerSlice.js';

import { set_current_company_data_to_store } from './../../../../../../vendors/set_current_company_data_to_store.js';
import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';
 

// import './SetCurrentCompanyFromServer.scss';


const SetCurrentCompanyFromServerComponent = ( props ) => {

    let {
        currentCompanyId,
        children,
        setSpinnerIsActive,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( currentCompanyId === null ){
            setIsReady( false );
        }else{
            setSpinnerIsActive( true );

            send_request_to_server({
                route: 'get-company-data',
                data: {
                    companyId: currentCompanyId,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        let { company } = response;
                        set_current_company_data_to_store( company );
                        setSpinnerIsActive( false );
                        setIsReady( true );
                    };
                },
            });

        };

    }, [ currentCompanyId ] );



    return (
        <>{ isReady? children: '' }</>

        

    )

};


export function SetCurrentCompanyFromServer( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <SetCurrentCompanyFromServerComponent
            { ...props }

            currentCompanyId = { admin.currentCompanyId }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}

