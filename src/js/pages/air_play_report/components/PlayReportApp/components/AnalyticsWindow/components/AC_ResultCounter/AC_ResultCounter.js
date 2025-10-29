
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';

import './AC_ResultCounter.scss';



const AC_ResultCounterComponent = ( props ) => {

    let {

        analitycsIsActive,
        // setAnalitycsIsActive,

    } = props;


    
    return (

        <div className = 'AC_ResultCounter'>

          AC_ResultCounter
        </div>

    )

};

export function AC_ResultCounter( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const dispatch = useDispatch();

    return (
        <AC_ResultCounterComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
