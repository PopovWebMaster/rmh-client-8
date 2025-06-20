
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ResultOnlyTimes.scss';

import { CurrentDatePointsFormat } from './../CurrentDatePointsFormat/CurrentDatePointsFormat.js';


const ResultOnlyTimesComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    let [ val, setVal ] = useState( '' );
    let [ valCol, setValCol ] = useState( '' );


    let [ valSec, setValSec ] = useState( 0 );

    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        let arr_2 = arr[0].split( ':' );
        return `${arr_2[0]}:${arr_2[1]}`;

    }

    useEffect( () => {

        let arr = [];
        let arr_ms = [];
        let lastName = false;

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                startTime,
                type,
                file,
                segmentRealDuration,

            } = filteredList[ i ];

            if( type === 'movie' ){
                
                if( lastName === false ){
                    lastName = file.name;
                    arr.push( trim_sec_ms( startTime.time ) );
                    arr_ms.push( segmentRealDuration.ms );

                }else{
                    if( lastName === file.name ){
                        arr.push( trim_sec_ms( startTime.time ) );
                        arr_ms.push( segmentRealDuration.ms );
                        lastName = file.name;
                    }else{
                        arr = [];
                        break;
                    };
                }
            };
        };

        let str = '';
        // let strCol = '';
        for( let i = 0; i < arr.length; i++ ){
            if( i === 0 ){
                str = arr[ i ];
            }else{
                str = `${ str }, ${arr[ i ]}`;
            }; 
        };

        let strCol = arr.join('\n');

        setVal( str );
        setValCol( strCol );

        let count_ms = 0;
        for( let i = 0; i < arr_ms.length; i++ ){
            count_ms = count_ms + arr_ms[ i ];
        };

        setValSec( Math.round( count_ms/1000 ) );

    }, [ filteredList ] );


    return (

        <div className = 'DDW_ResultOnlyTimes'>

            <CurrentDatePointsFormat />

            <p> <span>Найдено:</span> <span>{ filteredList.length }</span> </p>

            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />

            <textarea   
                className = ''
                value = { valCol }
                rows = { 2 }
                onChange = { () => {} }
            />
            <span className = 'countSec'>Всего секунд:</span>
            <input 
                type = 'text'
                value = { valSec }
                onChange = { () => {} }
            />



        </div>
        
    )

};


export function ResultOnlyTimes( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultOnlyTimesComponent
            { ...props }
   

            filteredList = { playReport.filteredList }

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
