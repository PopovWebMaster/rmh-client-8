
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './AirApplicationMenu.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ROUTE } from './../../../../config/routes.js';
import { MenuItem } from './components/MenuItem/MenuItem.js';
import { MenuEditorTitle } from './components/MenuEditorTitle/MenuEditorTitle.js';


const AirApplicationMenuComponent = ( props ) => {

    let {
        currentCompanyAlias
    } = props;

    return (
        <div className = 'applicationsMenu'>
            <NavLink
                to = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}` }
                className={ ({ isActive }) => isActive ? "active" : "" }
                end
            >
                <MenuItem 
                    icon = { 'fa-reorder' }
                    title = { 'Список' }
                />
                
            </NavLink>

            <MenuEditorTitle />

        </div>
    )

};


export function AirApplicationMenu( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirApplicationMenuComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
