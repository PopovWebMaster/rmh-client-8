

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportPeriod.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

// import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


const PasportPeriodComponent = ( props ) => {

    let {
        period_from,
        period_to,
    } = props;

    const getDate = ( str ) => {
        let arr = str.split( '-' );
        return `${arr[0]}:${arr[1]}:${arr[2]}`;

    }

    return (
        <div className = 'SA_PasportPeriod'>
            <h4>Период: </h4>
            <input
                type = 'text'
                value = { `${getDate( period_from )} - ${getDate( period_to )}` }
                className = 'SAPP_input_text'
                onChange = { () => {} }
            />
        </div>
    )

};

export function PasportPeriod( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportPeriodComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
