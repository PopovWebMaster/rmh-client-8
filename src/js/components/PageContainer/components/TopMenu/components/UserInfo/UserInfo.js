
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as userInfoSlice } from './../../../../../../redux/userInfoSlice.js';

import './UserInfo.scss';



const UserInfoComponent = ( props ) => {

    let {   
        isAuth,
        user_name,
        user_position,

    } = props;
    
    return (
        <>{ isAuth? (

            <div className = 'userInfo'>
                <span className = 'userInfo_name'>{ user_name }</span>
                <span className = 'userInfo_status'>{ user_position }</span>
            </div>
        ): '' }</>
        
    )

};

export function UserInfo( props ){

    const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <UserInfoComponent
            { ...props }
            isAuth = { userInfo.isAuth }
            user_name = { userInfo.user_name }
            user_position = { userInfo.user_position }

            // currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
