
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setSearchPeriod } from './../../../../../../redux/playReportSlice.js';

import './SearchResultCount.scss';


const SearchResultCountComponent = ( props ) => {

    let {
        filteredList,
        entireList,
    } = props;


    
    return (<>
        { entireList.length > 0? (

        <div className = 'PR_SearchResultCount'>
            <span className = 'SRL_title'>Найдено:</span>
            <span className = 'SRL_val'>{ `${filteredList.length} / ${entireList.length}` }</span>
        </div>

        ): '' }
    </>)

};

export function SearchResultCount( props ){

    const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <SearchResultCountComponent
            { ...props }
            filteredList =  { playReport.filteredList }
            entireList =    { playReport.entireList }
            // setSearchPeriod = { ( val ) => { dispatch( setSearchPeriod( val ) ) } }

        />
    );


}
