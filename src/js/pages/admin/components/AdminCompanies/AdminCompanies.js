
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AdminCompanies.scss';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';

import { AddCompanyButton } from './../AddCompanyButton/AddCompanyButton.js';
import { CompanyList } from './../CompanyList/CompanyList.js';


const AdminCompaniesComponent = ( props ) => {

    let {

    } = props;

    return (

        <AdminPageContainer
            className =             'adminCompanies'
            topPanelComponents =    { <AddCompanyButton />}
            bodyComponent =         { <CompanyList /> }
        />


    )

};


export function AdminCompanies( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminCompaniesComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
