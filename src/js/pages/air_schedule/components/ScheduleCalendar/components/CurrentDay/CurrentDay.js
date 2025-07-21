
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CurrentDay.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { WEEK_NAME_SHORT } from './../../../../../../config/week.js';


const CurrentDayComponent = ( props ) => {

    let {
        setIsOpen,
        currentDayNum,
    } = props;

    return (
        <div className = 'SC_CurrentDay' onClick = { () => { setIsOpen( true ) } }>
            <span>
                { WEEK_NAME_SHORT[ currentDayNum ] }
            </span>
            
        </div>
    )

};


export function CurrentDay( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <CurrentDayComponent
            { ...props }

            currentDayNum = { scheduleResult.currentDayNum }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
