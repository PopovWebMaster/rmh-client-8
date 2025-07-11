
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleDay.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ScheduleDayHeader } from './components/ScheduleDayHeader/ScheduleDayHeader.js';
import { ScheduleDayTimePoint } from './components/ScheduleDayTimePoint/ScheduleDayTimePoint.js';

const ScheduleDayComponent = ( props ) => {

    let {
        Schedule,
        YYYY_MM_DD,
        year,
        mounth,
        date,
        dayNum,
        dayName,
        dayNameShort,
        timePoints,
        pointsLength,
        releaseLength,
        dayDuration,

    } = props;

    const create = ( obj ) => {

        let arr = Object.keys( obj );

        let div = arr.map( ( obj_key, index ) => {
            let {
                fill_count,
                sec,
                title,
                time,
                grid_event_id

            } = obj[ obj_key ];

            return (
                <ScheduleDayTimePoint
                    key =           { index }
                    fill_count =    { fill_count }
                    sec =           { sec }
                    title =         { title }
                    time =          { time }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                    Schedule = { Schedule }
                    grid_event_id = { grid_event_id }
                />
            );
        } );

        return div

    }

    return (
        <div className = 'SEC_CharDay'>

            <ScheduleDayHeader 
                Schedule = { Schedule }
                YYYY_MM_DD =    { YYYY_MM_DD }
                year =          { year }
                dayNum =        { dayNum }
                dayName =       { dayName }
                dayNameShort =  { dayNameShort }
                date =          { date }
                mounth =        { mounth }
                pointsLength = { pointsLength }
                releaseLength = { releaseLength }
                dayDuration = { dayDuration }
            />

            { create( timePoints ) }

        </div>
    )

};

export function ScheduleDay( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleDayComponent
            { ...props }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
