
import React, { useRef, useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './ActiveTypeSelect.scss';

const ActiveTypeSelectComponent = ( props ) => {

    let {
        activeType,
        setActiveType,
    } = props;
    

    return (
        <div className = 'PR_ASC_ActiveTypeSelect'>

            <span
                className = {`PR_ASC_A_btn ${ activeType === 'by_name'? 'isActive': '' }`}
                onClick = { () => { setActiveType( 'by_name' ) } }
            >Имя файла</span>

            <span
                className = {`PR_ASC_A_btn ${ activeType === 'by_event'? 'isActive': '' }`}
                onClick = { () => { setActiveType( 'by_event' ) } }
            >Событие</span>
           
            
        </div>

    )

};

export function ActiveTypeSelect( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <ActiveTypeSelectComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
