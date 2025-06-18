
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageContentForAdmin.scss';

import { CompanyMenu } from './../CompanyMenu/CompanyMenu.js';


const PageContentForAdminComponent = ( props ) => {

    let {

    } = props;


    return (
        <div className = 'pageContentForAdmin'>

            <CompanyMenu />

        </div>
    )

};


export function PageContentForAdmin( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <PageContentForAdminComponent
            { ...props }
            // userInfo = { userInfo }
            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
