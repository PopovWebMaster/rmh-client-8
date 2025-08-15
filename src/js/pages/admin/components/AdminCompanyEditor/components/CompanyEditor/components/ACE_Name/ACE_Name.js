
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_Name.scss';

import { selectorData as adminSlice, setCurrentCompanyName, setCurrentCompanyIsChanged } from './../../../../../../../../redux/adminSlice.js';


const ACE_NameComponent = ( props ) => {

    let {
        currentCompanyName,
        setCurrentCompanyName,
        setCurrentCompanyIsChanged,

    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setCurrentCompanyName( val );
        setCurrentCompanyIsChanged( true );

    }



    return (
        <div className = 'ACE_Name'>
            <h4>Название:</h4>

            <input 
                className = 'ACE_Name_input'
                type =      'text'
                value =     { currentCompanyName }
                onChange =  { change }
            />

        </div>
    )

};

export function ACE_Name( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <ACE_NameComponent
            { ...props }
            currentCompanyName = { admin.currentCompanyName }

            setCurrentCompanyName = { ( val ) => { dispatch( setCurrentCompanyName( val ) ) } }
            setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
