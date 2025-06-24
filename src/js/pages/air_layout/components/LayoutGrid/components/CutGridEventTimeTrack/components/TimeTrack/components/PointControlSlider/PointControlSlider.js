
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PointControlSlider.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';



const PointControlSliderComponent = ( props ) => {

    let {
        // point,
        maxDurationTime,
        point,
        spaceFrom,
        spaceTo,
        pointIndex,

    } = props;

    let [ leftProc, setLeftProc ] = useState( 0 );

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
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    
    return (
        <PointControlSliderComponent
            { ...props }
            // gridDayEventsListById = { layout.gridDayEventsListById }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
