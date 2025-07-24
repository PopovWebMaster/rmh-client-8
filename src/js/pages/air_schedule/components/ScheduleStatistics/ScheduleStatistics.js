
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleStatistics.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';
// import { PageBodyCounters } from './../../../../components/PageBodyCounters/PageBodyCounters.js';
import { PageBodyCounters } from './../../../../components/PageBodyCounters/PageBodyCounters.js';


const ScheduleStatisticsComponent = ( props ) => {

    let {

    } = props;
    let [ isOpen, setIsOpen ] = useState( false );

    const get_item_class = ( val ) => {
        return val? 'icon-angle-left': 'icon-angle-right'
    }

    return (
        <div className = 'scheduleStatistics'>

            <div className = { `SS_body ${ isOpen? 'open': '' }` }>
                <PageBodyCounters />
            </div>

            <div 
                className = 'SS_btn'
                onClick = { () => { setIsOpen( !isOpen ) } }
            >
                <span className = { get_item_class( isOpen ) }></span>
            </div>
            
        </div>
    )

};


export function ScheduleStatistics( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleStatisticsComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
