
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import './AC_TableHeaderRow.scss';

import { ANALYTICS_TABLE } from './../../../../../../../../config/playReport.js';
import { get_DOM_id_for_table_th } from './../../vendors/get_DOM_id_for_table_th.js';



const AC_TableHeaderRowComponent = ( props ) => {

    let {

    } = props;


    const create = () => {

        let th = ANALYTICS_TABLE.HEADER.map( ( item, index ) => {
            let {
                title,
                name
            } = item;

            return (
                <th 
                    key = { index }
                    id = { get_DOM_id_for_table_th( name ) }
                >{ title }</th>
            );

        } );

        return th;

    }


    return (
        <tr className = 'AC_TableHeaderRow'>
            { create() }
        </tr>
    )

};

export function AC_TableHeaderRow( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const layout = useSelector( layoutSlice );


    
    const dispatch = useDispatch();

    return (
        <AC_TableHeaderRowComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            evenstTree = { playReportAnalytics.evenstTree }


            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
