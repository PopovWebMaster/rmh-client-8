
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as userInfoSlice } from './../../../../../../redux/userInfoSlice.js';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './MenuForAirPage.scss';

import { HomeLink } from './../HomeLink/HomeLink.js';
import { SiteLogo } from './../SiteLogo/SiteLogo.js';
import { MenuItemLink } from './../MenuItemLink/MenuItemLink.js';

import { ROUTE } from './../../../../../../config/routes.js';

const MenuForAirPageComponent = ( props ) => {

    let {
    } = props;

    return (<>
        <HomeLink />
        
        <SiteLogo />

        <MenuItemLink 
            title = { 'Главная' }
            page = { ROUTE.PAGE.AIR_MAIN }
        />

        <MenuItemLink 
            title = { 'Расписание' }
            page = { ROUTE.PAGE.AIR_SCHEDULE }
        />
        <MenuItemLink 
            title = { 'Заявки' }
            page = { ROUTE.PAGE.AIR_APPLICATION }
        />

        <MenuItemLink 
            title = { 'Макет' }
            page = { ROUTE.PAGE.AIR_LAYOUT }
        />

        <MenuItemLink 
            title = { 'Эф. отчёт' }
            page = { ROUTE.PAGE.AIR_PLAY_REPORT }
        />

        <MenuItemLink 
            title = { 'Logs' }
            page = { ROUTE.PAGE.AIR_LOGS }
        />


    </>)

};

export function MenuForAirPage( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuForAirPageComponent
            { ...props }

            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
