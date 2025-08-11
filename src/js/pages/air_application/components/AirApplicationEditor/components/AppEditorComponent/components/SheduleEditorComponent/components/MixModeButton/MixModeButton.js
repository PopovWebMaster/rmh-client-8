
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MixModeButton.scss';

// import { selectorData as applicationSlice  } from './../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as currentSubApplicationSlise, setModeMix  } from './../../../../../../../../../../redux/currentSubApplicationSlise.js';
import { selectorData as scheduleSlise }     from './../../../../../../../../../../redux/scheduleSlise.js';
import { CHAR_TYPE } from './../../../../../../../../../../config/application.js'


const MixModeButtonComponent = ( props ) => {

    let {
        modeMix,
        setModeMix,
        charType,
    } = props;

    const click = () => {
        setModeMix( !modeMix );
    }

    return (
        <div 
            className = 'SEC_MixModeButton'
            onClick = { click }
        >
            <span className = 'text'>Mix</span>
            <span className = 'status'>{ modeMix? 'Вкл': 'Выкл' }</span>

        </div>
    )

};

export function MixModeButton( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    const schedule = useSelector( scheduleSlise );


    const dispatch = useDispatch();

    return (
        <MixModeButtonComponent
            { ...props }

            modeMix =   { currentSubApplication.modeMix }
            charType =  { schedule.charType }

            setModeMix = { ( val ) => { dispatch( setModeMix( val ) ) } }


        />
    );


}
