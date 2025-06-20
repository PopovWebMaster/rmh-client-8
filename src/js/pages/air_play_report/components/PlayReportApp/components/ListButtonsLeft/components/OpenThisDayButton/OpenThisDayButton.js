
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as playReportSlice, setDateListSelected } from './../../../../../../../../redux/playReportSlice.js';

import './OpenThisDayButton.scss';

import { get_one_day_entire_list_from_server } from './../../../../vendors/get_one_day_entire_list_from_server.js';

const OpenThisDayButtonComponent = ( props ) => {

    let {
        entireList,
        dateListSelected,
        setDateListSelected,

    } = props;


    const click = () => {
        console.dir( 'dateListSelected' );
        console.dir( dateListSelected );
        get_one_day_entire_list_from_server({
            date_string: dateListSelected,
            callback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );
            }
        });

    };

    return (
        <div className = 'PRL_OpenThisDayButton'>
            <span 
                className = 'fa-calendar PRL_OpenThisDayButton_btn'
                onClick = { click }
            ></span>
        </div>

    )

};

export function OpenThisDayButton( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <OpenThisDayButtonComponent
            { ...props }
            entireList = { playReport.entireList }
            dateListSelected = { playReport.dateListSelected }
            setDateListSelected = { ( callback ) => { dispatch( setDateListSelected( callback ) ) } }

        />
    );


}


