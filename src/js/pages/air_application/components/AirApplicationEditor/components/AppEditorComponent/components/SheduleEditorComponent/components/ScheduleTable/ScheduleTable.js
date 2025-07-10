
import React  from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ScheduleTable.scss';


import { selectorData as scheduleSlise } from './../../../../../../../../../../redux/scheduleSlise.js';

import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

// import { CharDay } from './../CharDay/CharDay.js';
import { ScheduleDay } from './../ScheduleDay/ScheduleDay.js';



const ScheduleTableComponent = ( props ) => {

    let {

        Schedule,

        // charType,
        dayList,
        // releaseName,


        // dayList,
        // charType,
        // releaseName,
        // releaseToggle,
        // dayReleaseToggle,

    } = props;


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
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

            } = item;

            return (
                <ScheduleDay
                    key = { index }
                    Schedule =      { Schedule }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                    year =          { year }
                    mounth =        { mounth }
                    date =          { date }
                    dayNum =        { dayNum }
                    dayName =       { dayName }
                    dayNameShort =  { dayNameShort }
                    timePoints =    { timePoints }
                    // releaseName =   { releaseName }
                    // charType =      { charType }
                    // releaseToggle = { releaseToggle }
                    // dayReleaseToggle = { dayReleaseToggle }
                    pointsLength = { pointsLength }
                    releaseLength = { releaseLength }
                    dayDuration =  { dayDuration }
                />
            );


        } );

        return div;

    };




    return (
       <ScrollContainer>
            <div className = 'SEC_body_center_wrap'>

                { create( dayList ) }

                
            </div>
        </ScrollContainer>
    )

};

export function ScheduleTable( props ){

    const schedule = useSelector( scheduleSlise );

    const dispatch = useDispatch();

    return (
        <ScheduleTableComponent
            { ...props }
            charType = { schedule.charType }
            dayList = { schedule.dayList }
            releaseName = { schedule.releaseName }



            // currentApplicationId = { application.currentApplicationId }
            // application = { application }

            // currentCompanyAlias = { company.currentCompanyAlias }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            // setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
