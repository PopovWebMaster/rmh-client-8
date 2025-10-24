
import React, { useRef, useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './SelectEventsList.scss';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

const SelectEventsListComponent = ( props ) => {

    let {
        activeType,
        setActiveType,
    } = props;
    

    return (
        <div className = 'PR_ASC_SelectEventsList'>

            <ScrollContainer height = '7vh' >




            </ScrollContainer>
 
        </div>

    )

};

export function SelectEventsList( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <SelectEventsListComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
