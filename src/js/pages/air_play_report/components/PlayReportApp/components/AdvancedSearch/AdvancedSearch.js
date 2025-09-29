
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './AdvancedSearch.scss';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AdvancedSearchContainer } from './../AdvancedSearchContainer/AdvancedSearchContainer.js';



const AdvancedSearchComponent = ( props ) => {

    let {
        searchValue,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    
    return (
        <>{ searchValue === ''? (
            <div className = 'PR_advancedSearch'>

                <AlertWindowContainer
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }
                    title =     'Расширенный поиск'
                    width =     '36em'
                    height =    '25em'
                >

                    <AdvancedSearchContainer
                        isOpen =    { isOpen }
                        setIsOpen = { setIsOpen }
                    />



                </AlertWindowContainer>

                <div
                    className = 'PR_advancedSearch_btn'
                    onClick = { () => { setIsOpen( true ) } }
                >
                    <span className = 'PR_AS_btn_title'>Расширенный поиск</span>
                </div>

            
            </div>

        ): '' }</>


    )

};

export function AdvancedSearch( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <AdvancedSearchComponent
            { ...props }
            searchFocus = { playReport.searchFocus }
            searchValue = { playReport.searchValue }
            calendarIsOpen = { playReport.calendarIsOpen }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
