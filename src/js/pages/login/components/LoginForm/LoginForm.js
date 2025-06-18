
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LoginForm.scss';

import { selectorData as commonSlice } from "../../../../redux/commonSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const LoginFormComponent = ( props ) => {

    let {
        token,
    } = props;

    // let [ tokenVal, setToken ] = useState('');



    return (
        <PageContainer className = 'loginForm'>

            <form
                method = 'POST'
                action = { `${HOST_TO_API_SERVER}/login` }
            >

                <input 
                    type = 'hidden'
                    name = '_token'
                    value = { token }
                />

                <div className = 'loginPage_item'>
                    <label for = 'email'>Email</label>
                    <input 
                        id = 'email'
                        type = 'email'
                        name = 'email'
                        required = 'required'
                    />
                </div>

                <div className = 'loginPage_item'>
                    <label for = 'password'>Пароль</label>
                    <input 
                        id = 'password'
                        type = 'password'
                        name = 'password'
                        required = 'required'
                        autoComplete = "current-password"
                    />
                </div>

                <div className = 'loginPage_item'>
                    <label
                        for = 'remember_me'
                    >
                        <input
                            id = 'remember_me'
                            type = 'checkbox'
                            name="remember"
                        />
                        <span>Запомнить пароль</span>
                    </label>
                </div>

                <div className = 'loginPage_item btn'>
                    <button
                        type = 'submit'
                    ><span>Отправить</span></button>
                </div>


            </form>

        </PageContainer>
    )

};


export function LoginForm( props ){

    const common = useSelector( commonSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LoginFormComponent
            { ...props }
            token = { common.token }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
