// CompanyEditor


import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice, setCurrentCompanyId } from './../../../../../../redux/adminSlice.js';
import { useNavigate } from "react-router-dom";

import './CompanyEditor.scss';

import { ScrollContainer } from './../../../../../../components/ScrollContainer/ScrollContainer.js';
import { SetCurrentCompanyFromServer } from './components/SetCurrentCompanyFromServer/SetCurrentCompanyFromServer.js';

import { ACE_Name } from './components/ACE_Name/ACE_Name.js';
import { ACE_LegalName } from './components/ACE_LegalName/ACE_LegalName.js';
import { ACE_Alias } from './components/ACE_Alias/ACE_Alias.js';
import { ACE_City } from './components/ACE_City/ACE_City.js';
import { ACE_ProgramSystem } from './components/ACE_ProgramSystem/ACE_ProgramSystem.js';
import { ACE_Type } from './components/ACE_Type/ACE_Type.js';
import { ACE_BackCross } from './components/ACE_BackCross/ACE_BackCross.js';

import { AddUserButton } from './components/AddUserButton/AddUserButton.js';
import { UserList } from './components/UserList/UserList.js';
import { RemoveCompany } from './components/RemoveCompany/RemoveCompany.js';

const CompanyEditorComponent = ( props ) => {

    let {
        companies,
        setCurrentCompanyId,

    } = props;




    return (
        <ScrollContainer>
            <SetCurrentCompanyFromServer>

                <div className = 'A_CompanyEditor'>
                    <div className = 'A_CompanyEditor_wrap'>
                        <ACE_BackCross />

                        <ACE_Name />
                        <ACE_LegalName />
                        <ACE_Type />
                        <ACE_Alias />
                        <ACE_City />
                        <ACE_ProgramSystem />

                        <div className = 'A_CompanyEditor_button_panel'>
                            <div className = 'A_left'>
                                <AddUserButton />
                            </div>
        
                            <div className = 'A_right'>
                                <RemoveCompany />
                            </div>
                        </div>

                        <div className = 'A_CompanyEditor_personal_wrap'>

                            <UserList />
                                           
        
                        </div>


                    </div>
                </div>

            </SetCurrentCompanyFromServer>
        </ScrollContainer>

        

    )

};


export function CompanyEditor( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <CompanyEditorComponent
            { ...props }

            companies = { admin.companies }
            setCurrentCompanyId = { ( val ) => { dispatch( setCurrentCompanyId( val ) ) } }

        />
    );


}
