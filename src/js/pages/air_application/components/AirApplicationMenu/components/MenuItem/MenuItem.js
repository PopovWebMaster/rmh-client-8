
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MenuItem.scss';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

const MenuItemComponent = ( props ) => {

    let {
        icon,
        title,
    } = props;
    
    return (
        <div className = 'AM_MenuItem'>
            <span className = { icon }></span>
            <span className = 'title'>{ title }</span>
        </div>
    )

};

export function MenuItem( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuItemComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
