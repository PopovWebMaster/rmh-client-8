// CharTable


import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharTable.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../redux/companySlice.js';


import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { CharDay } from './../CharDay/CharDay.js';



const CharTableComponent = ( props ) => {

    let {
        dayList,
        charType,
        releaseName,
        releaseToggle,
        dayReleaseToggle,

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
                <CharDay
                    key = { index }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                    year =          { year }
                    mounth =        { mounth }
                    date =          { date }
                    dayNum =        { dayNum }
                    dayName =       { dayName }
                    dayNameShort =  { dayNameShort }
                    timePoints =    { timePoints }
                    releaseName =   { releaseName }
                    charType =      { charType }
                    releaseToggle = { releaseToggle }
                    dayReleaseToggle = { dayReleaseToggle }
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

export function CharTable( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharTableComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
