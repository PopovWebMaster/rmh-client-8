

import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ItemMovie2.scss';

import { DateItem } from './components/DateItem/DateItem.js';
import { Time } from './components/Time/Time.js';
import { FileData } from './components/FileData/FileData.js';
import { Duration } from './components/Duration/Duration.js';
import { Graphics } from './components/Graphics/Graphics.js';

const ItemMovie2Component = ( props ) => {

    let {
        item,
        isBacklight
    } = props;

    let { graphics, startTime } = item;
    let [ graphicsIsOpen, setGraphicsIsOpen ] = useState( false );

    useEffect( () => {
        setGraphicsIsOpen( false );
    }, [ graphics ] );

    
    return (
        <div className = { `PRL_ItemMovie2 ${isBacklight? 'isBacklight': ''}` }>
            <div className = 'PRL_ItemMovie2_wrap'>
                <DateItem date = { item.date }/>
                <Time startTime = { item.startTime }/>
                <FileData file = { item.file }/>
                <Duration 
                    fileDuration =          { item.fileDuration }
                    segmentRealDuration =   { item.segmentRealDuration }
                    markIn =                { item.markIn }
                />

                <div className = 'PRL_Duration_graphics_btn'>
                    { graphics.length > 0? (
                        <div
                            onClick = { () => { setGraphicsIsOpen( !graphicsIsOpen ) } }
                        >
                            <span className = { `${graphicsIsOpen? 'icon-up-open-big': 'icon-down-open-big'}` }></span>
                        </div>
                    ): '' }
                </div>

            </div>

            { graphicsIsOpen? (
                <Graphics 
                    graphics = { graphics }
                    startTime = { startTime }
                />
            ): '' }


        </div> 

        

    )

};

export function ItemMovie2( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ItemMovie2Component
            { ...props }
            // searchValue = { playReport.searchValue }
            // calendarIsOpen = { playReport.calendarIsOpen }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
