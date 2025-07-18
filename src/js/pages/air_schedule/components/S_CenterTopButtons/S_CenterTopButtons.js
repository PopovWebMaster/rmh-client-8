// S_CenterTopButtons

// ScheduleCenter


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './S_CenterTopButtons.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const S_CenterTopButtonsComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'S_CenterTopButtons'>

            { children }
            
        </div>
    )

};


export function S_CenterTopButtons( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <S_CenterTopButtonsComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
