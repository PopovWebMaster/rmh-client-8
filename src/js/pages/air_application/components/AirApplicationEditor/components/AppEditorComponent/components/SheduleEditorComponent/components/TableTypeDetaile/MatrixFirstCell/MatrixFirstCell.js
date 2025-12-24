
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MatrixFirstCell.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';
// import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';
// import { BlindTimePointAddRow } from './BlindTimePointAddRow/BlindTimePointAddRow.js';
// import { SetMatrixToStore } from './SetMatrixToStore/SetMatrixToStore.js';

// import { MartixHeader } from './MartixHeader/MartixHeader.js';

import { CHAR_TYPE } from './../../../../../../../../../../../config/application.js';


const MatrixFirstCellComponent = ( props ) => {

    let {
        Schedule,
        sec,
        title,
        sec_list,
        interval,

        charType,
        
    } = props;

    const click = () => {
        if( charType === CHAR_TYPE.BLOCK || charType === CHAR_TYPE.FILE ){
            for( let i = 0; i < sec_list.length; i++ ){
                Schedule.AllTimePointsToggle( sec_list[ i ] );
            };
        }else if( charType === CHAR_TYPE.BLIND ){
            Schedule.AllTimePointsToggle( sec );
        };
    }


    return (
        <div
            className = 'SB_TTD_MatrixFirstCell'
            onClick = { click }
        >
            <span>{ title }</span>
        </div>
    )

};

export function MatrixFirstCell( props ){

    const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <MatrixFirstCellComponent
            { ...props }

            charType = { schedule.charType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
