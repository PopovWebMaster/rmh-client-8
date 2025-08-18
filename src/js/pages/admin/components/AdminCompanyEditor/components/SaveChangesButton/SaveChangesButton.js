
import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice, setCurrentCompanyIsChanged } from './../../../../../../redux/adminSlice.js';
import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';


import './SaveChangesButton.scss';

import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_current_company_data_to_store } from './../../../../vendors/set_current_company_data_to_store.js';


const SaveChangesButtonComponent = ( props ) => {

    let {
        currentCompanyIsChanged,

        currentCompanyId,
        currentCompanyName,
        currentCompanyProgramSystem,
        currentCompanyLegalName,
        currentCompanyCity,

        setSpinnerIsActive,
        setCurrentCompanyIsChanged,

    } = props;

    const click = () => {
        if( currentCompanyIsChanged ){
            setSpinnerIsActive( true );


            send_request_to_server({
                route: 'change-company-data',
                data: {
                    companyId:              currentCompanyId,
                    companyName:            currentCompanyName,
                    companyProgramSystem:   currentCompanyProgramSystem,
                    companyLegalName:       currentCompanyLegalName,
                    companyCity:            currentCompanyCity,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );

                    if( response.ok ){
                        set_current_company_data_to_store( response.company );

                        setSpinnerIsActive( false );
                        setCurrentCompanyIsChanged( false );
                    };

                },
            });
            
            



        };
    }






    return (

        <PageBodySaveButton
            isChanged = { currentCompanyIsChanged }
            clickHandler = { click }
        />


        

    )

};


export function SaveChangesButton( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <SaveChangesButtonComponent
            { ...props }

            currentCompanyIsChanged =       { admin.currentCompanyIsChanged }

            currentCompanyId =              { admin.currentCompanyId }
            currentCompanyName =            { admin.currentCompanyName }
            currentCompanyProgramSystem =   { admin.currentCompanyProgramSystem }
            currentCompanyLegalName =       { admin.currentCompanyLegalName }
            currentCompanyCity =            { admin.currentCompanyCity }



            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }

            

        />
    );


}
