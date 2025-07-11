
import React, { useRef, useState, useEffect, useMemo }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CharTimeColumn.scss';


import { selectorData as applicationSlice, setApplicationList, setCurrentApplicationId } from './../../../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';
import { selectorData as companySlice }     from './../../../../../../../../../../redux/companySlice.js';
import { selectorData as scheduleSlise }     from './../../../../../../../../../../redux/scheduleSlise.js';



import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { CHAR_TYPE } from './../../../../../../../../../../config/application.js';

import { InputDuration } from './../../../../../../../../../../components/InputDuration/InputDuration.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';

const CharTimeColumnComponent = ( props ) => {

    let {
        charType,
        timePoints,
        addTimePoints,
        clickTimePoint,

        schedule,

    } = props;

    console.dir( 'schedule' );
    console.dir( schedule );


    let [ HH, setHH ] = useState( '' );
    let [ MM, setMM ] = useState( '' );
    let [ SS, setSS ] = useState( '' );


    const add_point = () => {
        
        addTimePoints( convert_time_str_to_sec( `${HH}:${MM}:00` ) );
        setHH( '' );
        setMM( '' );
        setSS( '' );
    }

    const crate = ( list ) => {

        let div = list.map( ( item, index ) => {
            let { time, sec, title } = item;
            return (
                <div className = 'SEC_time_list_item' key = { index }>
                    <span 
                        key = { index }
                        onClick = { () => { clickTimePoint( sec ) } }
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
                        { crate( timePoints ) }
                    </div>
                </ScrollContainer>
            </div>
        </div>       
    )

};

export function CharTimeColumn( props ){

    const application = useSelector( applicationSlice );
    const company = useSelector( companySlice );

    const schedule = useSelector( scheduleSlise );



    const dispatch = useDispatch();

    return (
        <CharTimeColumnComponent
            { ...props }

            schedule = { schedule }



            currentApplicationId = { application.currentApplicationId }
            application = { application }

            currentCompanyAlias = { company.currentCompanyAlias }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


            setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
