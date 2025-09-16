// SaveScheduleButton


import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SaveScheduleButton.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';
// import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';
import { PageBodySaveButton } from './../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { save_schedule_list_on_server } from './../../vendors/save_schedule_list_on_server.js';


const SaveScheduleButtonComponent = ( props ) => {

    let {
        scheduleEventsListIsChanged
    } = props;

    const click = () => {
        save_schedule_list_on_server( () => {} );
    }

    return (
        <div className = 'saveScheduleButton'>
            <PageBodySaveButton 
                isChanged = { scheduleEventsListIsChanged }
                clickHandler = { click }
            />
        </div>

    )

};


export function SaveScheduleButton( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    // const dispatch = useDispatch();

    return (
        <SaveScheduleButtonComponent
            { ...props }
            scheduleEventsListIsChanged = { scheduleResult.scheduleEventsListIsChanged }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
