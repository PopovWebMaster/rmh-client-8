
import React, { useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutGrid.scss';

// import { AddEventButton } from './components/AddEventButton/AddEventButton.js';
// import { SaveEventChangesButton } from './components/SaveEventChangesButton/SaveEventChangesButton.js';
// import { EventList } from './components/EventList/EventList.js';

import { PageBodyContainer } from './../../../../components/PageBodyContainer/PageBodyContainer.js';
import { GridDayMenu } from './components/GridDayMenu/GridDayMenu.js';
import { SaveGridEventsList } from './components/SaveGridEventsList/SaveGridEventsList.js';
import { GridDayEditor } from './components/GridDayEditor/GridDayEditor.js';
import { PageBodyCounters } from './../../../../components/PageBodyCounters/PageBodyCounters.js';

import { save_grid_events_changes_on_server } from './vendors/save_grid_events_changes_on_server.js';

const LayoutGridComponent = ( props ) => {

    let {

    } = props;

    useEffect( () => {
        return () => {
            save_grid_events_changes_on_server( () => {} );
        }
    }, [] );
    
    return (
        <PageBodyContainer 
            className =             'layoutGrid'

            controlPanelContainer = { <>
                <GridDayMenu />
                <SaveGridEventsList />
            </> }

            leftContainer =  { <PageBodyCounters /> }

            bodyContainer = { <GridDayEditor /> }
        />
    )

};

export function LayoutGrid( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutGridComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
