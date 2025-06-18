
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as navigationSlice } from './../../redux/navigationSlice.js';

import { selectorData as commonSlice } from './../../../../redux/commonSlice.js';
import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';


import './TopMenu.scss';

import { ROUTE } from './../../../../config/routes.js';

import { MenuItemLeft } from './components/MenuItemLeft/MenuItemLeft.js';
import { SiteLogo } from './components/SiteLogo/SiteLogo.js';
import { BtnLogout } from './components/BtnLogout/BtnLogout.js';
import { UserInfo } from './components/UserInfo/UserInfo.js';

const TopMenuComponent = ( props ) => {

    let {
        currentPage,
        user_position,
        isAuth,

        userInfo,
    } = props;

    console.dir( 'userInfo' );
    console.dir( userInfo );


    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        let result = true;

        switch( currentPage ){
            case ROUTE.PAGE.LOGIN:
                result = false;
                break;

            // case ROUTE.PAGE.HOME:
            //     result = false;
            //     break;
            
            case ROUTE.PAGE.PAGE_NOT_FOUND:
                result = false;
                break;

            case ROUTE.PAGE.ACCESS_IS_CLOSED:
                result = false;
                break;


                

        };

        setIsShow( result );


    }, [ currentPage ] );


    return (

        <>{ isShow? (
            <div className = 'topMenu'>
                <div className = 'TM_left'>
                    { isAuth? <>
                        {/* { user_position === 'admin'? ( */}
                            <a 
                                className = 'TM_home_link'
                                href = {`${HOST_TO_API_SERVER}`}
                            >Home</a>
                        {/* ): ''  } */}

                        <SiteLogo />

                        <MenuItemLeft 
                            title = { 'Главная' }
                            page = { ROUTE.PAGE.MAIN }
                        />

                        <MenuItemLeft 
                            title = { 'Расписание' }
                            page = { ROUTE.PAGE.SCHEDULE }
                        />
                        <MenuItemLeft 
                            title = { 'Заявки' }
                            page = { ROUTE.PAGE.APPLICATIONS }
                        />

                        <MenuItemLeft 
                            title = { 'Макет' }
                            page = { ROUTE.PAGE.LAYOUT }
                        />

                        <MenuItemLeft 
                            title = { 'Эф. отчёт' }
                            page = { ROUTE.PAGE.PLAY_REPORT }
                        />

                        <MenuItemLeft 
                            title = { 'Logs' }
                            page = { ROUTE.PAGE.LOGS }
                        />
                    
                    </>: '' }

                    

                </div>

                <div className = 'TM_right'>
                    <UserInfo />

                    { isAuth? <BtnLogout />:(
                        <a 
                            href = {`${HOST_TO_API_SERVER}/login`}
                            className = 'TM_btn_login'
                        ><span>Войти</span>
                            
                        </a>) 
                    }
                    
                </div>
                
            </div>

        ): '' }</>

    )

};

export function TopMenu( props ){

    const common = useSelector( commonSlice );
    const userInfo = useSelector( userInfoSlice );



    
    // const dispatch = useDispatch();

    return (
        <TopMenuComponent
            { ...props }
            currentPage = { common.currentPage }

            user_position = { userInfo.user_position }
            isAuth = { userInfo.isAuth }
            userInfo = { userInfo }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
