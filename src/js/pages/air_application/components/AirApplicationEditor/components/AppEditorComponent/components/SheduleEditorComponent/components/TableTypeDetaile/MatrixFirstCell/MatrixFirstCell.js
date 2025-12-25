
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MatrixFirstCell.scss';

import { selectorData as scheduleSlise } from './../../../../../../../../../../../redux/scheduleSlise.js';
import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../../redux/currentSubApplicationSlise.js';

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
        modeShort,
        
    } = props;

    const click = () => {
        if( charType === CHAR_TYPE.BLOCK || charType === CHAR_TYPE.FILE ){
            for( let i = 0; i < sec_list.length; i++ ){
                Schedule.AllTimePointsToggle( sec_list[ i ] );
            };
        }else if( charType === CHAR_TYPE.BLIND ){

            // console.dir( sec );
            // console.dir( sec_list );

            // Schedule.AllTimePointsToggle( sec );

            for( let i = 0; i < sec_list.length; i++ ){
                Schedule.AllTimePointsToggle( sec_list[ i ] );
            };
        };
    }


    return (
        <div
            className = { `SB_TTD_MatrixFirstCell ${modeShort? 'mode_Short': ''}` }
            onClick = { click }
        >
            <span>{ title }</span>
        </div>
    )

};

export function MatrixFirstCell( props ){

    const schedule = useSelector( scheduleSlise );
    const currentSubApplication = useSelector( currentSubApplicationSlise );


    
    // const dispatch = useDispatch();

    return (
        <MatrixFirstCellComponent
            { ...props }

            charType = { schedule.charType }

            modeShort = { currentSubApplication.modeShort }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
