
import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';
import { selectorData as commonSlice } from './../../../../../../redux/commonSlice.js';

import './SiteLogo.scss';
import { ROUTE } from './../../../../../../config/routes.js';

const SiteLogoComponent = ( props ) => {

    let {
        currentCompanyName,
        currentCompanyType,
        currentPage,
    } = props;
    


    return (
        <div className = 'siteLogo'>
            { currentPage === ROUTE.PAGE.ADMIN? (
                <a href = { `${HOST_TO_API_SERVER}/${ROUTE.PAGE.ADMIN}` }>Админ панель</a>
            ): (<>
                <span>{ currentCompanyName }</span><span className = 'logoCompanyType'>{ currentCompanyType }</span>
            </>) }
            
        </div>
    )

};

export function SiteLogo( props ){

    const company = useSelector( companySlice );
    const common = useSelector( commonSlice );


    
    // const dispatch = useDispatch();

    return (
        <SiteLogoComponent
            { ...props }
            currentCompanyName = { company.currentCompanyName }
            currentCompanyType = { company.currentCompanyType }
            currentPage = { common.currentPage }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
