
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as userInfoSlice } from './../../../../../../redux/userInfoSlice.js';
// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './BtnAuth.scss';

import { ROUTE } from './../../../../../../config/routes.js';


const BtnAuthComponent = ( props ) => {

    let {
        isAuth,
    } = props;

    const clickLogout = ( e ) => {
        e.preventDefault();

        if( IS_DEVELOPMENT ){
            alert( 'logout' );
        }else{

            let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');;
            let url = `${HOST_TO_API_SERVER}/logout`;
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            };
            const send = async () => {
                try {
                    const response = await fetch( url, {
                        method: 'post',  
                        headers,
                        credentials: "same-origin",
                        dataType: "json",
                        body: JSON.stringify({}) 
                    });

                    console.dir( response );
                    window.location.href = HOST_TO_API_SERVER;

                } catch (error) {
                    console.error( `Ошибка : ${error}. При попытке вызвать fetch` );
                    console.error({
                        token,
                        url,
                    });
                };
            };
            send();
        };
    }
    
    return (
        <>
            {
                isAuth? (
                    <a 
                        className = 'btnLogout'
                        href = { `${HOST_TO_API_SERVER}/logout` }
                        onClick = { clickLogout }
                    >
                        <span className = 'TMIR_icon'></span>
                        <span className = 'TMIR_title'>Выйти</span>
                    </a>
                ): (
                    <a 
                        href = {`${HOST_TO_API_SERVER}/login`}
                        className = 'TM_btn_login'
                    >
                        <span>Войти</span>
                    </a>
                )
            }
        </>

    )

};

export function BtnAuth( props ){

    const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <BtnAuthComponent
            { ...props }
            isAuth = { userInfo.isAuth }

            // currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
