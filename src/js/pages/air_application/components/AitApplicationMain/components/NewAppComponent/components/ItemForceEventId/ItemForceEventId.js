// ItemForceEventId


import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemForceEventId.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';

import { SelectedEvents } from './../../../../../../../../components/SelectedEvents/SelectedEvents.js';

const ItemForceEventIdComponent = ( props ) => {

    let {
        forceEventId,
        categoryId,
        eventId,
        setForceEventId,
    } = props;


    
    return (

        <>{ categoryId === null && eventId === null? (
            <div className = 'ANAppl_force_events'>

                <SelectedEvents
                    title =                 { 'Событие' }
                    // eventNameNoSelected =   { 'Слепой график' }
                    eventId  =              { forceEventId }
                    onlyCategoryId =        { 'all_categoryes' }
                    setEventId =            { setForceEventId }
                />
                
            </div>

        ): '' }</>

        

    )

};

export function ItemForceEventId( props ){

    const application = useSelector( applicationSlice );
    const dispatch = useDispatch();

    return (
        <ItemForceEventIdComponent
            { ...props }

            applicationList = { application.applicationList }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
