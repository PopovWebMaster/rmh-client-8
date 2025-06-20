
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './ItemMovie.scss';

import { Time } from './components/Time/Time.js';
import { FileData } from './components/FileData/FileData.js';
import { Duration } from './components/Duration/Duration.js';

import { Graphics } from './components/Graphics/Graphics.js';


const ItemMovieComponent = ( props ) => {

    let {
        item,
    } = props;

    
    return (<>
        <div className = 'PRL_ItemMovie'>
            <Time 
                startTime = { item.startTime }
                date =      { item.date }

            />
            <FileData 
                file = { item.file }
            />

            <Duration 
                fileDuration = { item.fileDuration }
                segmentRealDuration = { item.segmentRealDuration }
                markIn = { item.markIn }
            
            />

        </div> 
        <Graphics 
            graphics = { item.graphics }
            startTime = { item.startTime }
        />
        

    </>)

};

export function ItemMovie( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ItemMovieComponent
            { ...props }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
