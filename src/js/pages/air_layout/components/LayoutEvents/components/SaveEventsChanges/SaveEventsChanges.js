
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveEventsChanges.scss';

import { selectorData as layoutSlice, setEventList, setEventsIsChanged } from './../../../../../../redux/layoutSlice.js';

import { setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { PageBodySaveButton } from './../../../../../../components/PageBodySaveButton/PageBodySaveButton.js';


const SaveEventsChangesComponent = ( props ) => {

    let {

        eventsIsChanged,
        eventList,
        setSpinnerIsActive,

        setEventList,
        setEventsIsChanged,

    } = props;

    const click = () => {
        if( eventsIsChanged ){

            setSpinnerIsActive( true );

            send_request_to_server({
                route: `save-event-list`,
                data: { 
                    list: eventList,
                },
                successCallback: ( response ) => {
                    console.dir( 'response' );
                    console.dir( response );
                    if( response.ok ){
                        setSpinnerIsActive( false );
                        setEventList(response.list);
                        setEventsIsChanged( false );
                    };

                },
            });
            
        };

    }
    
    return (
        <PageBodySaveButton 
            isChanged = { eventsIsChanged }
            clickHandler = { click }

        />
    )

};

export function SaveEventsChanges( props ){

    const layout = useSelector( layoutSlice );
    
    const dispatch = useDispatch();

    return (
        <SaveEventsChangesComponent
            { ...props }
            eventsIsChanged =   { layout.eventsIsChanged }
            eventList =         { layout.eventList }

            setSpinnerIsActive =    { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setEventList =          { ( val ) => { dispatch( setEventList( val ) ) } }
            setEventsIsChanged =    { ( val ) => { dispatch( setEventsIsChanged( val ) ) } }



        />
    );


}
