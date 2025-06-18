
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as navigationSlice } from './../../../../redux/navigationSlice.js';
// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './BtnLogout.scss';

import { ROUTE } from './../../../../../../config/routes.js';


const BtnLogoutComponent = ( props ) => {

    let {

    } = props;
    
    return (
        <a 
            className = 'BtnLogout'
            href = { `${HOST_TO_API_SERVER}/${ROUTE.LOGOUT}` }
        >
            <span className = 'TMIR_icon'></span>
            <span className = 'TMIR_title'>Выйти</span>
        </a>
    )

};

export function BtnLogout( props ){

    // const navigation = useSelector( navigationSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <BtnLogoutComponent
            { ...props }
            // currentPage = { navigation.currentPage }
            // currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
