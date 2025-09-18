
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './AirLayoutApp.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ROUTE } from './../../../../config/routes.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { AirLayoutMenu } from './../AirLayoutMenu/AirLayoutMenu.js';
import { LayoutGrid } from './../LayoutGrid/LayoutGrid.js';
import { LayoutCategory } from './../LayoutCategory/LayoutCategory.js';
import { LayoutEvents } from './../LayoutEvents/LayoutEvents.js';
import { LayoutKeyPoints } from './../LayoutKeyPoints/LayoutKeyPoints.js';



const AirLayoutAppComponent = ( props ) => {

    let {
        currentCompanyAlias
    } = props;

    let navigate = useNavigate();

    useEffect( () => {
        if( currentCompanyAlias !== null ){
            if( IS_DEVELOPMENT ){
                // navigate( `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}` );

                navigate( `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.CATEGORIES}` );
                // navigate( `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.EVENTS}` );
                // navigate( `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.KEY_POINTS}` );





            }else{

                // console.dir(  );
                // navigate( `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}` );
            };
        };

    }, [ currentCompanyAlias ] );




    return (
        <PageContainer className = 'airLayoutApp'>

            <AirLayoutMenu />

            <Routes>
                <Route path = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/` } element = { <LayoutGrid /> } />

                <Route path = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.KEY_POINTS}` }    element = { <LayoutKeyPoints /> } />
                <Route path = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.EVENTS}` }        element = { <LayoutEvents /> } />
                <Route path = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_LAYOUT}/${ROUTE.AIR_LAYOUT.CATEGORIES}` }    element = { <LayoutCategory />} />

            </Routes>

        </PageContainer>
    )

};


export function AirLayoutApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirLayoutAppComponent
            { ...props }

            currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
