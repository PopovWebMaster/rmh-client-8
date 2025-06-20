
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setDateListSelected } from './../../../../../../../../redux/playReportSlice.js';

import './CountElems.scss';

const CountElemsComponent = ( props ) => {

    let {
        entireList,
        dateListSelected,


    } = props;

    
    return (
        <div className = 'PRL_CountElems'>
            <span>Всего:</span>
            <span>{ 111 }</span>

        </div>


    )

};

export function CountElems( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <CountElemsComponent
            { ...props }
            entireList = { playReport.entireList }
            dateListSelected = { playReport.dateListSelected }
            setDateListSelected = { ( callback ) => { dispatch( setDateListSelected( callback ) ) } }

        />
    );


}


