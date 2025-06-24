
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './GridDayMenu.scss';

import { selectorData as layoutSlice, setGridCurrentDay } from './../../../../../../redux/layoutSlice.js';

// import { WEEK } from './../../../../../../config/week.js';

const GridDayMenuComponent = ( props ) => {

    let {
        gridCurrentDay,
        gridCurrentDayName,
        setGridCurrentDay,
    } = props;

    const getClassName = ( currentDay, val ) => {
        return `gridMenu_item ${ currentDay === val? 'selected': ''}`;
    };

    const click = ( val ) => { 
        if( val !== gridCurrentDay ){
            setGridCurrentDay( val );
        };
    }

    return (
        <div className = 'gridDayMenu'>

            <div className = 'gridDayName'>
                <span>{ gridCurrentDayName }</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 0 ) }
                onClick = { () => { click( 0 ) } }
            >
                <span>ПН</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 1 ) }
                onClick = { () => { click( 1 ) } }
            >
                <span>ВТ</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 2 ) }
                onClick = { () => { click( 2 ) } }
            >
                <span>СР</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 3 ) }
                onClick = { () => { click( 3 ) } }
            >
                <span>ЧТ</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 4 ) }
                onClick = { () => { click( 4 ) } }
            >
                <span>ПТ</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 5 ) }
                onClick = { () => { click( 5 ) } }
            >
                <span>СБ</span>
            </div>

            <div
                className = { getClassName( gridCurrentDay, 6 ) }
                onClick = { () => { click( 6 ) } }
            >
                <span>ВС</span>
            </div>
            
        </div>

    )

};

export function GridDayMenu( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <GridDayMenuComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            gridCurrentDayName = { layout.gridCurrentDayName }

            setGridCurrentDay = { ( val ) => { dispatch( setGridCurrentDay( val ) ) } }


        />
    );


}
