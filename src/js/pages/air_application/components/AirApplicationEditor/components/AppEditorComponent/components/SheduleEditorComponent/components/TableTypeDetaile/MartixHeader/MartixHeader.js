
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MartixHeader.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';
// import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';
// import { BlindTimePointAddRow } from './BlindTimePointAddRow/BlindTimePointAddRow.js';
// import { SetMatrixToStore } from './SetMatrixToStore/SetMatrixToStore.js';

import { OneHeaderItem } from './../OneHeaderItem/OneHeaderItem.js';
import { BlindTimePointAddRow } from './../BlindTimePointAddRow/BlindTimePointAddRow.js';


const MartixHeaderComponent = ( props ) => {

    let {
        Schedule,

        dayList,
    } = props;


    const create = ( list ) => {

        let div = list.map( ( item, index ) => {
            let {
                YYYY_MM_DD,
                year,
                mounth,
                date,
                dayNum,
                dayName,
                dayNameShort,
                // timePoints,
                pointsLength,
                releaseLength,
                dayDuration,
                

            } = item;

            let col_class_name = `col_${index}`;

            return (
                <OneHeaderItem
                    key = { index }
                    Schedule = { Schedule }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                    year =          { year }
                    dayNum =        { dayNum }
                    dayName =       { dayName }
                    dayNameShort =  { dayNameShort }
                    date =          { date }
                    mounth =        { mounth }
                    pointsLength =  { pointsLength }
                    releaseLength = { releaseLength }
                    dayDuration =   { dayDuration }
                    col_class_name = { col_class_name }
                />
            ); 

        });

        return div

    }

    return (

        <div className = 'SB_TTD_MartixHeader'>
            <BlindTimePointAddRow Schedule = { Schedule }/>
            
            { create( dayList ) }
        </div>

                
    )

};

export function MartixHeader( props ){

    const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <MartixHeaderComponent
            { ...props }

            dayList =       { schedule.dayList }

            // modeMix = { currentSubApplication.modeMix }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
