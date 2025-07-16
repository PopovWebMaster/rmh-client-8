
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ScheduleTimeColumn.scss';


import { selectorData as scheduleSlise }     from './../../../../../../../../../../redux/scheduleSlise.js';

import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { CHAR_TYPE } from './../../../../../../../../../../config/application.js';

import { InputDuration } from './../../../../../../../../../../components/InputDuration/InputDuration.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';

const ScheduleTimeColumnComponent = ( props ) => {

    let {
        Schedule,

        charType,
        allTimePointsList,
        allTimePointsGroupeList,
        // timePoints,
        // addTimePoints,
        // clickTimePoint,

        // schedule,

    } = props;

    let [ HH, setHH ] = useState( '' );
    let [ MM, setMM ] = useState( '' );
    let [ SS, setSS ] = useState( '' );


    const add_point = () => {
        
        let hh = '00';
        let mm = '00';
        let ss = '00';

        if( HH !== '' ){ hh = HH.padStart( 2, "0" ); };
        if( MM !== '' ){ mm = MM.padStart( 2, "0" ); };
        if( SS !== '' ){ ss = SS.padStart( 2, "0" ) };

        Schedule.AddTimePoint( convert_time_str_to_sec( `${hh}:${mm}:00` ) );

        setHH( '' );
        setMM( '' );
        setSS( '' );
    }

    const click_time_point = ( sec ) => {
        Schedule.AllTimePointsToggle( sec );
    }

    const crate = ( list ) => {

        let div = list.map( ( item, index ) => {
            let { sec, title } = item;
            return (
                <div className = 'SEC_time_list_item' key = { index }>
                    <span 
                        key = { index }
                        onClick = { () => { click_time_point( sec ) } }
                    >{ title }</span>

                </div>
            );
        } );

        return div;
    }

    const clickGroupe = ( sec_list ) => { 

        for( let i = 0; i < sec_list.length; i++ ){
            Schedule.AllTimePointsToggle( sec_list[ i ] );
        }
    }



    const crateGroupe = ( list ) => {

        let div = list.map( ( item, index ) => {
            let { sec, title, sec_list } = item;
            return (
                <div className = 'SEC_time_list_item' key = { index }>
                    <span 
                        key = { index }
                        onClick = { () => { clickGroupe( sec_list ) } }
                    >{ title }</span>

                </div>
            );
        } );

        return div;
    }



    return (
        <div className = 'charTimeColumn'>

            <div className = 'SEC_time_add'>
                { charType === CHAR_TYPE.BLIND? (<div className = 'addTimeWrap'>
                    <InputDuration
                        HH = { HH }
                        MM = { MM }
                        SS = { SS }
                        setHH = { setHH }
                        setMM = { setMM }
                        setSS = { setSS }
                        enterHandler = { add_point }
                    
                    />
                </div>): '' }
        
            </div>

            <div className = 'SEC_time_buttons'>
                <ScrollContainer>
                    <div>
                        { charType === CHAR_TYPE.BLOCK || charType === CHAR_TYPE.FILE? crateGroupe( allTimePointsGroupeList ): crate( allTimePointsList )  }
                    </div>
                </ScrollContainer>
            </div>
        </div>       
    )

};

export function ScheduleTimeColumn( props ){

    const schedule = useSelector( scheduleSlise );

    const dispatch = useDispatch();

    return (
        <ScheduleTimeColumnComponent
            { ...props }

            // schedule = { schedule }
            charType = { schedule.charType }
            allTimePointsList = { schedule.allTimePointsList }
            allTimePointsGroupeList = { schedule.allTimePointsGroupeList }





            // currentApplicationId = { application.currentApplicationId }
            // application = { application }

            // currentCompanyAlias = { company.currentCompanyAlias }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            // setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
