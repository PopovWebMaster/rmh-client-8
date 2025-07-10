
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleDayHeader.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { MOUNTH_NAME } from './../../../../../../../../../../../../config/mounth.js';
import { convert_sec_to_time } from './../../../../../../../../../../../../helpers/convert_sec_to_time.js';

const ScheduleDayHeaderComponent = ( props ) => {

    let {
        Schedule,
        YYYY_MM_DD,
        year,
        dayNum,
        dayName,
        dayNameShort,
        date,
        mounth,
        pointsLength,
        releaseLength,
        dayDuration,

    } = props;

    const dayReleaseToggle = () => {
        Schedule.AllDayReleaseToggle( YYYY_MM_DD );
    };

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
                    onClick = { () => { dayReleaseToggle() } }
                >
                    <span className = 'SEC_CharDay_btn_all'>Все</span>
                    <span className = 'SEC_CharDay_btn_tog'>Вкл / Выкл</span>
                </span>
            </div>
        </div>
    )

};

export function ScheduleDayHeader( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleDayHeaderComponent
            { ...props }

            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

        />
    );


}
