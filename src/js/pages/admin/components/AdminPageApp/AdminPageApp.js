
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageApp.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// import { SetDataFromHtmlMeta } from './../../../../components/SetDataFromHtmlMeta/SetDataFromHtmlMeta.js';
// import { SetStartingDataFromServer } from './../../../../components/SetStartingDataFromServer/SetStartingDataFromServer.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { ROUTE } from './../../../../config/routes.js';

import { AdminCompanies } from './../AdminCompanies/AdminCompanies.js';
import { AdminCompanyEditor } from './../AdminCompanyEditor/AdminCompanyEditor.js';


const AdminPageAppComponent = ( props ) => {

    let {

    } = props;

    let navigate = useNavigate();

    useEffect(() => {

        if( IS_DEVELOPMENT ){
            // navigate( `/admin` );
            navigate( `/admin/company` );


        }else{
        };

    }, [])



    return (

        <PageContainer className = 'adminApp'>

            <Routes>
                <Route path = { `/admin` }      element = { <div></div> } />
                <Route path = { `/admin/company` }   element = { <AdminCompanies /> } />
                <Route path = { `/admin/company/:id` }   element = { <AdminCompanyEditor /> } />


            </Routes>

        </PageContainer>



    )

};


export function AdminPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
