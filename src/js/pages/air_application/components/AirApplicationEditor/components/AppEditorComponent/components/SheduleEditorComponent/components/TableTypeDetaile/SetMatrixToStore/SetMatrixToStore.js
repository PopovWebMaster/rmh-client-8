
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetMatrixToStore.scss';

import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../../redux/currentSubApplicationSlise.js';
import { selectorData as scheduleSlise, setScheduleMatrix }     from './../../../../../../../../../../../redux/scheduleSlise.js';

// import { CHAR_TYPE } from './../../../../../../../../../../../config/application.js';

// import { InputDuration } from './../../../../../../../../../../../components/InputDuration/InputDuration.js';
// import { convert_time_str_to_sec } from './../../../../../../../../../../../helpers/convert_time_str_to_sec.js';


const SetMatrixToStoreComponent = ( props ) => {

    let {
        // Schedule,

        children,

        allTimePointsGroupeList,
        dayList,
        modeMix,

        setScheduleMatrix,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        setIsReady( false );


        let indexY = {};

        let rows = [];
        for( let Y = 0; Y < allTimePointsGroupeList.length; Y++ ){
            let { sec_list } = allTimePointsGroupeList[ Y ];
            for( let i = 0; i < sec_list.length; i++ ){
                indexY[ sec_list[ i ] ] = Y;
            };
            let row = [];
            for( let y = 0; y < dayList.length; y++ ){
                row.push({});
            };
            rows.push( row );
        };

        for( let i = 0; i < dayList.length; i++ ){
            let { timePoints } = dayList[ i ];
            for( let sec in timePoints ){
                let Y = indexY[ sec ];
                rows[ Y ][ i ][ sec ] = { ...timePoints[ sec ] }
            };
        };

        setScheduleMatrix( rows );

        // let timerId = setTimeout( () => {
            setIsReady( true );
        //     clearTimeout( timerId );
        // }, 200 );

        


    }, [ 
        allTimePointsGroupeList,
        dayList,
        modeMix,
    ] );

  


    return (
        <>{ isReady? children: '' }</>
    )

};

export function SetMatrixToStore( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    const schedule = useSelector( scheduleSlise );

    const dispatch = useDispatch();

    return (
        <SetMatrixToStoreComponent
            { ...props }

            modeMix = { currentSubApplication.modeMix }

            // schedule = { schedule }

            allTimePointsGroupeList =   { schedule.allTimePointsGroupeList }
            dayList =                   { schedule.dayList }
            // modeMix =                   { schedule.modeMix }





            setScheduleMatrix = { ( val ) => { dispatch( setScheduleMatrix( val ) ) } }


        />
    );


}
