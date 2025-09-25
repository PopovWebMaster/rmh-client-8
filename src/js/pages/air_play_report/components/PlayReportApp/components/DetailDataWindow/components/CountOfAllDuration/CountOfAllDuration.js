// CountOfAllDuration


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js'

import './CountOfAllDuration.scss';

const CountOfAllDurationComponent = ( props ) => {

    let {
        filteredList,
        detailDataIsActive,

    } = props;

    let [ allDurationSec, setAllDurationSec ] = useState( 0 );

    useEffect( () => {

        if( detailDataIsActive ){

            let sec = 0;

            for( let i = 0; i < filteredList.length; i++ ){
                let { type, segmentRealDuration } = filteredList[ i ];
                if( type === 'movie' ){
                    sec = sec + (segmentRealDuration.ms/1000);
                };
            };

            setAllDurationSec( sec );

        }else{
            setAllDurationSec( 0 );
        };


    }, [ detailDataIsActive, filteredList ] );

  



    return (

        <div className = 'DDW_CountOfAllDuration'>

            <p>Общий хронометраж:</p>

            <div className = 'DDW_CountOfAllDuration_wrap' >
                <span className = 'dur_title'>sec</span>
                <input
                    type = 'text'
                    value = { allDurationSec }
                    onChange = { () => {} }
                />
            </div>

            <div className = 'DDW_CountOfAllDuration_wrap' >
                <span className = 'dur_title'>time</span>
                <input
                    type = 'text'
                    value = { convert_sec_to_time( allDurationSec ) }
                    onChange = { () => {} }
                />
            </div>

        </div>
        
    )

};


export function CountOfAllDuration( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CountOfAllDurationComponent
            { ...props }
   

            filteredList = { playReport.filteredList }
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
