
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './CEE_Component.scss';

import { CEE_EventAppearance } from './../CEE_EventAppearance/CEE_EventAppearance.js';
import { CEE_TimeTrack } from './../CEE_TimeTrack/CEE_TimeTrack.js';
import { CEE_SaveButton } from './../CEE_SaveButton/CEE_SaveButton.js';


const CEE_ComponentComponent = ( props ) => {

    let {
        saveHandler,

    } = props;
    
    return (
        <div className = 'CEE_Component'>

            <CEE_EventAppearance />
            <CEE_TimeTrack />
            <CEE_SaveButton saveHandler = { saveHandler } />
           
            
        </div>
    )

};

export function CEE_Component( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <CEE_ComponentComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
