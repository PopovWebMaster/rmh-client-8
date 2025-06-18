
import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as companySlice } from './../../../../../../redux/companySlice';

import './SiteLogo.scss';

const SiteLogoComponent = ( props ) => {

    let {
        currentCompanyName,
        currentCompanyType
    } = props;
    


    return (
        <div className = 'siteLogo'>
            <span>{ currentCompanyName }</span><span className = 'logoCompanyType'>{ currentCompanyType }</span>
        </div>
    )

};

export function SiteLogo( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <SiteLogoComponent
            { ...props }
            currentCompanyName = { company.currentCompanyName }
            currentCompanyType = { company.currentCompanyType }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
