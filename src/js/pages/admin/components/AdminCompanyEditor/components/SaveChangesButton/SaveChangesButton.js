
import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice, setCurrentCompanyId } from './../../../../../../redux/adminSlice.js';
import { useNavigate } from "react-router-dom";

import './SaveChangesButton.scss';

import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js'


const SaveChangesButtonComponent = ( props ) => {

    let {
        currentCompanyIsChanged,

    } = props;

    const click = () => {
        if( currentCompanyIsChanged ){
            console.log( 'SaveChangesButton' );

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

            currentCompanyIsChanged = { admin.currentCompanyIsChanged }
            // setCurrentCompanyId = { ( val ) => { dispatch( setCurrentCompanyId( val ) ) } }

        />
    );


}
