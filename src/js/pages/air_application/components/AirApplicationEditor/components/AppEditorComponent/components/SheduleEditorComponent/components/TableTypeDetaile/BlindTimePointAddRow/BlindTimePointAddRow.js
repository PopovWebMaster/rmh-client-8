
import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BlindTimePointAddRow.scss';

import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../../redux/currentSubApplicationSlise.js';
import { selectorData as scheduleSlise }     from './../../../../../../../../../../../redux/scheduleSlise.js';

import { CHAR_TYPE } from './../../../../../../../../../../../config/application.js';

import { InputDuration } from './../../../../../../../../../../../components/InputDuration/InputDuration.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../../helpers/convert_time_str_to_sec.js';


const BlindTimePointAddRowComponent = ( props ) => {

    let {
        Schedule,

        charType,
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


    return (
        <div className = 'SB_TTD_BlindTimePointAddRow'>
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
    )

};

export function BlindTimePointAddRow( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    const schedule = useSelector( scheduleSlise );

    // const dispatch = useDispatch();

    return (
        <BlindTimePointAddRowComponent
            { ...props }

            modeMix = { currentSubApplication.modeMix }

            charType = { schedule.charType }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
