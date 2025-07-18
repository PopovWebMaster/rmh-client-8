// CurrentDay


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CurrentDay.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const CurrentDayComponent = ( props ) => {

    let {

    } = props;

    return (
        <div className = 'SC_CurrentDay'>
            CurrentDay
        </div>
    )

};


export function CurrentDay( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <CurrentDayComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
