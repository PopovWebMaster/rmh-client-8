
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as airFilesSlice } from './../../../../redux/airFilesSlice.js';

import './FilesPeriodButton.scss';

import { FPBDateValue } from './components/FPBDateValue/FPBDateValue.js';

import { FPBCalendarBtn } from './components/FPBCalendarBtn/FPBCalendarBtn.js';



const FilesPeriodButtonComponent = ( props ) => {

    let {
        periodFrom,
        periodTo,
    } = props;
    
    return (
        <div className = 'filesPeriodButton'>

            <h4>Период:</h4>

            <FPBDateValue value = { periodFrom }/>

            <span className = 'FPB_tire'>‒</span>

            <FPBDateValue value = { periodTo }/>

            <FPBCalendarBtn />



        </div>
    )

};

export function FilesPeriodButton( props ){

    const airFiles = useSelector( airFilesSlice );
    // const dispatch = useDispatch();

    return (
        <FilesPeriodButtonComponent
            { ...props }
            periodFrom = { airFiles.periodFrom }
            periodTo = { airFiles.periodTo }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
