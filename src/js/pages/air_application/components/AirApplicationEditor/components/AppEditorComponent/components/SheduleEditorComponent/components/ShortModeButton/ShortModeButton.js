
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ShortModeButton.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as currentSubApplicationSlise, setModeShort  } from './../../../../../../../../../../redux/currentSubApplicationSlise.js';
import { selectorData as scheduleSlise }     from './../../../../../../../../../../redux/scheduleSlise.js';
// import { CHAR_TYPE } from './../../../../../../../../../../config/application.js';


const ShortModeButtonComponent = ( props ) => {

    let {
        // modeMix,
        modeShort,
        // setModeMix,
        setModeShort,
        // charType,
    } = props;

    const click = () => {
        setModeShort( !modeShort );
    }

    return (
        <div 
            className = 'SEC_ShortModeButton'
            onClick = { click }
        >
            <span className = 'text'>Short</span>
            <span className = 'status'>{ modeShort? 'Вкл': 'Выкл' }</span>

        </div>
    )

};

export function ShortModeButton( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    // const schedule = useSelector( scheduleSlise );


    const dispatch = useDispatch();

    return (
        <ShortModeButtonComponent
            { ...props }

            modeShort =   { currentSubApplication.modeShort }
            // charType =  { schedule.charType }

            // setModeMix = { ( val ) => { dispatch( setModeMix( val ) ) } }
            setModeShort = { ( val ) => { dispatch( setModeShort( val ) ) } }


        />
    );


}
