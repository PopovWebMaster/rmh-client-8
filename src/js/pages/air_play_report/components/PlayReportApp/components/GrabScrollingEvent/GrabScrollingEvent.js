
import React, { useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as playReportSlice, setFilteredList } from './../../../../redux/playReportSlice.js';

import './GrabScrollingEvent.scss';

import { add_event_key_down_alt } from './vendors/add_event_key_down_alt.js';


const GrabScrollingEventComponent = ( props ) => {

    let {

    } = props;


    useEffect( ()  => {
        add_event_key_down_alt();

    }, [] );
    
    return (
        <div id = 'grabCurtain'></div>
    )

};

export function GrabScrollingEvent( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <GrabScrollingEventComponent
            { ...props }


        />
    );


}
