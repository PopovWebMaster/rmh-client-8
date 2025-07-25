
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PointControlSlider.scss';

import { selectorData as cutEventEditorSlise } from './../../../../../../redux/cutEventEditorSlise.js';



const PointControlSliderComponent = ( props ) => {

    let {
        maxDurationTime,
        point,
        pointIndex,

    } = props;

    const getLeft = ( nun, max ) => {
        let proc = (nun - 1) * 100/max;
        return `${proc}%`;
    }
    const click = () => {
        alert( pointIndex );
    }

    return (
        <div 
            className = 'CGETT_PointControlSlider'
            style = {{
                left: getLeft( point, maxDurationTime ),
            }}
            onClick = { click }
        >


        </div>

                
    )

};

export function PointControlSlider( props ){

    const cutEventEditor = useSelector( cutEventEditorSlise );
    // const dispatch = useDispatch();
    
    return (
        <PointControlSliderComponent
            { ...props }
            maxDurationTime = { cutEventEditor.maxDurationTime }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
