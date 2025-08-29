
import React, { useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice } from './../../../../../../../../../../redux/adminSlice.js';

import './OneUserItem.scss';

import { ItemUserName } from './../ItemUserName/ItemUserName.js';
import { ItemUserId } from './../ItemUserId/ItemUserId.js';
import { ItemUserEmail } from './../ItemUserEmail/ItemUserEmail.js';
import { ItemUserPassword } from './../ItemUserPassword/ItemUserPassword.js';
import { ItemUserRemove } from './../ItemUserRemove/ItemUserRemove.js';
import { ItemAccessRights } from './../ItemAccessRights/ItemAccessRights.js';


const OneUserItemComponent = ( props ) => {

    let {
        id,
        accessRights,
        // company,
        email,
        // isAuth,
        name,
        position,
    } = props;






    return (
        <div className = 'ACE_OneUserItem'>
            <ItemUserId
                userId =    { id }
            />
            <ItemUserName
                userId =    { id }
                name =      { name }
            />

            <ItemUserEmail
                userId =    { id }
                email =     { email }
            />

            <ItemUserPassword
                userId =    { id }
            />

            <ItemAccessRights
                userId =    { id }
                name =      { name }
                email =     { email }
            />

            <ItemUserRemove
                userId =    { id }
            />

        </div>



    )

};


export function OneUserItem( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <OneUserItemComponent
            { ...props }

            companies = { admin.companies }
            setCurrentCompanyId = { ( val ) => { dispatch( setCurrentCompanyId( val ) ) } }

        />
    );


}
