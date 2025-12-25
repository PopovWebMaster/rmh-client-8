
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MatrixCellInput.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';

import { MixContent } from './../MixContent/MixContent.js';
import { CHAR_TYPE } from './../../../../../../../../../../../config/application.js';

const MatrixCellInputComponent = ( props ) => {

    let {
        grid_event_id,
        YYYY_MM_DD,
        value,

        charType,
        
    } = props;


    return (

        <div className = 'SB_TTD_MatrixCell_inp'>
            <div className = 'SB_TTD_MatrixCell_inp_wrap'>
                <input 
                    type = 'text'
                    value = { value }
                    onChange = { () => {} }
                />
            </div>

            { charType === CHAR_TYPE.BLOCK? (
                <MixContent 
                    grid_event_id = { grid_event_id }
                    YYYY_MM_DD =    { YYYY_MM_DD }
                />
            ): '' }

            <div className = 'SB_TTD_MatrixCell_inp_curt'></div>
        </div>

    )

};

export function MatrixCellInput( props ){

    const schedule = useSelector( scheduleSlise );

    // const dispatch = useDispatch();

    return (
        <MatrixCellInputComponent
            { ...props }

            charType = { schedule.charType }

            // setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }
            
        />
    );


}
