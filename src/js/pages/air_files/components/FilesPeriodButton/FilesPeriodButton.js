// PeriodButton


import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './FilesPeriodButton.scss';

import { FPBDateValue } from './components/FPBDateValue/FPBDateValue.js';

import { FPBCalendarBtn } from './components/FPBCalendarBtn/FPBCalendarBtn.js';



const FilesPeriodButtonComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <div className = 'filesPeriodButton'>

            <h4>Период:</h4>

            <FPBDateValue value = { null }/>

            <span className = 'FPB_tire'>‒</span>

            <FPBDateValue value = { 100 }/>

            <FPBCalendarBtn />



        </div>
    )

};

export function FilesPeriodButton( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <FilesPeriodButtonComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
