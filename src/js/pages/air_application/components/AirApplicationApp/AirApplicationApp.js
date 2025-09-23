
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './AirApplicationApp.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { ROUTE } from './../../../../config/routes.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { AirApplicationMenu } from './../AirApplicationMenu/AirApplicationMenu.js';
import { AitApplicationMain } from './../AitApplicationMain/AitApplicationMain.js';
import { AirApplicationEditor } from './../AirApplicationEditor/AirApplicationEditor.js';

import { SetCurrentManager } from './../SetCurrentManager/SetCurrentManager.js';
 

const AirApplicationAppComponent = ( props ) => {

    let {
        currentCompanyAlias,

    } = props;

    let navigate = useNavigate();
    
    useEffect( () => {
        if( currentCompanyAlias !== null ){
            if( IS_DEVELOPMENT ){
                navigate( `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}` );

            }else{
            };
        };

    }, [ currentCompanyAlias ] );

    return (
        <PageContainer className = 'airApplicationApp'>
            <SetCurrentManager>

                <AirApplicationMenu />

                <Routes>
                    <Route path = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}/` }      element = { <AitApplicationMain /> } />
                    <Route path = { `${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_APPLICATION}/:id` }   element = { <AirApplicationEditor /> } />

                </Routes>

            </SetCurrentManager>
        </PageContainer>
    )

};


export function AirApplicationApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirApplicationAppComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
