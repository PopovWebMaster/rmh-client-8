
// CharDayTimePoint



import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharDayTimePoint.scss';


import { selectorData as applicationSlice, setEnvIsOpen } from './../../../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../../../redux/companySlice.js';

// import { MOUNTH_NAME } from './../../../../../../../../../../../../config/mounth.js';
import { CHAR_TYPE } from './../../../../../../../../../../../../config/application.js';



const CharDayTimePointComponent = ( props ) => {

    let {
        // YYYY_MM_DD,
        // year,
        // dayNum,
        // dayName,
        // dayNameShort,
        // date,
        // mounth,

        YYYY_MM_DD,
        key,
        fill_count,
        sec,
        title,
        time,

        releaseName,

        charType,

        releaseToggle,

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

    const click = ( e ) => {
        let className = e.target.classList[ 0 ];
        if( className === 'environment' ){
            setEnvIsOpen( true );
        }else{
            releaseToggle({
                sec,
                YYYY_MM_DD,
            })
            // if( value === '' ){
            //     setValue( releaseName );
            // }else{
            //     setValue( '' );

            // };
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


            {/* icon-eye-4 */}
           

            
        </div>
    )

};

export function CharDayTimePoint( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const dispatch = useDispatch();

    return (
        <CharDayTimePointComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }


            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
