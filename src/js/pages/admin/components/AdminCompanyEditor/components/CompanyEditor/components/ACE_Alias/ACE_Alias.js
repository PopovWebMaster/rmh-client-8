
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_Alias.scss';

import { selectorData as adminSlice, setCurrentCompanyAlias, setCurrentCompanyIsChanged } from './../../../../../../../../redux/adminSlice.js';


const ACE_AliasComponent = ( props ) => {

    let {
        currentCompanyAlias,
        setCurrentCompanyAlias,
        setCurrentCompanyIsChanged,

    } = props;

    const change = ( e ) => {
        let val = e.target.value;
        setCurrentCompanyAlias( val );
        setCurrentCompanyIsChanged( true );

    }



    return (
        <div className = 'ACE_Alias'>
            <h4>alias:</h4>

            <input 
                className = 'ACE_Alias_input'
                type =      'text'
                value =     { currentCompanyAlias }
                onChange =  { () => {} }
            />

        </div>
    )

};

export function ACE_Alias( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <ACE_AliasComponent
            { ...props }
            currentCompanyAlias = { admin.currentCompanyAlias }

            setCurrentCompanyAlias = { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }
            setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
