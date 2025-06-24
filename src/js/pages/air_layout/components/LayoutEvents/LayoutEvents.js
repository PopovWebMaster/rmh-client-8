// LayoutEvents


import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutEvents.scss';


// import { AddEventButton } from './components/AddEventButton/AddEventButton.js';
// import { SaveEventChangesButton } from './components/SaveEventChangesButton/SaveEventChangesButton.js';
// import { EventList } from './components/EventList/EventList.js';

// import { LayoutPageContainer } from './../LayoutPageContainer/LayoutPageContainer.js';

import { PageBodyContainer }    from './../../../../components/PageBodyContainer/PageBodyContainer.js';
import { AddEventButton }       from './components/AddEventButton/AddEventButton.js';
import { SaveEventsChanges }    from './components/SaveEventsChanges/SaveEventsChanges.js';
import { EventList }            from './components/EventList/EventList.js';

const LayoutEventsComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageBodyContainer 
            className = 'layoutEvents'
            controlPanelContainer = { <>
                <AddEventButton />
                <SaveEventsChanges />
            </> }
            bodyContainer = { <EventList /> }
        />
    )

};

export function LayoutEvents( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutEventsComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
