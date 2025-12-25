
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OneHeaderItem.scss';

import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../../redux/currentSubApplicationSlise.js';

import { MOUNTH_NAME } from './../../../../../../../../../../../config/mounth.js';
import { convert_sec_to_time } from './../../../../../../../../../../../helpers/convert_sec_to_time.js';

const OneHeaderItemComponent = ( props ) => {

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

        modeShort,
        col_class_name = '',

    } = props;

    const dayReleaseToggle = () => {
        Schedule.AllDayReleaseToggle( YYYY_MM_DD );
    };

    const mouse_over = ( className ) => {
        const boxes = document.querySelectorAll( `.SB_TTD_MatrixCell.${className}` ); 

        boxes.forEach( ( box ) => { 
            box.style.backgroundColor = '#c2faff6e'; 
        });
    }

    const mouse_leave = ( className ) => {
        const boxes = document.querySelectorAll( `.SB_TTD_MatrixCell.${className}` ); 
        boxes.forEach( ( box ) => { 
            box.style.backgroundColor = ''; 
        });
    }

    return (
        <div className = { `SB_TTD_CharDayHeader ${modeShort? 'modeShort': ''}` }>

            { modeShort? (<>

                <div
                    className = { `SB_TTD_CharDay_date_short ${col_class_name}` }
                    onMouseOver = { () => { mouse_over( col_class_name ) } }
                    onMouseLeave = { () => { mouse_leave( col_class_name ) } }
                    onClick = { () => { dayReleaseToggle() } }
                >
                    <div className = 'SB_TTD_CharDay_day_short'>{ dayNameShort }</div>

                    <div className = 'SB_TTD_CharDay_rotate_short'>
                        <div className = 'SB_TTD_CharDay_rotate_val_short'>{ `${date}  ${MOUNTH_NAME[ mounth ]}` }</div>

                    </div>

                    <div className = 'SB_TTD_CharDay_count_short'>
                        { releaseLength }
                    </div>
                </div>
            </>): 
            (<>

                <div className = 'SB_TTD_CharDay_date'>
                    <span>{ `${date}  ${MOUNTH_NAME[ mounth ]}` }</span>
                    <span className = 'SB_TTD_CharDay_day'>{ dayNameShort }</span>
                </div>
                

                <div className = 'SB_TTD_CharDay_release_count'>
                    <span className = 'SB_TTD_CharDay_release_count_title'>Выпуски:</span>
                    <span className = 'SB_TTD_CharDay_release_count_filled'>{ releaseLength }</span>
                    <span className = 'SB_TTD_CharDay_release_count_slash'>/</span>
                    <span className = 'SB_TTD_CharDay_release_count_all'>{ pointsLength }</span>
                </div>

                <div className = 'SB_TTD_CharDay_release_duration'>
                    <span className = 'SB_TTD_CharDay_release_count_title'>Хрон. общий:</span>
                    <span className = 'SB_TTD_CharDay_release_count_time'>{ convert_sec_to_time( dayDuration ) }</span>
                    <span className = 'SB_TTD_CharDay_release_count_sec'>{ dayDuration }</span>
                </div>

                <div className = 'SB_TTD_CharDay_release_all_toggle'>
                    <span 
                        className = 'SB_TTD_CharDay_btn'
                        onClick = { () => { dayReleaseToggle() } }
                    >
                        <span className = 'SB_TTD_CharDay_btn_all'>Все</span>
                        <span className = 'SB_TTD_CharDay_btn_tog'>Вкл / Выкл</span>
                    </span>
                </div>
            
            </>) }

        </div>
    )

};

export function OneHeaderItem( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    // const dispatch = useDispatch();

    return (
        <OneHeaderItemComponent
            { ...props }

            modeShort = { currentSubApplication.modeShort }

            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

        />
    );


}
