
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AitApplicationMain.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';
import { PageBodyContainer } from './../../../../components/PageBodyContainer/PageBodyContainer.js';

import { AddAppButton } from './components/AddAppButton/AddAppButton.js';
import { ApplicationList } from './components/ApplicationList/ApplicationList.js';

const AitApplicationMainComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageBodyContainer
            className = 'applicationsMain'
            controlPanelContainer = { <AddAppButton /> }
            bodyContainer = { <ApplicationList /> }
        />
    )

};


export function AitApplicationMain( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AitApplicationMainComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
