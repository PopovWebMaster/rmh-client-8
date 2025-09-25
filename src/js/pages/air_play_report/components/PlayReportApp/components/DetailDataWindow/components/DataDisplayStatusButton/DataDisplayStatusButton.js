
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import { selectorData as playReportSlice, setDetailDataIsActive } from './../../../../../../../../redux/playReportSlice.js';

import './DataDisplayStatusButton.scss';


const DataDisplayStatusButtonComponent = ( props ) => {

    let {
        detailDataIsActive,
        setDetailDataIsActive,

    } = props;

    const click = () => {
        setDetailDataIsActive( !detailDataIsActive );
    };


    return (

        <div className = { `PR_onOffBtn ${detailDataIsActive? 'isActive': ''}` }>
            <div
                className = 'PR_onOffBtn_wrap'
                onClick = { click }
            >
                <span className = 'PR_onOffBtn_title'>Отображение данных:</span>
                <span className = 'PR_onOffBtn_status'>{ detailDataIsActive? 'вкл': 'выкл'}</span>
            </div>
        </div>
        
    )

};


export function DataDisplayStatusButton( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <DataDisplayStatusButtonComponent
            { ...props }
   

            detailDataIsActive = { playReport.detailDataIsActive }
            setDetailDataIsActive = { ( callback ) => { dispatch( setDetailDataIsActive( callback ) ) } }
            


        />
    );


}
