
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemAccessRights.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemEditContainer } from './../ItemEditContainer/ItemEditContainer.js';

import { AlertWindowContainerSaveAdd } from './../../../../../../../../../../components/AlertWindowContainerSaveAdd/AlertWindowContainerSaveAdd.js';

import { get_user_access_rights } from './../../vendors/get_user_access_rights.js';

import { UserCompanyEdit } from './components/UserCompanyEdit/UserCompanyEdit.js';
import { AccessRightEdit } from './components/AccessRightEdit/AccessRightEdit.js';


const ItemAccessRightsComponent = ( props ) => {

    let {
        userId,
        name,
        email,
    } = props;

    let [ dataReceived, setDataReceived ] = useState( false );
    let [ allList, setAllList ] = useState( [] );
    let [ userList, setUserList ] = useState( [] );
    let [ userCompanyList, setUserCompanyList ] = useState( [] );



    const getData = () => {
        get_user_access_rights( userId, ( response ) => {
            console.dir( 'response' );
            console.dir( response );

            if( response.ok ){

                let {
                    allAccsessRights,
                    userAccsessRights,
                    companyAliasList
                } = response;

                setDataReceived( true );
                setAllList( allAccsessRights );
                setUserList( userAccsessRights );
                setUserCompanyList( companyAliasList );

            };
            
        } );
    }

    let removeData = () => {
        setDataReceived( false );
        setAllList( [] );
        setUserList( [] );
        setUserCompanyList( [] );
    }



    const save_click = () => {

    }

    return (
        <div className = 'ACE_ItemUserAccessRights '>

            <input 
                type = 'text'
                value = { 'access rights' }
                onChange = { () => {} }
            />

            <ItemEditContainer
                openHandler = { getData }
                closeHandler = { removeData }
            >

                <div className = 'ACE_ItemUserAccessRights_edit'>
                    <h3>
                        { `Права доступа для пользователя ` }
                        <span className = 'ar_name'>{name}</span>
                        <span className = 'ar_email'>{email}</span>
                    </h3>

                    { dataReceived === false? (
                        <div className = 'ACE_ItemUserAccessRights_noData'>
                            <span>Получение данных</span>
                            <span className = 'animate-spin icon-spin5 icon'></span>
                        </div>
                    ): (<>

                        <UserCompanyEdit
                            userCompanyList =       { userCompanyList }
                            setUserCompanyList =    { setUserCompanyList }
                        />

                        <AccessRightEdit
                            allList = { allList }
                            userList = { userList }
                            setUserList = { setUserList }

                        />



                        <AlertWindowContainerSaveAdd 
                            isActive =      { true }
                            clickHandler =  { save_click }
                        />

                    </>) } 



                </div>



            </ItemEditContainer>

        </div>
    )

};

export function ItemAccessRights( props ){

    // const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <ItemAccessRightsComponent
            { ...props }
            // currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
