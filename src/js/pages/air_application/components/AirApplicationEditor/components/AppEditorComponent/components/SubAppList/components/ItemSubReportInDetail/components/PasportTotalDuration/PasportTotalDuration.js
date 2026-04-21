// PasportTotalDuration
// PasportDuration

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PasportTotalDuration.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../../../redux/applicationSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { convert_sec_to_time_for_Excel } from './../../../../../../../../../../../../helpers/convert_sec_to_time_for_Excel.js'


const PasportTotalDurationComponent = ( props ) => {

    let {
        duration_sec,
    } = props;


    
    
    return (
        <div className = 'SA_PasportTotalDuration'>
            <h4>Хрон. общ</h4>

            <span className = 'SAPTD_span'>time:</span>
            <input
                type = 'text'
                value = { convert_sec_to_time_for_Excel( duration_sec ) }
                className = 'SAPTD_input_text'
                onChange = { () => {} }
            />

            <span className = 'SAPTD_span'>sec:</span>
            <input
                type = 'text'
                value = { duration_sec }
                className = 'SAPTD_input_text'
                onChange = { () => {} }
            />
            

        </div>
    )

};

export function PasportTotalDuration( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <PasportTotalDurationComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
