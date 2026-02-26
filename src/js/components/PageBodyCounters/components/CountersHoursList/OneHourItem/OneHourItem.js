
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneHourItem.scss';

import { selectorData as countersSlise } from './../../../../../redux/countersSlise.js';

// import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';
// import { round_to_number } from './../../../../helpers/round_to_number.js';


const OneHourItemComponent = ( props ) => {

    let {

        categoryName,
        categoryColorBG,
        categoryColorText,

        hours,

    } = props;


    let [ isOpen, setIsOpen ] = useState( false );

    const createHours = ( hours ) => {
        let div = hours.map( ( item, index ) => {
            let {
                duration_proc,
                duration_sec,
                duration_time,
                hour,
                time,
            } = item;

            return (
                <div key = { index }>
                    <span className = 'PBS_startTime' >{ time }</span>
                    <span className = 'PBS_duration_time' >{ duration_time }</span>
                    <span className = 'PBS_duration_procent' >{ duration_proc }%</span>
                    <span className = 'PBS_duration_sec' >{ duration_sec } <span>сек</span></span>
                </div>
            );

        } );
        return div

    }
    const click = () => {
        setIsOpen( !isOpen );
    };


    
    return (
        <div className = 'PBC_OneHourItem'>
            <div className = 'PBC_CHL_item'>
                <h4 onClick = { click }>
                    <span className = { `PBC_CHL_icon ${isOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                    <span
                        style = {{
                            backgroundColor: categoryColorBG,
                            color: categoryColorText,
                        }}
                    >{ categoryName }</span>
                </h4>

                { isOpen? createHours( hours ): '' }

                {/* { createHours( hours ) } */}

            </div>

        </div>

    )

};

export function OneHourItem( props ){

    const counters = useSelector( countersSlise );
    // const dispatch = useDispatch();

    return (
        <OneHourItemComponent
            { ...props }
            counterList = { counters.counterList }
            counterListHours = { counters.counterListHours }


            // setCurrentCounterType = { ( val ) => { dispatch( setCurrentCounterType( val ) ) } }


        />
    );


}
