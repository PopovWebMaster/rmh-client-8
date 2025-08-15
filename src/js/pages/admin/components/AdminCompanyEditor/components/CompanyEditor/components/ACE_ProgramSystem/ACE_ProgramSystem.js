// ACE_ProgramSystem


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_ProgramSystem.scss';

import { selectorData as adminSlice, setCurrentCompanyProgramSystem, setCurrentCompanyIsChanged } from './../../../../../../../../redux/adminSlice.js';


const ACE_ProgramSystemComponent = ( props ) => {

    let {
        currentCompanyProgramSystem,
        setCurrentCompanyProgramSystem,
        setCurrentCompanyIsChanged,
        defaultProgramSystem,

    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setCurrentCompanyProgramSystem( val );
        setCurrentCompanyIsChanged( true );

    }

    const set_default = () => {

        setCurrentCompanyProgramSystem( defaultProgramSystem );
        setCurrentCompanyIsChanged( true );
    }



    return (
        <div className = 'ACE_ProgramSystem'>
            <h4>program system:</h4>

            <input 
                className = 'ACE_ProgramSystem_input'
                type =      'text'
                value =     { currentCompanyProgramSystem }
                onChange =  { change }
            />

            <span
                className = 'ACE_ProgramSystem_set_def'
                onClick = { set_default }
            >{ defaultProgramSystem }</span>


        </div>
    )

};

export function ACE_ProgramSystem( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <ACE_ProgramSystemComponent
            { ...props }
            currentCompanyProgramSystem = { admin.currentCompanyProgramSystem }
            defaultProgramSystem = { admin.defaultProgramSystem }


            setCurrentCompanyProgramSystem = { ( val ) => { dispatch( setCurrentCompanyProgramSystem( val ) ) } }
            setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
