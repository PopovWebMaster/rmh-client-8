
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import { convert_ms_to_time } from './../../../../../../../../../../helpers/convert_ms_to_time.js'

import './Graphics.scss';

const GraphicsComponent = ( props ) => {

    let {
        date,
        graphics,
        startTime
    } = props;

    const get_time = ( ms ) => {
        let time_1 = convert_ms_to_time( ms );
        let arr = time_1.split( '.' );
        return arr[0];

    };

    const getData = ( str ) => {
        
        let arr = str.split( '-' );
        return `${ arr[0] }:${ arr[1] }:${ arr[2] }`
;
    }

    const create = ( arr ) => {
        let li = arr.map( ( item, index ) => {

            let sec = Math.round( (item.startTime.ms - startTime.ms)/1000 );
            return (<li key = { index }>
                <span className = 'PRL_ItemGraphics_item_file'>{ item.file.name }</span>
                <span className = 'PRL_ItemGraphics_item_markIn'>{ sec }<span className = 'PRL_ItemGraphics_item_markInsec'>sec</span></span>

                <input
                    type = 'text'
                    className = 'PRL_ItemGraphics_item_input'
                    value = { `${getData( date.YYYY_MM_DD )} \t ${ get_time( item.startTime.ms ) }` }
                    onChange = { () => {} }
                />
                
            </li>)
        } );

        return li;
    }

    return (
        <div 
            className = 'PRL_ItemMovie2_Graphics'
        >
            <ul>
                { create( graphics ) }
            </ul>
            
        </div> 

    )

};

export function Graphics( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <GraphicsComponent
            { ...props }
            // searchValue = { playReport.searchValue }
            // setCalendarIsOpen = { ( callback ) => { dispatch( setCalendarIsOpen( callback ) ) } }

        />
    );


}
