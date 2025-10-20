
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as commonSlice } from './../../../../redux/commonSlice.js';
import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './TopMenu.scss';

import { ROUTE }                from './../../../../config/routes.js';
import { BtnAuth }              from './components/BtnAuth/BtnAuth.js';
import { UserInfo }             from './components/UserInfo/UserInfo.js';
import { MenuForAirPage }       from './components/MenuForAirPage/MenuForAirPage.js';
import { MenuForCompanyPage }   from './components/MenuForCompanyPage/MenuForCompanyPage.js';
import { MenuForAdmin }         from './components/MenuForAdmin/MenuForAdmin.js';

const TopMenuComponent = ( props ) => {

    let {
        currentPage,
        isAuth,

    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        let result = true;

        switch( currentPage ){
            
            case ROUTE.PAGE.LOGIN:
                result = false;
                break;

            case ROUTE.PAGE.PAGE_NOT_FOUND:
                result = false;
                break;

            case ROUTE.PAGE.ACCESS_IS_CLOSED:
                result = false;
                break;


                

                // admin

        };

        setIsShow( result );


    }, [ currentPage ] );

    const getMenuLeft = ( current_page ) => {

        let result = '';

        switch( current_page ){

            case ROUTE.PAGE.COMPANY:
                result = <MenuForCompanyPage />
                break;

            case ROUTE.PAGE.AIR_MAIN:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.AIR_SCHEDULE:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.AIR_APPLICATION:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.AIR_LAYOUT:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.AIR_PLAY_REPORT:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.AIR_LOGS:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.AIR_FILES:
                result = <MenuForAirPage />
                break;

            case ROUTE.PAGE.ADMIN:
                result = <MenuForAdmin />
                break;


            
            

        };

        return result;

    };

    return (

        <>{ isShow? (
            <div className = { isAuth? 'topMenu': 'topMenu topMenuHidden' }>
                <div className = 'TM_left'>
                    { isAuth? <>

                    { getMenuLeft( currentPage ) }
                    
                    </>: '' }

                </div>

                <div className = 'TM_right'>
                    <UserInfo />
                    <BtnAuth />
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
            isAuth = { userInfo.isAuth }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
