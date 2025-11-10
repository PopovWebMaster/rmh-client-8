
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import './AC_TableHeaderRow_TopFixed.scss';

import { ANALYTICS_TABLE } from './../../../../../../../../config/playReport.js';
import { get_DOM_id_for_table_th } from './../../vendors/get_DOM_id_for_table_th.js';



const AC_TableHeaderRow_TopFixedComponent = ( props ) => {

    let {

    } = props;

    useEffect( () => {

        update_DOM_styles();

        window.onresize = update_DOM_styles;

        return () => {
            window.onresize = null;
        }


    }, [] );

    const get_className = ( name ) => {
        return `AC_TopFixed_${name}`;
    }

    const get_header_width_px = () => {
        let result = 0;
        let AC_TableHeaderRow = document.querySelector( '.AC_TableHeaderRow' );
        if( AC_TableHeaderRow ){
            let style = window.getComputedStyle( AC_TableHeaderRow );
            result = parseFloat( style.width );
        };
        return result;
    }

    const set_DOM_style_for_TopFixed = ( width_px ) => {
        let AC_TableHeaderRow_TopFixed = document.querySelector( '.AC_TableHeaderRow_TopFixed' );
        if( AC_TableHeaderRow_TopFixed ){
            AC_TableHeaderRow_TopFixed.style.width = width_px + 'px';
        };
    };

    const hiddent_table_thead = () => {
        let AC_TableHeaderRow = document.querySelector( '.AC_TableHeaderRow' );
        if( AC_TableHeaderRow ){
            AC_TableHeaderRow.style.opacity = '0';
        };
    }

    const update_DOM_styles = () => {
        let thead_width_px = get_header_width_px();

        set_DOM_style_for_TopFixed( thead_width_px );

        for( let i = 0; i < ANALYTICS_TABLE.HEADER.length; i++ ){ 
            let { name } = ANALYTICS_TABLE.HEADER[ i ];
            let id_name = get_DOM_id_for_table_th( name );
            let class_name = get_className( name );

            let donorElem = document.getElementById( id_name );
            if( donorElem ){
                let donor_style = window.getComputedStyle( donorElem );
                let donor_width = parseFloat( donor_style.width ) - 1;
                let proc = donor_width * 100 / thead_width_px;
                let recepientElem = document.querySelector( `.${class_name}` );
                if( recepientElem ){
                    recepientElem.style.width = proc + '%';
                };
            };
        };

        hiddent_table_thead();
    }

    const create = () => {

        let span = ANALYTICS_TABLE.HEADER.map( ( item, index ) => {
            let {
                title,
                name
            } = item;

            return (
                <span 
                    key = { index }
                    className = { get_className( name ) }
                >{ title }</span>
            );

        } );

        return span;

    }


    return (
        <div className = 'AC_TableHeaderRow_TopFixed'>
            { create() }
        </div>

    )

};

export function AC_TableHeaderRow_TopFixed( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const layout = useSelector( layoutSlice );


    
    const dispatch = useDispatch();

    return (
        <AC_TableHeaderRow_TopFixedComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            evenstTree = { playReportAnalytics.evenstTree }


            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
