
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';
import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../../redux/playReportAnalyticsSlise.js';


import './RowCounter.scss';

import { TdItemName } from './TdItemName/TdItemName.js';
import { IdItemValue } from './IdItemValue/IdItemValue.js';

import { convert_sec_to_time } from './../../../../../../../../../helpers/convert_sec_to_time.js';
import { round_to_number } from './../../../../../../../../../helpers/round_to_number.js';

let day_sec = 24*60*60;


const RowCounterComponent = ( props ) => {

    let {

        allCount,
        allDuration,
        allPremiersCount,
        allPremiersDuration,


    } = props;

    const get_procent = ( sec ) => {
        return round_to_number( ( sec * 100 / day_sec ), 5 );

    }

    return (<>
        <tr className = 'AC_RowCounter_all'>
            <td></td>
            <td></td>
            <TdItemName title = 'Всего:' isActive = { allCount > 0? true: false }/>
            <td></td>
            <IdItemValue value = { allCount } />
            <td></td>
            <IdItemValue value = { allDuration } />
            <IdItemValue value = { allDuration === 0? 0: convert_sec_to_time( allDuration ) } />
            <IdItemValue value = { get_procent( allDuration ) } />
        </tr>

        <tr className = 'AC_RowCounter_all_premiers'>
            <td></td>
            <td></td>
            <TdItemName title = 'Премьеры:' isActive = { allCount > 0? true: false }/>
            <td></td>
            <IdItemValue value = { allPremiersCount } />
            <td></td>
            <IdItemValue value = { allPremiersDuration } />
            <IdItemValue value = { allPremiersDuration === 0? 0: convert_sec_to_time( allPremiersDuration ) } />
            <IdItemValue value = { get_procent( allPremiersDuration ) } />
        </tr>

        <tr className = 'AC_RowCounter_all_repeats'>
            <td></td>
            <td></td>
            <TdItemName title = 'Повторы:' isActive = { allCount > 0? true: false }/>
            <td></td>
            <IdItemValue value = { allCount - allPremiersCount } />
            <td></td>
            <IdItemValue value = { allDuration - allPremiersDuration } />
            <IdItemValue value = { allDuration === 0? 0: convert_sec_to_time( allDuration - allPremiersDuration ) } />
            <IdItemValue value = { get_procent( allDuration - allPremiersDuration ) } />
        </tr>
    
    </>)

};

export function RowCounter( props ){

    // const layout = useSelector( layoutSlice );
    const playReportAnalytics = useSelector( playReportAnalyticsSlise );

    const dispatch = useDispatch();

    return (
        <RowCounterComponent
            { ...props }

            // eventListById = { layout.eventListById }
            // categoryListById = { layout.categoryListById }
            evenstTree = { playReportAnalytics.evenstTree }




            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
