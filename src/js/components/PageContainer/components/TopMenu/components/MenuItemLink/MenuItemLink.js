
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { selectorData as commonSlice } from './../../../../../../redux/commonSlice.js';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './MenuItemLink.scss';

import { ROUTE } from './../../../../../../config/routes.js';


const MenuItemLinkComponent = ( props ) => {

    let {
        title,
        page,
        route = false,
        routeForReact = false,

        currentPage,
        currentCompanyAlias,

    } = props;

    const get_href = () => {
        if( route === false ){
            return `${HOST_TO_API_SERVER}/${ROUTE.COMPANY}/${currentCompanyAlias}/${page}`;
        }else{
            return `${HOST_TO_API_SERVER}/${route}`;
        };

    }
    
    return (<>
        { routeForReact === false? (
            <a className = { `${page === currentPage? 'isActive': ''} menuItemLink` }
                href = { get_href() }
            >
                <span className = 'TMIL_icon'></span>
                <span className = 'TMIL_title'>{ title }</span>
            </a>   
        ): (
            <NavLink
                to = { `${routeForReact}` }
                className={ ({ isActive }) => isActive ? "isActive menuItemLink" : "menuItemLink" }
                end
            >
                <>
                    <span className = 'TMIL_icon'></span>
                    <span className = 'TMIL_title'>{ title }</span>
                </>
                    
            </NavLink>
            
        ) }
    </>

    )

};

export function MenuItemLink( props ){

    const common = useSelector( commonSlice );
    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuItemLinkComponent
            { ...props }
            currentPage = { common.currentPage }
            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }
        />
    );


}
