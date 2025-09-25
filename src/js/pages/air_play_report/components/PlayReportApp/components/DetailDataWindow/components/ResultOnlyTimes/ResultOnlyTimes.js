
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './ResultOnlyTimes.scss';

const ResultOnlyTimesComponent = ( props ) => {

    let {
        filteredList,
        detailDataIsActive,

    } = props;

    let [ val, setVal ] = useState( '' );
    let [ view, setView ] = useState( 'string' ); // 'string' 'column'

    useEffect( () => {
        let str = '';
        if( detailDataIsActive ){
            let list = get_time_list( filteredList );
            if( list.length > 0 ){
                if( view === 'string' ){
                    str = list.join(', ');
                }else if( view === 'column' ){
                    str = list.join('\n')
                };
            };
        };

        setVal( str );

    }, [
        detailDataIsActive,
        filteredList,
        view,
    ] );

    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        let arr_2 = arr[0].split( ':' );
        return `${arr_2[0]}:${arr_2[1]}`;

    }


    const get_time_list = ( arr ) => {
        let result = [];

        for( let i = 0; i < arr.length; i++ ){
            let {
                startTime,
                type,
            } = arr[ i ];

            if( type === 'movie' ){
                result.push( trim_sec_ms( startTime.time ) );
            };
        };


        return result;

    };


    return (

        <div className = 'DDW_ResultOnlyTimes'>

            <div className = 'DDW_ResultOnlyTimes_view'>

                <span className = 'DDW_ResultOnlyTimes_view_title'>Вид:</span>

                <span 
                    className = { `DDW_ResultOnlyTimes_view_btn ${view === 'string'? 'isActive': ''}`}
                    onClick = { () => { setView( 'string' ) } }
                >Строка</span>
                <span 
                    className = { `DDW_ResultOnlyTimes_view_btn ${view === 'column'? 'isActive': ''}`}
                    onClick = { () => { setView( 'column' ) } }
                >Колонка</span>

            </div>

            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
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
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
