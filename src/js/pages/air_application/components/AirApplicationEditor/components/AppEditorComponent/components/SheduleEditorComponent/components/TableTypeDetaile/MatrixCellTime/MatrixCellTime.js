
import React, { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MatrixCellTime.scss';

// import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';
// import { selectorData as applicationSlice, setEnvIsOpen } from './../../../../../../../../../../../redux/applicationSlice.js';

const MatrixCellTimeComponent = ( props ) => {

    let {
        time,
    } = props;


    return (
        <div className = 'SB_TTD_MatrixCell_time'>
            <span>{ time }</span>
        </div>

    )

};

export function MatrixCellTime( props ){

    // const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <MatrixCellTimeComponent
            { ...props }

            // charType = { schedule.charType }
            // releaseName = { schedule.releaseName }
            // setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }
            
        />
    );


}
