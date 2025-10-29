
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';

import './AnalyticsContainer.scss';

import { AC_ResultCounter } from './../AC_ResultCounter/AC_ResultCounter.js';
import { AC_EventsTree } from './../AC_EventsTree/AC_EventsTree.js';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { AC_CreateEventsTreeAtStart } from './../AC_CreateEventsTreeAtStart/AC_CreateEventsTreeAtStart.js';



const AnalyticsContainerComponent = ( props ) => {

    let {

        analitycsIsActive,
        // setAnalitycsIsActive,

    } = props;


    
    return (
        <AC_CreateEventsTreeAtStart>

            <div className = 'analyticsContainer'>

                <div className = 'AC_top_panel'>

                    <AC_ResultCounter />

                </div>

                <div className = 'AC_body'>
                    {/* <ScrollContainer height = 'calc( 93vh - 6.4em )' > */}
                        <AC_EventsTree />
                    {/* </ScrollContainer>    */}
                </div>

            </div>
            
        </AC_CreateEventsTreeAtStart>
    )

};

export function AnalyticsContainer( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const dispatch = useDispatch();

    return (
        <AnalyticsContainerComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
