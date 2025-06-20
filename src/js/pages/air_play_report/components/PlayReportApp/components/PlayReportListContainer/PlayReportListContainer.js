
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './PlayReportListContainer.scss';

const PlayReportListContainerComponent = ( props ) => {

    let {
        children,
        entireList,
        backligthPrefixList,
    } = props;

    let [ height, setHeight ] = useState( 0 );

    let containerRef = useRef();

    useEffect(() => {

        let timerId = setTimeout( () => {

            let elem = containerRef.current;
            let { y } = elem.getBoundingClientRect();
            let winHeight = document.documentElement.clientHeight;
            let vh = 100 - Math.round( y * 100 / winHeight ) - 1;
            setHeight( vh );
            clearTimeout( timerId );

        }, 500 );

    }, [ entireList ]);

    useEffect(() => {

        let elem = containerRef.current;
        let { y } = elem.getBoundingClientRect();
        let winHeight = document.documentElement.clientHeight;
        let vh = 100 - Math.round( y * 100 / winHeight ) - 1;
        setHeight( vh );


    }, [ backligthPrefixList ]);
    
    return (
        <div 
            className = 'PRL_PlayReportListContainer'
            ref = { containerRef }
            style = {{ height: `${height}vh`}}
        >
            { entireList.length > 0? children: '' }
        </div>


    )

};

export function PlayReportListContainer( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <PlayReportListContainerComponent
            { ...props }
            entireList = { playReport.entireList }
            backligthPrefixList = { playReport.backligthPrefixList }

            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}

