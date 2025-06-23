
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutGrid.scss';

// import { AddEventButton } from './components/AddEventButton/AddEventButton.js';
// import { SaveEventChangesButton } from './components/SaveEventChangesButton/SaveEventChangesButton.js';
// import { EventList } from './components/EventList/EventList.js';

import { PageBodyContainer } from './../../../../components/PageBodyContainer/PageBodyContainer.js';

const LayoutGridComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageBodyContainer 
            className =             'layoutGrid'

            controlPanelContainer = { <></> }
            saveButton_clickHandler =   { () => {} }
            bodyContainer = { <>
            dds
 
            </> }
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
