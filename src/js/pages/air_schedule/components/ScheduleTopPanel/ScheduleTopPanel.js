
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleTopPanel.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';



const ScheduleTopPanelComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'scheduleTopPanel'>
            { children }
        </div>
    )

};


export function ScheduleTopPanel( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleTopPanelComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
