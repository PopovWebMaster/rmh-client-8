// CountersHoursList

// CountersDayList

import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CountersHoursList.scss';

import { selectorData as countersSlise } from './../../../../redux/countersSlise.js';
import { ScrollContainer } from './../../../ScrollContainer/ScrollContainer.js';

// import { convert_sec_to_time } from './../../../../helpers/convert_sec_to_time.js';
// import { round_to_number } from './../../../../helpers/round_to_number.js';


const CountersHoursListComponent = ( props ) => {

    let {
        counterListHours,
        
    } = props;

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

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { category, hours } = item;
            let {
                colorBG,
                colorText,
                name,
            } = category;

            return (
                <div
                    key = { index }
                    className = 'PBC_CHL_item'
                >
                    <h4>
                        <span
                            style = {{
                                backgroundColor: colorBG,
                                color: colorText,
                            }}
                        >{ name }</span>
                    </h4>

                    { createHours( hours ) }

                </div>
            );

        } );

        return div;

    }





    
    return (
        <div className = 'PBC_CountersHoursList'>

            <ScrollContainer>

                { create( counterListHours ) }

            </ScrollContainer>

        </div>

    )

};

export function CountersHoursList( props ){

    const counters = useSelector( countersSlise );
    // const dispatch = useDispatch();

    return (
        <CountersHoursListComponent
            { ...props }
            counterList = { counters.counterList }
            counterListHours = { counters.counterListHours }


            // setCurrentCounterType = { ( val ) => { dispatch( setCurrentCounterType( val ) ) } }


        />
    );


}
