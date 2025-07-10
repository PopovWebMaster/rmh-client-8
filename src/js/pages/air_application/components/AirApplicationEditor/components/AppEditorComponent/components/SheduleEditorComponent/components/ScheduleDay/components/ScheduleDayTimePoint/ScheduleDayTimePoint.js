
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ScheduleDayTimePoint.scss';


import { selectorData as applicationSlice, setEnvIsOpen } from './../../../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as scheduleSlise } from './../../../../../../../../../../../../redux/scheduleSlise.js';


import { CHAR_TYPE } from './../../../../../../../../../../../../config/application.js';



const ScheduleDayTimePointComponent = ( props ) => {

    let {
        Schedule,
        YYYY_MM_DD,
        key,
        fill_count,
        sec,
        title,
        time,
        releaseName,
        charType,

        setEnvIsOpen,


    } = props;

    let [ value, setValue ] = useState( '' );
    let [ isFilled, setIsFilled ] = useState( false );

    useEffect( () => {
        if( fill_count === 0 ){
            setIsFilled( false );
            setValue( '' );
        }else{
            setValue( releaseName );
            setIsFilled( true );
        };

    }, [ fill_count ] );

    const releaseToggle = ( YYYY_MM_DD, sec ) => {
        Schedule.ReleaseToggle( YYYY_MM_DD, sec );
    };


    const click = ( e ) => {
        let className = e.target.classList[ 0 ];
        if( className === 'environment' ){
            setEnvIsOpen( true );
        }else{
            releaseToggle( YYYY_MM_DD, sec );
        };
        
    };

    return (
        <div 
            className = { `SEC_CharDayTimePoint ${ isFilled? 'filled': ''}` }
            onClick = { click }
        >

            <div className = 'SEC_CharDayTimePoint_time'>
                <span>{ title }</span>
            </div>

            <div className = 'SEC_CharDayTimePoint_inp'>
                <input 
                    type = 'text'
                    value = { value }
                    onChange = { () => {} }
                />
                <div className = 'SEC_CharDayTimePoint_inp_curt'></div>
            </div>

            { charType === CHAR_TYPE.BLOCK? (
                <div className = 'SEC_CharDayTimePoint_block'>

                    <span className = 'SEC_CharDayTimePoint_block_title'>Блок: </span>
                    <span className = 'SEC_CharDayTimePoint_block_filled'>200 </span>
                    <span className = 'SEC_CharDayTimePoint_block_slash'>/</span>
                    <span className = 'SEC_CharDayTimePoint_block_all'>1200</span>

                </div>

            ): '' }

            <div className = 'SEC_CharDayTimePoint_environment'>
                <span className = 'environment icon-eye-4'></span>
            </div>

        </div>
    )

};

export function ScheduleDayTimePoint( props ){
    const schedule = useSelector( scheduleSlise );
    const dispatch = useDispatch();

    return (
        <ScheduleDayTimePointComponent
            { ...props }
            charType = { schedule.charType }
            releaseName = { schedule.releaseName }

            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }



        />
    );


}
