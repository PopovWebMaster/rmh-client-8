
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_City.scss';

import { selectorData as adminSlice, setCurrentCompanyCity, setCurrentCompanyIsChanged } from './../../../../../../../../redux/adminSlice.js';


const ACE_CityComponent = ( props ) => {

    let {
        currentCompanyCity,
        setCurrentCompanyCity,
        setCurrentCompanyIsChanged,

    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setCurrentCompanyCity( val );
        setCurrentCompanyIsChanged( true );

    }



    return (
        <div className = 'ACE_City'>
            <h4>Город:</h4>

            <input 
                className = 'ACE_City_input'
                type =      'text'
                value =     { currentCompanyCity }
                onChange =  { change }
            />

        </div>
    )

};

export function ACE_City( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <ACE_CityComponent
            { ...props }
            currentCompanyCity = { admin.currentCompanyCity }

            setCurrentCompanyCity = { ( val ) => { dispatch( setCurrentCompanyCity( val ) ) } }
            setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
