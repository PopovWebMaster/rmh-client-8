
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ResultColsDateAndTime.scss';


const ResultColsDateAndTimeComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    let [ val, setVal ] = useState( '' );
    let [ val_2, setVal_2 ] = useState( '' );
    let [ val_2_revers, setVal_2_revers ] = useState( '' );



    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        let arr_2 = arr[0].split( ':' );
        return `${arr_2[0]}:${arr_2[1]}`;

    }

    const get_row = ( date, startTime ) => {
        let { YYYY_MM_DD } = date;
        let { time } = startTime;

        let date_str = YYYY_MM_DD.replaceAll( '-', '.' );
        let time_trim = trim_sec_ms( time );
        let result = date_str + ' - ' + time_trim + '\n';

        return result;

    }
    const get_row_2 = ( date, startTime ) => {
        let { YYYY_MM_DD } = date;
        let { time } = startTime;

        let date_str = YYYY_MM_DD.replaceAll( '-', '.' );
        let time_trim = trim_sec_ms( time );
        let result = date_str + '\t' + time_trim + '\n';
        return result;

    }

    const get_row_2reverse = ( date, startTime ) => {
        let { YYYY_MM_DD } = date;
        let { time } = startTime;
        // let date_str = YYYY_MM_DD.replaceAll( '-', '.' );
        let arr = YYYY_MM_DD.split('-');
        let date_str =  `${arr[2]}.${arr[1]}.${arr[0]}`
        let time_trim = trim_sec_ms( time );
        let result = date_str + '\t' + time_trim + '\n';
        return result;

    }
    

    useEffect( () => {

        let arr = [];
        let arr_2 = [];
        let arr_2_rev = [];



        let lastName = false;

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                startTime,
                type,
                file,
                date,
            } = filteredList[ i ];

            if( type === 'movie' ){
                
                if( lastName === false ){
                    lastName = file.name;
                    arr.push( get_row( date, startTime ) );
                    arr_2.push( get_row_2( date, startTime ) );
                    arr_2_rev.push( get_row_2reverse( date, startTime ) );


                }else{
                    if( lastName === file.name ){
                        arr.push( get_row( date, startTime ) );
                        arr_2.push( get_row_2( date, startTime ) );
                        arr_2_rev.push( get_row_2reverse( date, startTime ) );
                        lastName = file.name;
                    }else{
                        arr = [];
                        break;
                    };
                }
            };
        };

        let str = '';
        for( let i = 0; i < arr.length; i++ ){
            str = `${ str } ${arr[ i ]}`;
        };

        let str_2 = '';
        for( let i = 0; i < arr_2.length; i++ ){
            str_2 = `${ str_2 } ${arr_2[ i ]}`;
        };

        let str_2_rev = '';
        for( let i = 0; i < arr_2_rev.length; i++ ){
            str_2_rev = `${ str_2_rev } ${arr_2_rev[ i ]}`;
        }

        setVal( str );
        setVal_2( str_2 );
        setVal_2_revers( str_2_rev );

    }, [ filteredList ] );



    return (

        <div className = 'DDW_ResultColsDateAndTime'>
            <p> <span>Найдено:</span> <span>{ filteredList.length }</span> </p>
            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />

            <textarea   
                className = ''
                value = { val_2 }
                rows = { 2 }
                onChange = { () => {} }
            />

            <textarea   
                className = ''
                value = { val_2_revers }
                rows = { 2 }
                onChange = { () => {} }
            />
        </div>
        
    )

};


export function ResultColsDateAndTime( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultColsDateAndTimeComponent
            { ...props }
   

            filteredList = { playReport.filteredList }

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
