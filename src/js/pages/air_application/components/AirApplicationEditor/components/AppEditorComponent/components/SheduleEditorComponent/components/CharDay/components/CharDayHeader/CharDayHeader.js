
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharDayHeader.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../../../redux/companySlice.js';

import { MOUNTH_NAME } from './../../../../../../../../../../../../config/mounth.js';
import { convert_sec_to_time } from './../../../../../../../../../../../../helpers/convert_sec_to_time.js';


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
        pointsLength,
        releaseLength,
        dayDuration,

    } = props;



    return (
        <div className = 'SEC_CharDayHeader'>
            <div className = 'SEC_CharDay_date'>
                <span >{ `${date}  ${MOUNTH_NAME[ mounth ]} ${year}` }</span>
                <span className = 'SEC_CharDay_day'>{ dayNameShort }</span>
            </div>

            <div className = 'SEC_CharDay_release_count'>
                <span className = 'SEC_CharDay_release_count_title'>Выпуски:</span>
                <span className = 'SEC_CharDay_release_count_filled'>{ releaseLength }</span>
                <span className = 'SEC_CharDay_release_count_slash'>/</span>
                <span className = 'SEC_CharDay_release_count_all'>{ pointsLength }</span>
            </div>

            <div className = 'SEC_CharDay_release_duration'>
                <span className = 'SEC_CharDay_release_count_title'>Хрон. общий:</span>
                <span className = 'SEC_CharDay_release_count_time'>{ convert_sec_to_time( dayDuration ) }</span>
                <span className = 'SEC_CharDay_release_count_sec'>{ dayDuration }</span>
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
