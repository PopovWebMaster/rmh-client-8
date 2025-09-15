
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './EmptyTimeSector.scss';

// import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';

import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { get_dutation_str_from_sec } from './../../vendors/get_dutation_str_from_sec.js';

const EmptyTimeSectorComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        isError,

    } = props;

    let text_seccess = 'Свободно:';
    let text_error = 'Ошибка, нарушение хронометража! Превышен на ';

    return (
        <div className = 'schEventItemRemains'>
            <span className = 'time'>{ convert_sec_to_time( startTime ) }</span>
            <span className = 'text'>{ isError? text_error: text_seccess }</span>
            <span className = 'time'>{ get_dutation_str_from_sec( durationTime ) }</span>
        </div>
    )

};

export function EmptyTimeSector( props ){

    // const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <EmptyTimeSectorComponent
            { ...props }

            // setCounterList = { ( obj ) => { dispatch( setCounterList( obj ) ) } }

        />
    );


}
