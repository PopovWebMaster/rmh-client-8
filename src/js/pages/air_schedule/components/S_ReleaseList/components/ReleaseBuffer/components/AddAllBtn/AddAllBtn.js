
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddAllBtn.scss';

import { selectorData as scheduleResultSlise } from './../../../../../../../../redux/scheduleResultSlise.js';
import { BuffferButtonContainer } from './../BuffferButtonContainer/BuffferButtonContainer.js';

import { StoreScheduleResultEventsClass } from './../../../../../../../../classes/StoreScheduleResultEventsClass.js';

const AddAllBtnComponent = ( props ) => {

    let {
        scheduleEventsList,
        releaseList,
        usedReleasesById,

        scheduleResult,
    } = props;

    let [ isActive, setIsActive ] = useState( true );

    const click = () => {

        let StoreScheduleResultEvents = new StoreScheduleResultEventsClass();
        StoreScheduleResultEvents.CreateList({
            withReleses: true
        });


        // StoreScheduleResultEvents.AddAllReleases( releaseList );
        StoreScheduleResultEvents.AddAllRemainingReleases( releaseList, usedReleasesById );

        StoreScheduleResultEvents.SetListToStore( true );

    }


    return (
        <BuffferButtonContainer 
            isActive =      { isActive }
            title =         'Расставить все'
            clickHandler =  { click }
        />

        
    )

};


export function AddAllBtn( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <AddAllBtnComponent
            { ...props }

            scheduleEventsList = { scheduleResult.scheduleEventsList }
            releaseList = { scheduleResult.releaseList }

            usedReleasesById = { scheduleResult.usedReleasesById }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
