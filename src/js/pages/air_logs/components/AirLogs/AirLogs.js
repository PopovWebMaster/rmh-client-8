
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirLogs.scss';

import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { PAGE } from './../../../../config/routes.js';
import { COMPANY_TYPE } from './../../../../config/company.js';

import { InfoContainer } from './../../../../components/InfoContainer/InfoContainer.js';
import { LogsByProgramSystem } from './../LogsByProgramSystem/LogsByProgramSystem.js';



const AirLogsComponent = ( props ) => {

    let {
        currentCompanyType,
        companyProgramSystem,

    } = props;

    return (
        <PageContainer className = 'airLogs'>

            <>{ currentCompanyType === COMPANY_TYPE.TV? (
                <>{ companyProgramSystem === null? 

                    <InfoContainer margin = {'2em 0'}>
                        <p>
                            В учётной записи вашей компании нет данных о программно-аппаратном комплексе, который вы используете для осуществления телевещания. 
                        </p>
                        <p>
                                Если вас интересует возможность сохранения данных из ваших лог-файлов, пожалуйста, обратитесь с этим вопросом к администратору сайта.
                        </p>
                    </InfoContainer>: 

                    <LogsByProgramSystem />
                    
                }</>
            ): (
                <InfoContainer margin = {'2em 0'}>
                    <p>Данных для компании тип <span style = {{ fontWeight: 'bold'}}>"{ currentCompanyType }"</span> нет.</p>
                </InfoContainer>
            ) }</>

        </PageContainer>
    )

};


export function AirLogs( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirLogsComponent
            { ...props }

            currentCompanyType = { company.currentCompanyType }
            companyProgramSystem = { company.companyProgramSystem }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
