
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';

import './AnalyticsContainer.scss';

import { AC_ResultCounter }             from './../AC_ResultCounter/AC_ResultCounter.js';
import { AC_CurrentDay }                from './../AC_CurrentDay/AC_CurrentDay.js';
import { AC_EventsTree }                from './../AC_EventsTree/AC_EventsTree.js';
import { AC_CreateEventsTreeAtStart }   from './../AC_CreateEventsTreeAtStart/AC_CreateEventsTreeAtStart.js';
import { AC_AllCounterTable }           from './../AC_AllCounterTable/AC_AllCounterTable.js';

const AnalyticsContainerComponent = ( props ) => {

    let {
        isOpen,
        // analitycsIsActive,
        // setAnalitycsIsActive,

    } = props;


    
    return (
        <AC_CreateEventsTreeAtStart>

            <div className = 'analyticsContainer'>

                <div className = 'AC_top_panel'>
                    <AC_CurrentDay />
                    { isOpen? <AC_AllCounterTable />: '' }
                </div>

                <div className = 'AC_body'>
                    { isOpen? <AC_EventsTree />: '' }
                    
                </div>

            </div>
            
        </AC_CreateEventsTreeAtStart>
    )

};

export function AnalyticsContainer( props ){

    // const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    // const dispatch = useDispatch();

    return (
        <AnalyticsContainerComponent
            { ...props }
            // analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
