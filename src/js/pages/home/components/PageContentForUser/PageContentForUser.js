// PageContentForUser
import React from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './PageContentForUser.scss';


const PageContentForUserComponent = ( props ) => {

    let {
        currentCompanyName
    } = props;


    return (
        <div className = 'pageContentForUser'>

            <div className = 'maxLogo'>
                <h1><span>{ currentCompanyName }</span></h1>
            </div>

        </div>
    )

};


export function PageContentForUser( props ){

    const company = useSelector( companySlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <PageContentForUserComponent
            { ...props }
            // userInfo = { userInfo }
            currentCompanyName = { company.currentCompanyName }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
