
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as userInfoSlice } from './../../../../../../redux/userInfoSlice.js';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './MenuForCompanyPage.scss';

import { HomeLink } from './../HomeLink/HomeLink.js';


const MenuForCompanyPageComponent = ( props ) => {

    let {
    } = props;

    return (<>
        <HomeLink />
    </>)

};

export function MenuForCompanyPage( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <MenuForCompanyPageComponent
            { ...props }

            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
