

import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setSearchFocus, setSearchValue, } from './../../../../../../redux/playReportSlice.js';

import './ClearSearchInputButton.scss';


const ClearSearchInputButtonComponent = ( props ) => {

    let {
        searchValue,
        searchDate,

        setSearchFocus,
        setSearchValue,

       
    } = props;

    const click = ( e ) => {
        setSearchValue( '' );
        setSearchFocus( false )
    }


    
    return (
        <>{ searchValue === '' && searchDate === ''? '': (
            <div 
                className = 'PR_ClearSearchInputButton'
                onClick = { click }
            >
                <span>×</span>
            </div>  
        ) }</>



    )

};

export function ClearSearchInputButton( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ClearSearchInputButtonComponent
            { ...props }
            searchValue = { playReport.searchValue }
            searchDate = { playReport.searchDate }
            setSearchValue = { ( callback ) => { dispatch( setSearchValue( callback ) ) } }
            setSearchFocus = { ( callback ) => { dispatch( setSearchFocus( callback ) ) } }


            

        />
    );


}
