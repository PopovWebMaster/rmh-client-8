
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharDayHeader.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../../../redux/companySlice.js';

import { MOUNTH_NAME } from './../../../../../../../../../../../../config/mounth.js';


const CharDayHeaderComponent = ( props ) => {

    let {
        YYYY_MM_DD,
        year,
        dayNum,
        dayName,
        dayNameShort,
        date,
        mounth,

        dayReleaseToggle,

    } = props;

    // let { 
    //     YYYY_MM_DD,
    //     year,
    //     mounth,
    //     date,
    //     dayNum,
    //     dayName,
    //     dayNameShort,

    //     timeToints,
    //  } = day




    return (
        <div className = 'SEC_CharDayHeader'>
            <div className = 'SEC_CharDay_date'>
                <span >{ `${date}  ${MOUNTH_NAME[ mounth ]} ${year}` }</span>
                <span className = 'SEC_CharDay_day'>{ dayNameShort }</span>
            </div>

            <div className = 'SEC_CharDay_release_count'>
                <span className = 'SEC_CharDay_release_count_title'>Выпуски:</span>
                <span className = 'SEC_CharDay_release_count_filled'>0</span>
                <span className = 'SEC_CharDay_release_count_slash'>/</span>
                <span className = 'SEC_CharDay_release_count_all'>20</span>
            </div>

            <div className = 'SEC_CharDay_release_duration'>
                <span className = 'SEC_CharDay_release_count_title'>Хрон. общий:</span>
                <span className = 'SEC_CharDay_release_count_time'>00:00:50</span>
                <span className = 'SEC_CharDay_release_count_sec'>200</span>
            </div>

            <div className = 'SEC_CharDay_release_all_toggle'>
                <span 
                    className = 'SEC_CharDay_btn'
                    onClick = { () => { dayReleaseToggle( YYYY_MM_DD ) } }
                >
                    <span className = 'SEC_CharDay_btn_all'>Все</span>
                    <span className = 'SEC_CharDay_btn_tog'>Вкл / Выкл</span>
                </span>
            </div>


            
        </div>
    )

};

export function CharDayHeader( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharDayHeaderComponent
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
