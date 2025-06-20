
import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setCalendarIsOpen } from './../../../../../../../../redux/playReportSlice.js';

import './Graphics.scss';

const GraphicsComponent = ( props ) => {

    let {
        graphics,
        startTime
    } = props;

    const create = ( arr ) => {
        let li = arr.map( ( item, index ) => {

            let sec = Math.round( (item.startTime.ms - startTime.ms)/1000 );
            return (<li key = { index }>
                <span className = 'PRL_ItemGraphics_item_file'>{ item.file.name }</span>
                <span className = 'PRL_ItemGraphics_item_markIn'>{ sec }<span className = 'PRL_ItemGraphics_item_markInsec'>sec</span></span>
                
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
