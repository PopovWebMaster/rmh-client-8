
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './ButtonSearch.scss';


const ButtonSearchComponent = ( props ) => {

    let {

        searchHandler,
        searchValue,

    } = props;
    
    return (

        <>{ searchValue === ''? '': (
            <div 
                className = 'PR_ButtonSearch'
                onClick = { searchHandler }
            >
                <span className = 'icon-search-4'></span>
            </div>

        ) }</>

    )

};

export function ButtonSearch( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ButtonSearchComponent
            { ...props }
            searchValue = { playReport.searchValue }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
