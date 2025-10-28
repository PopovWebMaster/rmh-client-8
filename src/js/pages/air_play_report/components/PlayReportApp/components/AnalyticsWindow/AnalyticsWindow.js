
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise, setAnalitycsIsActive } from './../../../../../../redux/playReportAnalyticsSlise.js';

import './AnalyticsWindow.scss';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


const AnalyticsWindowComponent = ( props ) => {

    let {

        analitycsIsActive,
        setAnalitycsIsActive,

    } = props;


    
    return (

        <div className = 'analyticsWindow'>

            <AlertWindowContainer
                isOpen =    { analitycsIsActive }
                setIsOpen = { setAnalitycsIsActive }
                title =     'Аналитика за текущий день'
                width =     '97vw'
                height =    '93vh'
            >
                <div>Она здесь скоро будет, ждём...</div>
            </AlertWindowContainer>
            
        </div>

    )

};

export function AnalyticsWindow( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const dispatch = useDispatch();

    return (
        <AnalyticsWindowComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
