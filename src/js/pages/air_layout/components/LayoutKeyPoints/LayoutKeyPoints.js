// LayoutKeyPoints


import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutKeyPoints.scss';

// import { AddEventButton } from './components/AddEventButton/AddEventButton.js';
// import { SaveEventChangesButton } from './components/SaveEventChangesButton/SaveEventChangesButton.js';
// import { EventList } from './components/EventList/EventList.js';

import { PageBodyContainer } from './../../../../components/PageBodyContainer/PageBodyContainer.js';
import { KeyPointsEvents } from './component/KeyPointsEvents/KeyPointsEvents.js';
import { Week } from './component/Week/Week.js';


const LayoutKeyPointsComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageBodyContainer 
            className =             'layoutKeyPoints'

            controlPanelContainer = { <></> }

            leftContainer =  { <KeyPointsEvents /> }

            bodyContainer = { <Week /> }
        />
    )

};

export function LayoutKeyPoints( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutKeyPointsComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
