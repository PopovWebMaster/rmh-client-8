

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../../../redux/playReportSlice.js';

import './CurrentDatePointsFormat.scss';


const CurrentDatePointsFormatComponent = ( props ) => {

    let {
        dateListSelected,

    } = props;


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
        
        // if( str !== null ){
        //     return str.replaceAll( '-', '.' );
        // }else{
        //     return '';
        // };
    }

    return (

        <div className = 'DDW_CurrentDatePointsFormat'>

            

            <input 
                type = 'text'
                value = { get_str( dateListSelected ) }
                onChange = { () => {} }
            />

            <input 
                type = 'text'
                value = { get_str_revers( dateListSelected ) }
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

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
