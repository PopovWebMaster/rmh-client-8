

import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './SearchPanel.scss';

import { InputSearch } from './../InputSearch/InputSearch.js';
import { ButtonSearch } from './../ButtonSearch/ButtonSearch.js';
import { SearchByDate } from './../SearchByDate/SearchByDate.js';
import { ClearSearchInputButton } from './../ClearSearchInputButton/ClearSearchInputButton.js';
import { Calendar } from './../Calendar/Calendar.js';
import { SearchPeriod } from './../SearchPeriod/SearchPeriod.js';
import { SearchResultCount } from './../SearchResultCount/SearchResultCount.js';
 
import { get_entier_list_for_search_value } from './../../vendors/get_entier_list_for_search_value.js';
import { AdvancedSearch } from './../AdvancedSearch/AdvancedSearch.js';



const SearchPanelComponent = ( props ) => {

    let {
        searchFocus,
        searchValue,
        calendarIsOpen,
    } = props;

    const searchHandler = () => {
        get_entier_list_for_search_value( () => {});
    }
    
    return (
        <div className = 'PR_searchPanel'>
            <div className = { `PR_searchPanel_wrap ${searchFocus? 'isActive': ''} ${calendarIsOpen? 'calendarIsOpen': ''}` }>

                <InputSearch searchHandler = { searchHandler }/>
                <ClearSearchInputButton />
                <ButtonSearch searchHandler = { searchHandler }/>
                <SearchByDate />
                <Calendar />
                <SearchPeriod />
                <SearchResultCount />

                <AdvancedSearch />
                
            </div>


        </div>

    )

};

export function SearchPanel( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchPanelComponent
            { ...props }
            searchFocus = { playReport.searchFocus }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
