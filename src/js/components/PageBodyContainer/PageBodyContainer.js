
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageBodyContainer.scss';

import { ScrollContainer } from './../ScrollContainer/ScrollContainer.js';

const PageBodyContainerComponent = ( props ) => {

    let {
        className = '',
        controlPanelContainer,
        bodyContainer,

    } = props;

    return (
        <div className = { `pageBodyContainer ${className}` }>

            <div 
                className = 'PBC_ControlPanel'
            >
                { controlPanelContainer }

            </div>

            <div 
                className = 'PBC_scroll_container'
            >
                <ScrollContainer>
                    { bodyContainer }
                </ScrollContainer>
            </div>
        </div>
    )

};

export function PageBodyContainer( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();
    return (
        <PageBodyContainerComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }
        />
    );


}
