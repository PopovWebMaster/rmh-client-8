
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharDay.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../redux/companySlice.js';

import { CharDayHeader } from './components/CharDayHeader/CharDayHeader.js';

import { CharDayTimePoint } from './components/CharDayTimePoint/CharDayTimePoint.js';


const CharDayComponent = ( props ) => {

    let {
        YYYY_MM_DD,
        year,
        mounth,
        date,
        dayNum,
        dayName,
        dayNameShort,

        timeToints,

        releaseName,
        charType,

        releaseToggle,
        dayReleaseToggle,

    } = props;

    const create = ( obj ) => {

        let arr = Object.keys( obj );

        let div = arr.map( ( obj_key, index ) => {
            let {
                fill_count,
                sec,
                title,
                time
            } = obj[ obj_key ];

            return (
                <CharDayTimePoint
                    key =           { index }
                    fill_count =    { fill_count }
                    sec =           { sec }
                    title =         { title }
                    time =          { time }
                    releaseName =   { releaseName }
                    charType =      { charType }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                    releaseToggle = { releaseToggle }
                />
            );
        } );

        return div

    }





    return (
        <div className = 'SEC_CharDay'>

            <CharDayHeader 
                YYYY_MM_DD =    { YYYY_MM_DD }
                year =          { year }
                dayNum =        { dayNum }
                dayName =       { dayName }
                dayNameShort =  { dayNameShort }
                date =          { date }
                mounth =        { mounth }
                dayReleaseToggle = { dayReleaseToggle }
            />

            { create( timeToints ) }

            

            
        </div>
    )

};

export function CharDay( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharDayComponent
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
