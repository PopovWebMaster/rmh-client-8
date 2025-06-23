// AirLayoutMenu



import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './AirLayoutMenu.scss';

import { NavLink } from 'react-router-dom';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ROUTE } from './../../../../config/routes.js';
import { MenuItem } from './components/MenuItem/MenuItem.js';




const AirLayoutMenuComponent = ( props ) => {

    let {
        currentCompanyAlias
    } = props;




    return (
        <div className = 'airLayoutMenu'>
            
            <NavLink
                to = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'icon-grid' }
                    title = { 'Сетка' }
                />
                
            </NavLink>


            <NavLink
                to = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.KEY_POINTS}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'icon-ellipsis-vert' }
                    title = { 'Кл. точки' }
                />
                
            </NavLink>

            <NavLink
                to = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.EVENTS}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'icon-clipboard-1' }
                    title = { 'События' }
                />
                
            </NavLink>

            <NavLink
                to = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.CATEGORIES}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'fa-list-ul' }
                    title = { 'Категории' }
                />
                
            </NavLink>

        </div>
    )

};


export function AirLayoutMenu( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirLayoutMenuComponent
            { ...props }

            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
