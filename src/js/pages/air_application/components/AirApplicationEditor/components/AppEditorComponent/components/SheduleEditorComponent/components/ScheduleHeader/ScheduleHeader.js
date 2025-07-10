
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleHeader.scss';

import { selectorData as scheduleSlise }     from './../../../../../../../../../../redux/scheduleSlise.js';

import { CHAR_TYPE } from './../../../../../../../../../../config/application.js';
import { EVENT_TYPE } from './../../../../../../../../../../config/layout.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';


const ScheduleHeaderComponent = ( props ) => {

    let {

        charType,
        releaseName,
        releaseDuration,
        allReleaseLength,
        allReleaseDuration,
        categoryColorBg,
        categoryColorText,
        eventName,
        periodFrom,
        periodTo,
        
        children,

    } = props;

    let [ typeValue, setTypeValue ] = useState( '' );

    useEffect( () => {
        if( charType === CHAR_TYPE.BLOCK ){
            setTypeValue( EVENT_TYPE.BLOCK );
        }else if( charType === CHAR_TYPE.FILE || charType === CHAR_TYPE.BLIND  ){
            setTypeValue( EVENT_TYPE.FILE );
        };
    }, [ charType ] );

    const getCharTitle = ( type  ) => {
        let result = 'Слепой график'
        if( type === CHAR_TYPE.BLOCK ){
            result = `${eventName}`
        }else if( type === CHAR_TYPE.FILE ){
            result = `${eventName}`
        };
        return result;
    }
    const getStyle = ( type ) => {
        let result = {
            backgroundColor: '#fff2e4',
            color: '#e76969',
            borderColor: '#dfdfdf',
        };
        if( type === CHAR_TYPE.BLOCK ){
            result.backgroundColor = '#00000000';
            result.borderColor = categoryColorBg;
            result.color = categoryColorBg;
        }else if( type === CHAR_TYPE.FILE ){
            result.backgroundColor = categoryColorBg;
            result.borderColor = categoryColorBg;
            result.color = categoryColorText;
        };
        return result;
    }

    const getDate = ( str ) => {
        let result = '';
        if( str !== null ){
            let arr = str.split( '-' );
            result = `${arr[2]}.${arr[1]}.${arr[0]}`
        };
        return result;
    }


    return (

        <div className = 'SEC_header'>

            <div className = 'SEC_header_col'>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>Выпуск:</span>
                    <span className = 'SEC_row_name'>{ releaseName }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>График:</span>
                    <span 
                        className = 'SEC_row_name'
                        style = { getStyle( charType ) }
                    >{ getCharTitle( charType ) }</span>

                    <span className = 'SEC_row_type'>{ typeValue }</span>
                </h2>

                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title'>Период:</span>
                    <span className = 'SEC_row_period' style = {{ marginLeft: '1em' }}>{ getDate( periodFrom ) }</span>

                    <span className = 'SEC_row_tire'>-</span>
                    <span className = 'SEC_row_period'>{ getDate( periodTo ) }</span>
                </h2>
            </div>

            <div className = 'SEC_header_col'>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title w11'>Хронометраж ролика:</span>
                    <span className = 'SEC_row_hron_time'>{ convert_sec_to_time( releaseDuration ) }</span>
                    <span className = 'SEC_row_hron_sec'>{ releaseDuration }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title w11'>Хронометраж общий:</span>
                    <span className = 'SEC_row_hron_time'>{ convert_sec_to_time( allReleaseDuration ) }</span>
                    <span className = 'SEC_row_hron_sec'>{ allReleaseDuration }</span>
                </h2>
                <h2 className = 'SEC_row'>
                    <span className = 'SEC_row_title w11'>Всего выпусков:</span>
                    <span className = 'SEC_row_filled_count'>{ allReleaseLength }</span>
                </h2>
            </div>

            <div className = 'SEC_header_col SEC_header_col_last'>

               { children }


            </div>


            
            

        </div>

               
    )

};

export function ScheduleHeader( props ){

    const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <ScheduleHeaderComponent
            { ...props }

            charType =              { schedule.charType }
            releaseName =           { schedule.releaseName }
            releaseDuration =       { schedule.releaseDuration }
            allReleaseLength =      { schedule.allReleaseLength }
            allReleaseDuration =    { schedule.allReleaseDuration }
            categoryColorBg =       { schedule.categoryColorBg }
            categoryColorText =     { schedule.categoryColorText }
            eventName =             { schedule.eventName }
            periodFrom =            { schedule.periodFrom }
            periodTo =              { schedule.periodTo }


        />
    );


}
