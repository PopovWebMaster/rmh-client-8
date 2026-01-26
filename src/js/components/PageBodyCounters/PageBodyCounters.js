
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageBodyCounters.scss';

import { selectorData as countersSlise } from './../../redux/countersSlise.js';

import { CounterTypeSelect } from './components/CounterTypeSelect/CounterTypeSelect.js';
import { CountersDayList } from './components/CountersDayList/CountersDayList.js';
import { CountersHoursList } from './components/CountersHoursList/CountersHoursList.js';
import { CountersFiles } from './components/CountersFiles/CountersFiles.js';

const PageBodyCountersComponent = ( props ) => {

    let {
        currentCounterType,
    } = props;

    // files

    const get_counter = ( value ) => {
        let result = '';

        switch( value ){
            case 'day':
                result = <CountersDayList />;
                break;

            case 'hour':
                result = <CountersHoursList />;
                break;

            case 'files':
                result = <CountersFiles />
                break;

        };


        return result;

    }


    
    return (
        <div className = 'pageBodyCounters'>
            <h2 className = 'PBC_counter_title' >Счётчик</h2>
            <CounterTypeSelect />

            { get_counter( currentCounterType ) }

            {/* { currentCounterType === 'day'? (
                <CountersDayList />
            ): <CountersHoursList /> } */}

            

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
