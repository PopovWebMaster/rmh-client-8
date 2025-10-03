
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ScheduleDayTimePoint.scss';


import { selectorData as applicationSlice, setEnvIsOpen } from './../../../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as scheduleSlise } from './../../../../../../../../../../../../redux/scheduleSlise.js';


import { CHAR_TYPE } from './../../../../../../../../../../../../config/application.js';

import { ItemBlockInfo } from './../ItemBlockInfo/ItemBlockInfo.js';
import { MixContent } from './../MixContent/MixContent.js';



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
        grid_event_id,
        is_reserved,
        reserved_name,

        setEnvIsOpen,


    } = props;

    let [ value, setValue ] = useState( '' );
    let [ isFilled, setIsFilled ] = useState( false );
    let [ isReserved, setIsReserved ] = useState( false );


    useEffect( () => {
        if( is_reserved ){
            setIsFilled( false );
            setIsReserved( true );
            setValue( reserved_name );
        }else{
            if( fill_count === 0 ){
                setIsFilled( false );
                setValue( '' );
            }else{
                setValue( releaseName );
                setIsFilled( true );
            };
            setIsReserved( false );
        };
        

    }, [ fill_count ] );

    const releaseToggle = ( YYYY_MM_DD, sec ) => {
        if( is_reserved ){

        }else{
            Schedule.ReleaseToggle( YYYY_MM_DD, sec );
        }
        
    };


    const click = ( e ) => {
        let className = e.target.classList[ 0 ];


        if( className === 'environment' ){
            setEnvIsOpen( true );
        }else{
            if( className === 'SEC_block' ){

            }else{
                releaseToggle( YYYY_MM_DD, sec );
            };
            
        };
        
    };

    return (
        <div 
            className = { `SEC_CharDayTimePoint ${ isFilled? 'filled': ''} ${ isReserved? 'reserved': '' }` }
            onClick = { click }
        >

            <div className = 'SEC_CharDayTimePoint_time'>
                <span>{ title }</span>
            </div>

            <div className = 'SEC_CharDayTimePoint_inp'>

                <div className = 'SEC_CharDayTimePoint_inp_wrap'>
                    <input 
                        type = 'text'
                        value = { value }
                        onChange = { () => {} }
                    />
                </div>

                { charType === CHAR_TYPE.BLOCK? (
                    <MixContent 
                        grid_event_id = { grid_event_id }
                        YYYY_MM_DD =    { YYYY_MM_DD }
                    />
                ): '' }

                <div className = 'SEC_CharDayTimePoint_inp_curt'></div>
            </div>

            { charType === CHAR_TYPE.BLOCK? (

                <ItemBlockInfo 
                    className =     { 'SEC_block' }
                    Schedule =      { Schedule }
                    grid_event_id = { grid_event_id }
                    fill_count =    { fill_count }
                    YYYY_MM_DD =    { YYYY_MM_DD }

                />


            ): '' }

            {/* <div className = 'SEC_CharDayTimePoint_environment'>
                <span className = 'environment icon-eye-4'></span>
            </div> */}

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
