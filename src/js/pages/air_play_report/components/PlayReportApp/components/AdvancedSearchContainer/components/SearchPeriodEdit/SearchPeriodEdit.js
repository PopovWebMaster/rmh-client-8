
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { 
    selectorData as playReportSlice, 
    setAdvancedSearchPeriodFrom,
    setAdvancedSearchPeriodTo, 
} from './../../../../../../../../redux/playReportSlice.js';

import './SearchPeriodEdit.scss';

const SearchPeriodEditComponent = ( props ) => {

    let {
        // dataFromValue,
        // dataToValue,
        // setDataFromValue,
        // setDataToValue,


        advancedSearchPeriodFrom,
        advancedSearchPeriodTo,
        setAdvancedSearchPeriodFrom,
        setAdvancedSearchPeriodTo,


    } = props;

    let max_ms_diference = 366 * 24 * 60 * 60 * 1000;

    const change_date_from = ( e ) => {
        let val = e.target.value;
        let date = new Date( val );
        let from_ms = date.getTime();

        let date_2 = new Date( advancedSearchPeriodTo );
        let to_ms = date_2.getTime();
        if( from_ms <= to_ms ){
            if( to_ms - from_ms < max_ms_diference ){
                setAdvancedSearchPeriodFrom( val );
            };
        }else{
            if( to_ms - from_ms < max_ms_diference ){
                setAdvancedSearchPeriodFrom( val );
                setAdvancedSearchPeriodTo( val );
            };
        };
    };

    const change_date_to = ( e ) => {
        let val = e.target.value;
        let date = new Date( val );
        let to_ms = date.getTime();

        let date_2 = new Date( advancedSearchPeriodFrom );
        let from_ms = date_2.getTime();
        if( to_ms >= from_ms ){
            if( to_ms - from_ms < max_ms_diference ){
                setAdvancedSearchPeriodTo( val );
            }
        };
    };


    return (
        <div className = 'PR_ASC_Period_edit'>

            <h3>Период</h3>

            <span>с</span>

            <input 
                type = 'date'
                value =     { advancedSearchPeriodFrom }
                max =       { advancedSearchPeriodTo }
                onChange =  { change_date_from }
            />

            <span>до</span>
            <input 
                type = 'date'
                value =     { advancedSearchPeriodTo }
                min =       { advancedSearchPeriodFrom }
                onChange =  { change_date_to }
            />
        </div>

    )

};

export function SearchPeriodEdit( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <SearchPeriodEditComponent
            { ...props }
            advancedSearchPeriodFrom = { playReport.advancedSearchPeriodFrom }
            advancedSearchPeriodTo = { playReport.advancedSearchPeriodTo }

            setAdvancedSearchPeriodFrom = { ( val ) => { dispatch( setAdvancedSearchPeriodFrom( val ) ) } }
            setAdvancedSearchPeriodTo = { ( val ) => { dispatch( setAdvancedSearchPeriodTo( val ) ) } }




        />
    );


}
