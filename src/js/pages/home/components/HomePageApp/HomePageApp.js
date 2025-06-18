
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './HomePageApp.scss';

import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";
// import { selectorData as companySlice } from "../../../../redux/companySlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { PageContentForAll } from './../PageContentForAll/PageContentForAll.js';
import { PageContentForAdmin } from './../PageContentForAdmin/PageContentForAdmin.js';
import { PageContentForUser } from './../PageContentForUser/PageContentForUser.js';

const HomePageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;

    const create = ( is_auth, status ) => {
        if( is_auth ){
            if( status === 'admin' ){
                return <PageContentForAdmin />
            }else{
                return <PageContentForUser />
            };

        }else{
            return <PageContentForAll />
        };

    }

    return (
        <PageContainer className = 'homePageApp'>

            { create( isAuth, user_position ) }

        </PageContainer>
    )

};


export function HomePageApp( props ){

    const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <HomePageAppComponent
            { ...props }
            isAuth = { userInfo.isAuth }
            user_position = { userInfo.user_position }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
