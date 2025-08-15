
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_LegalName.scss';

import { selectorData as adminSlice, setCurrentCompanyLegalName, setCurrentCompanyIsChanged } from './../../../../../../../../redux/adminSlice.js';


const ACE_LegalNameComponent = ( props ) => {

    let {
        currentCompanyLegalName,
        setCurrentCompanyLegalName,
        setCurrentCompanyIsChanged,

    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setCurrentCompanyLegalName( val );
        setCurrentCompanyIsChanged( true );

    }



    return (
        <div className = 'ACE_LegalName'>
            <h4>Юридическое название:</h4>

            <input 
                className = 'ACE_LegalName_input'
                type =      'text'
                value =     { currentCompanyLegalName }
                onChange =  { change }
            />

        </div>
    )

};

export function ACE_LegalName( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <ACE_LegalNameComponent
            { ...props }
            currentCompanyLegalName = { admin.currentCompanyLegalName }

            setCurrentCompanyLegalName = { ( val ) => { dispatch( setCurrentCompanyLegalName( val ) ) } }
            setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
