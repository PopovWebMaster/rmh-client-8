
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CompanyPageApp.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
import { ROUTE } from './../../../../config/routes.js';


const CompanyPageAppComponent = ( props ) => {

    let {
        currentCompanyAlias,
        currentCompanyName,
        currentCompanyType,
    } = props;



    return (
        <PageContainer className = 'companyPageApp'>

            <div className = 'menuDepartment'>

                <div className = 'maxLogo'>



                    { currentCompanyAlias? (<>
                        <h1>{ currentCompanyName }<span>({ currentCompanyType })</span></h1>
                        <a href = { `${HOST_TO_API_SERVER}/${ROUTE.COMPANY}/${currentCompanyAlias}/${ROUTE.PAGE.AIR_MAIN}` }>
                            Эфир
                        </a>
                    </>): (
                        <p>Ваш аккаунт не подключён ни к одной из компаний холдинга. Пожалуйста, обратитесь с этим вопросом к администратору сайта.</p>
                    ) }


                    
                </div>

            </div>


        </PageContainer>
    )

};


export function CompanyPageApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <CompanyPageAppComponent
            { ...props }

                currentCompanyAlias =   { company.currentCompanyAlias }
                currentCompanyName =    { company.currentCompanyName }
                currentCompanyType =    { company.currentCompanyType }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
