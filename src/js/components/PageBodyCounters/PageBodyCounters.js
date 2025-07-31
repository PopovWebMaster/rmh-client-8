
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageBodyCounters.scss';

import { selectorData as countersSlise } from './../../redux/countersSlise.js';

import { CounterTypeSelect } from './components/CounterTypeSelect/CounterTypeSelect.js';
import { CountersDayList } from './components/CountersDayList/CountersDayList.js';
import { CountersHoursList } from './components/CountersHoursList/CountersHoursList.js'

const PageBodyCountersComponent = ( props ) => {

    let {
        currentCounterType,
    } = props;


    
    return (
        <div className = 'pageBodyCounters'>
            <h2 className = 'PBC_counter_title' >Счётчик</h2>
            <CounterTypeSelect />

            { currentCounterType === 'day'? (
                <CountersDayList />
            ): <CountersHoursList /> }

            

        </div>

    )

};

export function PageBodyCounters( props ){

    const counters = useSelector( countersSlise );
    // const dispatch = useDispatch();

    return (
        <PageBodyCountersComponent
            { ...props }

            currentCounterType = { counters.currentCounterType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
