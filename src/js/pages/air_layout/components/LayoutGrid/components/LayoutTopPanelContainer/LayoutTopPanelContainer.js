
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutTopPanelContainer.scss';

import { GridDayMenu } from './../GridDayMenu/GridDayMenu.js';
import { SaveGridEventsList } from './../SaveGridEventsList/SaveGridEventsList.js';

const LayoutTopPanelContainerComponent = ( props ) => {

    let {
        children
    } = props;

    
    return (
        <div className = 'layoutTopPanelContainer'>

            <div className = 'LTP_left'>
                <GridDayMenu />
            </div>

            <div className = 'LTP_right'>
                <SaveGridEventsList />
            </div>
 
        </div>
    )

};

export function LayoutTopPanelContainer( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutTopPanelContainerComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
