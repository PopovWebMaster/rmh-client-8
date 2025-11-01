
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SaveScheduleButton.scss';

import { selectorData as scheduleResultSlise } from './../../../../redux/scheduleResultSlise.js';
// import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';
import { PageBodySaveButton } from './../../../../components/PageBodySaveButton/PageBodySaveButton.js';

import { save_schedule_list_on_server } from './../../vendors/save_schedule_list_on_server.js';

import { IsAllowedContainer } from './../../../../components/IsAllowedContainer/IsAllowedContainer.js';


const SaveScheduleButtonComponent = ( props ) => {

    let {
        scheduleEventsListIsChanged
    } = props;

    let [ isAllowed, setIsAllowedResult ] = useState( false );


    const click = () => {
        if( isAllowed ){
            save_schedule_list_on_server( () => {} );
        };
        
    }

    return (

        <IsAllowedContainer
            accessName =            'schedule_edit'
            setIsAllowedResult =    { setIsAllowedResult }
        >
            <div className = 'saveScheduleButton'>
                <PageBodySaveButton 
                    isChanged = { scheduleEventsListIsChanged }
                    clickHandler = { click }
                />
            </div>

        </IsAllowedContainer>


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
