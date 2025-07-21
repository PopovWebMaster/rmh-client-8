
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CurrentDate.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../redux/scheduleResultSlise.js';
import { MOUNTH_NAME } from './../../../../../../config/mounth.js';


const CurrentDateComponent = ( props ) => {

    let {
        setIsOpen,
        currentYear,
        currentMonth,
        currentDate,
    } = props;

    return (
        <div 
            className = 'SC_CurrentDate'
            onClick = { () => { setIsOpen( true ) } }
        >
            <span>
                { currentDate }
            </span>
            <span>
                { MOUNTH_NAME[ currentMonth ] }
            </span>
            <span>
                { currentYear }
            </span>
            
        </div>
    )

};


export function CurrentDate( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <CurrentDateComponent
            { ...props }

            currentYear = { scheduleResult.currentYear }
            currentMonth = { scheduleResult.currentMonth }
            currentDate = { scheduleResult.currentDate }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
