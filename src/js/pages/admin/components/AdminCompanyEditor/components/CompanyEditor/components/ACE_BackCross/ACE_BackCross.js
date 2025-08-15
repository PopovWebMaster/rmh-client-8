
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ACE_BackCross.scss';

import { useNavigate } from "react-router-dom";

// import { selectorData as adminSlice, setCurrentCompanyAlias, setCurrentCompanyIsChanged } from './../../../../../../../../redux/adminSlice.js';


const ACE_BackCrossComponent = ( props ) => {

    let {


    } = props;

    let navigate = useNavigate();

    const click = () => {
        navigate( `/admin/company` );
    }


    return (
        <div className = 'ACE_BackCross'>
            <span
                className = 'icon-cancel-2 ACE_BackCross_icon'
                onClick = { click }
            ></span>
        </div>
    )

};

export function ACE_BackCross( props ){

    // const admin = useSelector( adminSlice );
    // const dispatch = useDispatch();

    return (
        <ACE_BackCrossComponent
            { ...props }
            // currentCompanyAlias = { admin.currentCompanyAlias }

            // setCurrentCompanyIsChanged = { ( val ) => { dispatch( setCurrentCompanyIsChanged( val ) ) } }


            


        />
    );


}
