// ACE_Type


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_Type.scss';

import { selectorData as adminSlice } from './../../../../../../../../redux/adminSlice.js';


const ACE_TypeComponent = ( props ) => {

    let {
        currentCompanyType,
        // setCurrentCompanyAlias,
        // setCurrentCompanyIsChanged,

    } = props;

    // const change = ( e ) => {
    //     let val = e.target.value;
    //     setCurrentCompanyAlias( val );
    //     setCurrentCompanyIsChanged( true );

    // }



    return (
        <div className = 'ACE_Type'>
            <h4>Тип компании:</h4>

            <input 
                className = 'ACE_Type_input'
                type =      'text'
                value =     { currentCompanyType }
                onChange =  { () => {} }
            />

        </div>
    )

};

export function ACE_Type( props ){

    const admin = useSelector( adminSlice );
    // const dispatch = useDispatch();

    return (
        <ACE_TypeComponent
            { ...props }
            currentCompanyType = { admin.currentCompanyType }

            // setCurrentCompanyAlias = { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }
            // setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
