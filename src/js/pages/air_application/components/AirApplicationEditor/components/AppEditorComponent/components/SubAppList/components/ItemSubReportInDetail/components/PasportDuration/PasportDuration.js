// PasportDuration

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportDuration.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { convert_sec_to_time_for_Excel } from './../../../../../../../../../../../../helpers/convert_sec_to_time_for_Excel.js'


const PasportDurationComponent = ( props ) => {

    let {
        duration_sec,
    } = props;


    
    
    return (
        <div className = 'SA_PasportDuration'>
            <h4>Хрон. </h4>

            <span className = 'SAPD_span'>time:</span>
            <input
                type = 'text'
                value = { convert_sec_to_time_for_Excel( duration_sec ) }
                className = 'SAPD_input_text'
                onChange = { () => {} }
            />

            <span className = 'SAPD_span'>sec:</span>
            <input
                type = 'text'
                value = { duration_sec }
                className = 'SAPD_input_text'
                onChange = { () => {} }
            />
            

        </div>
    )

};

export function PasportDuration( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportDurationComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
