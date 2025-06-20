
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setSearchPeriod } from './../../../../../../redux/playReportSlice.js';

import './SearchPeriod.scss';

import { MONTH_NANES } from './../../../../../../config/playReport.js';



const SearchPeriodComponent = ( props ) => {

    let {
        calendarIsOpen,
        searchValue,
        searchPeriod,
        setSearchPeriod,

        min_month,
        max_month,
        max_year,
        min_year,

    } = props;

    // console.dir( props );

    let [ currentMonthName, setCurrentMonthName] = useState( '' );
    let [ currentMonthValue, setCurrentMonthValue] = useState( '' );

    let [ previewMonthName, setPreviewMonthName] = useState( false );
    let [ previewMonthValue, setPreviewMonthValue] = useState( false );


    useEffect(() => {

        let curM = get_current_month();
        let prevM = get_preview_month();

        setCurrentMonthName( MONTH_NANES[ curM.num ] );
        setCurrentMonthValue( curM.year_month );

        if( prevM !== null ){
            setPreviewMonthName( MONTH_NANES[ prevM.num ] );
            setPreviewMonthValue( prevM.year_month );
        };

        setSearchPeriod( curM.year_month )

    }, []);


    const click_preview_month = () => {
        setSearchPeriod( previewMonthValue );

    }

    const click_current_month = () => {
        setSearchPeriod( currentMonthValue );

    }


    const click_all = () => {
        setSearchPeriod( 'all' );
    }

    const get_current_month = () => {
        let result = {
            num: max_month,
            year_month: `${max_year}-${ String( max_month ).padStart( 2, '0' ) }`,
        };
        return result;
    }

    const get_preview_month = () => {
        let result = null;
        if( min_year < max_year ){
            if( max_month > 1 ){
                result = {
                    num: max_month - 1,
                    year_month: `${max_year}-${String( max_month - 1 ).padStart( 2, '0' )}`,
                };
            }else{
                result = {
                    num: 12,
                    year_month: `${max_year-1}-${12}`,
                };
            };
        }else if( min_year === max_year ){
            let preview = max_month - 1;
            if( min_month <= preview ){
                result = {
                    num: preview,
                    year_month: `${max_year}-${String( preview ).padStart( 2, '0' )}`,
                };

            };
        };
        return result;
    }

    
    return (
        <>{ !calendarIsOpen && searchValue !== ''? (
            <div className = 'PR_SearchPeriod'>

                { previewMonthValue === false? '': (
                    <div onClick = { click_preview_month }>

                        <input 
                            type = 'radio'
                            name = 'period'
                            value = { previewMonthValue }
                            checked = { previewMonthValue === searchPeriod? true: false }
                            onChange = { () => {} }
                        />
                        <span>{ previewMonthName }</span>
                    </div>
                ) }

                <div
                    onClick = { click_current_month }
                >
                    <input 
                        type = 'radio'
                        name = 'period'
                        value = { currentMonthValue }
                        checked = { currentMonthValue === searchPeriod? true: false }
                        onChange = { () => {} }
                    />
                    <span>{ currentMonthName }</span>
                </div>
                <div
                    onClick = { click_all }
                >
                    <input 
                        type = 'radio'
                        name = 'period'
                        value = { 'all' }
                        checked = { 'all' === searchPeriod? true: false }
                        onChange = { () => {} }
                    />
                    <span>За весь период</span>
                </div>
                
                
            </div>
        ): '' }</>


    )

};

export function SearchPeriod( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchPeriodComponent
            { ...props }
            calendarIsOpen = { playReport.calendarIsOpen }
            searchValue = { playReport.searchValue }
            searchPeriod = { playReport.searchPeriod }

            min_month =     { playReport.min_month }
            max_month =     { playReport.max_month }
            max_year =     { playReport.max_year }
            min_year =     { playReport.min_year }




            setSearchPeriod = { ( val ) => { dispatch( setSearchPeriod( val ) ) } }

        />
    );


}
