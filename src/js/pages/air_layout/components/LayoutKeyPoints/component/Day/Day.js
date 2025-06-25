

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Day.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { DayHeader } from './components/DayHeader/DayHeader.js';
import { DayPoint } from './components/DayPoint/DayPoint.js';

const DayComponent = ( props ) => {

    let {
        dayNum,
        weekKeyPointList,

    } = props;

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <DayPoint 
                    key =       { index }
                    name =      { item.name }
                    colorBG =   { item.colorBG }
                    colorText = { item.colorText }
                    time =      { item.time }

                />
            ) ;
        } );

        return div;

    };
    
    return (
        <div className = 'LP_Day'>
            <DayHeader dayNum = { dayNum }/>

            <div className = 'LP_Day_field'>

                { create( weekKeyPointList[ dayNum ] ) }

            </div>
        </div>
    )

};

export function Day( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <DayComponent
            { ...props }
            weekKeyPointList = { layout.weekKeyPointList }

        />
    );


}
