
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CounterTypeSelect.scss';

import { selectorData as countersSlise, setCurrentCounterType } from './../../../../redux/countersSlise.js';

const CounterTypeSelectComponent = ( props ) => {

    let {
        currentCounterType,
        setCurrentCounterType,
    } = props;


    
    return (
        <div className = 'PBC_counterTypeSelect'>

            <div 
                className = { `PBC_type_btn ${ currentCounterType === 'day'? 'isActive': '' }` }
                onClick = { () => { setCurrentCounterType( 'day' ) } }
            >
                <span>Сутки</span>
            </div>

            <div 
                className = { `PBC_type_btn ${ currentCounterType === 'hour'? 'isActive': '' }` }
                onClick = { () => { setCurrentCounterType( 'hour' ) } }
            >
                <span>Час</span>
            </div>

            <div 
                className = { `PBC_type_btn ${ currentCounterType === 'files'? 'isActive': '' }` }
                onClick = { () => { setCurrentCounterType( 'files' ) } }
            >
                <span>Файлы</span>
            </div>

        </div>

    )

};

export function CounterTypeSelect( props ){

    const counters = useSelector( countersSlise );
    const dispatch = useDispatch();

    return (
        <CounterTypeSelectComponent
            { ...props }
            currentCounterType = { counters.currentCounterType }

            setCurrentCounterType = { ( val ) => { dispatch( setCurrentCounterType( val ) ) } }


        />
    );


}
