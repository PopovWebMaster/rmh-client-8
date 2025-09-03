
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';
import { selectorData as commonSlice } from './../../../../../../redux/commonSlice.js';

import { selectorData as userInfoSlice } from './../../../../../../redux/userInfoSlice.js';


import './SiteLogo.scss';
import { ROUTE } from './../../../../../../config/routes.js';

const SiteLogoComponent = ( props ) => {

    let {
        currentCompanyName,
        currentCompanyType,
        currentPage,

        user_company,
        user_companyNamesByAlias,

    } = props;
    
    let [ isOpen, setIsOpen ] = useState( false );



    const createlist = ( arr ) => {
        let a = arr.map( ( alias, index ) => {

            let href = window.location.href;
            let arr = href.split( '/' );
            // console.dir( 'arr' );
            // console.dir( arr );

            let lastRoute = '';
            if( arr[ 5 ] ){
                lastRoute = `/${arr[ 5 ]}`;
            };

            return (
                <a 
                    href = { `${HOST_TO_API_SERVER}/${ROUTE.PAGE.COMPANY}/${ alias }${lastRoute}` }
                    key = { index }
                >{ user_companyNamesByAlias[ alias ] }</a>
            )

        } );

        return a;

    }

    const clickOpen = () => {
        if( user_company.length > 1 ){
            setIsOpen( !isOpen );
        };
    }

    return (
        <div
            className = { user_company.length > 1? 'siteLogo isMulti': 'siteLogo' }
            onClick = { clickOpen }
        >
            { currentPage === ROUTE.PAGE.ADMIN? (
                <a href = { `${HOST_TO_API_SERVER}/${ROUTE.PAGE.ADMIN}` }>Админ панель</a>
            ): (<>
                { user_company.length > 1? (<span className = { `logoCompanyArrow ${ isOpen? 'icon-angle-up' : 'icon-angle-down'}` }></span>): '' }
                
                <span>{ currentCompanyName }</span>
                <span className = 'logoCompanyType'>{ currentCompanyType }</span>

                { isOpen? (
                    <div className = 'siteLogo_DDList'>
                        { createlist( user_company ) }
                    </div>
                ): '' }
                
            </>) }

        </div>
    )

};

export function SiteLogo( props ){

    const company = useSelector( companySlice );
    const common = useSelector( commonSlice );
    const userInfo = useSelector( userInfoSlice );


    


    
    // const dispatch = useDispatch();

    return (
        <SiteLogoComponent
            { ...props }
            currentCompanyName = { company.currentCompanyName }
            currentCompanyType = { company.currentCompanyType }
            currentPage = { common.currentPage }

            user_company = { userInfo.user_company }
            user_companyNamesByAlias = { userInfo.user_companyNamesByAlias }


            



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
