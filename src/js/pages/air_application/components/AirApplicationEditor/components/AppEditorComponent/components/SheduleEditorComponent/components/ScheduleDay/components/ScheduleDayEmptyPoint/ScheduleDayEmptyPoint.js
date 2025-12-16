
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleDayEmptyPoint.scss';

// import { selectorData as applicationSlice, setEnvIsOpen } from './../../../../../../../../../../../../redux/applicationSlice.js';
// import { selectorData as scheduleSlise } from './../../../../../../../../../../../../redux/scheduleSlise.js';


const ScheduleDayEmptyPointComponent = ( props ) => {

    let {
    } = props;



    return (
        <div className = 'scheduleDayEmptyPoint SEC_CharDayTimePoint'>

        </div>
    )

};

export function ScheduleDayEmptyPoint( props ){
    // const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <ScheduleDayEmptyPointComponent
            { ...props }
            // charType = { schedule.charType }
            // releaseName = { schedule.releaseName }

            // setEnvIsOpen = { ( val ) => { dispatch( setEnvIsOpen( val ) ) } }



        />
    );


}
