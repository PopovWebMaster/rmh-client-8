
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AdminCompanyEditor.scss';

import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { CompanyEditor } from './components/CompanyEditor/CompanyEditor.js';
import { SaveChangesButton } from './components/SaveChangesButton/SaveChangesButton.js';




const AdminCompanyEditorComponent = ( props ) => {

    let {

    } = props;

    return (

        <AdminPageContainer
            className =             'adminCompanyEditor'
            topPanelComponents =    { <SaveChangesButton /> }
            bodyComponent =         { <CompanyEditor /> }
        />


    )

};


export function AdminCompanyEditor( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminCompanyEditorComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
