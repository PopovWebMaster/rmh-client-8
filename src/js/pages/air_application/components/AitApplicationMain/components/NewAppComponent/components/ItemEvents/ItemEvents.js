
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemEvents.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';

import { SelectedEvents } from './../../../../../../../../components/SelectedEvents/SelectedEvents.js';

const ItemEventsComponent = ( props ) => {

    let {
        categoryId,
        eventId,
        setEventId,
    } = props;

    
    return (
        <div className = 'ANAppl_events'>

            <SelectedEvents
                title =                 { 'График' }
                eventNameNoSelected =   { 'Слепой график' }
                eventId  =              { eventId }
                onlyCategoryId =        { categoryId }
                setEventId =            { setEventId }
            />
            
        </div>

    )

};

export function ItemEvents( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemEventsComponent
            { ...props }

            applicationList = { application.applicationList }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
