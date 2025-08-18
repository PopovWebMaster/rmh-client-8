
import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as adminSlice } from './../../../../../../../../redux/adminSlice.js';
import './UserList.scss';
import { OneUserItem } from './components/OneUserItem/OneUserItem.js';

const UserListComponent = ( props ) => {

    let {
        currentCompanyPersonal
    } = props;


    const create = ( arr  ) => {

        let div = arr.map( ( item, index ) => {

            /*
                Комменты не удалять !!!!!!
                Это может пригодиться.
            */

            let {
                id,
                accessRights,
                // company,
                email,
                // isAuth,
                name,
                position,
            } = item

            return (
                <React.Fragment
                    key = { index }
                >
                    <OneUserItem
                        id =            { id }
                        accessRights =  { accessRights }
                        // company =       { company }
                        email =         { email }
                        // isAuth =        { isAuth }
                        name =          { name }
                        position =      { position }
                    />
                </React.Fragment>
            )

        } );

        return div;

    }

    return (
        <div className = 'ACE_UserList'>
            { create( currentCompanyPersonal ) }
        </div>
    )

};

export function UserList( props ){

    const admin = useSelector( adminSlice );
    const dispatch = useDispatch();

    return (
        <UserListComponent
            { ...props }

            currentCompanyPersonal =  { admin.currentCompanyPersonal }


            // setCurrentCompanyId = { ( val ) => { dispatch( setCurrentCompanyId( val ) ) } }

        />
    );


}
