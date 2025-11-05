
import React, { useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';

// import './AC_CreateEventsTreeAtStart.scss';

import { AnalitycsEventsTreeClass } from './../../../../../../../../classes/AnalitycsEventsTreeClass.js';


const AC_CreateEventsTreeAtStartComponent = ( props ) => {

    let {

        analitycsIsActive,
        // setAnalitycsIsActive,
        children,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( analitycsIsActive ){

            let AnalitycsEventsTree = new AnalitycsEventsTreeClass();
            AnalitycsEventsTree.Create();
            AnalitycsEventsTree.SetEventsTreeToStore();

            // console.dir( AnalitycsEventsTree );

            setIsReady( true );

        }else{
            let AnalitycsEventsTree = new AnalitycsEventsTreeClass();
            AnalitycsEventsTree.ClearStore();
            setIsReady( false );
        };

    }, [ analitycsIsActive ] );

    return (<>{ isReady? children: ''}</>)

};

export function AC_CreateEventsTreeAtStart( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const dispatch = useDispatch();

    return (
        <AC_CreateEventsTreeAtStartComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
