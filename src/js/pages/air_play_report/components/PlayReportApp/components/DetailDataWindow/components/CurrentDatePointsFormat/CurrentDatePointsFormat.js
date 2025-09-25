

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './CurrentDatePointsFormat.scss';


const CurrentDatePointsFormatComponent = ( props ) => {

    let {
        dateListSelected,
        detailDataIsActive,

    } = props;
    let [ data_YYYY_MM_DD, setData_YYYY_MM_DD ] = useState('');
    let [ data_DD_MM_YYYY, setData_DD_MM_YYYY ] = useState('');

    useEffect( () => {
        if( detailDataIsActive ){

            setData_YYYY_MM_DD( get_str( dateListSelected ) );
            setData_DD_MM_YYYY( get_str_revers( dateListSelected ) );

        }else{
            setData_YYYY_MM_DD( '' );
            setData_DD_MM_YYYY( '' );
        };

    }, [ detailDataIsActive, dateListSelected ] );



    const get_str = ( str ) => {
        if( str !== null ){
            return str.replaceAll( '-', '.' );
        }else{
            return '';
        };
    }

    const get_str_revers = ( str ) => {
        if( str !== null ){
            let arr = str.split('-');
            return `${arr[2]}.${arr[1]}.${arr[0]}`
        }else{
            return '';
        };
    }

    return (

        <div className = 'DDW_CurrentDatePointsFormat'>

            <input 
                type = 'text'
                value = { data_YYYY_MM_DD }
                onChange = { () => {} }
            />

            <input 
                type = 'text'
                value = { data_DD_MM_YYYY }
                onChange = { () => {} }
            />

        </div>
        
    )

};


export function CurrentDatePointsFormat( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CurrentDatePointsFormatComponent
            { ...props }
   

            dateListSelected = { playReport.dateListSelected }
            detailDataIsActive = { playReport.detailDataIsActive }


            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
