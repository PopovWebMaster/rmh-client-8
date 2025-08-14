// MenuForAdmin


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './MenuForAdmin.scss';

import { HomeLink } from './../HomeLink/HomeLink.js';
import { SiteLogo } from './../SiteLogo/SiteLogo.js';
import { MenuItemLink } from './../MenuItemLink/MenuItemLink.js';

import { ROUTE } from './../../../../../../config/routes.js';

const MenuForAdminComponent = ( props ) => {

    let {
    } = props;

    return (<>
        <HomeLink />
        <SiteLogo />

        <MenuItemLink 
            title = { 'Компании' }
            page =  { ROUTE.PAGE.ADMIN }
            routeForReact = { `${ ROUTE.PAGE.ADMIN }/company` }
        />



    </>)

};

export function MenuForAdmin( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuForAdminComponent
            { ...props }

            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
