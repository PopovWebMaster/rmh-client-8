
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as commonSlice } from './../../../../../../redux/commonSlice.js';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './MenuItemLeft.scss';

const MenuItemLeftComponent = ( props ) => {

    let {
        title,
        page,

        currentPage,
        currentCompanyAlias,

    } = props;
    
    return (
        <a 
            className = { `${page === currentPage? 'isActive': ''} menuItemLeft` }
            href = { `${HOST_TO_API_SERVER}/${currentCompanyAlias}/${page}` }
        >
            <span className = 'TMIL_icon'></span>
            <span className = 'TMIL_title'>{ title }</span>
        </a>
    )

};

export function MenuItemLeft( props ){

    const common = useSelector( commonSlice );
    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuItemLeftComponent
            { ...props }
            currentPage = { common.currentPage }
            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }
        />
    );


}
