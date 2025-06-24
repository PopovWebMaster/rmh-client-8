
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PointOfTimeBoundary.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';

import { convert_sec_to_time } from './../../../../../../../../../../helpers/convert_sec_to_time.js';

const PointOfTimeBoundaryComponent = ( props ) => {

    let {
        timeSec,
    } = props;

    return (
        <div className = 'CGETT_time_space'>
            <span>{ convert_sec_to_time( timeSec ) }</span>
        </div>
    )

};

export function PointOfTimeBoundary( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    
    return (
        <PointOfTimeBoundaryComponent
            { ...props }
            // gridOneDayList = { layout.gridOneDayList }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
