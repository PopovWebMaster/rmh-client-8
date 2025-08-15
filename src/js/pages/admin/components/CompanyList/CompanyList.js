
import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice, setCurrentCompanyId } from './../../../../redux/adminSlice.js';
import { useNavigate } from "react-router-dom";

import './CompanyList.scss';

import { ScrollContainer } from './../../../../components/ScrollContainer/ScrollContainer.js'

const CompanyListComponent = ( props ) => {

    let {
        companies,
        setCurrentCompanyId,

    } = props;

    let navigate = useNavigate();

    const click = ( company_id ) => {
        
        setCurrentCompanyId( company_id );
        navigate( `/admin/company/${company_id}` );


    };

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {

            let {
                company_id,
                company_name,
                company_alias,
                company_type,
                company_program_system,
                company_legal_name,
                company_city,
                company_personal,

            } = item;


            return (
                <div 
                    className = 'A_companyList_item'
                    key = { index }
                    onClick = { () => { click( company_id ) } }
                >
                    <div className = 'A_CL_I_type'>
                        <span>{ company_type }</span>

                    </div>

                    <div className = 'A_CL_I_name'>
                        <span>{ company_name }</span>
                    </div>

                    <div className = 'A_CL_I_alias'>
                        <span>{ company_alias }</span>
                    </div>

                    <div className = 'A_CL_I_city'>
                        <span>{ company_city === ''? '': `г. ${company_city}` }</span>
                    </div>

                    
                    <div className = 'A_CL_I_program'>
                        <span>{ company_program_system }</span>
                    </div>

                    

                </div>
            );

        } );

        return div;

    };




    return (
        <ScrollContainer>
            <div className = 'A_companyList'>
                { create( companies ) }
            </div>
        </ScrollContainer>

        

    )

};


export function CompanyList( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <CompanyListComponent
            { ...props }

            companies = { admin.companies }
            setCurrentCompanyId = { ( val ) => { dispatch( setCurrentCompanyId( val ) ) } }

        />
    );


}
