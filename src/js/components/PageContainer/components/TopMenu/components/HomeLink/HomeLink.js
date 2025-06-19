// HomeLink


import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as userInfoSlice } from './../../../../../../redux/userInfoSlice.js';
// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './HomeLink.scss';

// import { ROUTE } from './../../../../../../config/routes.js';


const HomeLinkComponent = ( props ) => {

    let {
    } = props;

    return (
        <a className = 'TM_home_link' href = {`${HOST_TO_API_SERVER}`}>Home</a>
    )

};

export function HomeLink( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <HomeLinkComponent
            { ...props }
            // isAuth = { userInfo.isAuth }

            // currentCompanyAlias = { company.currentCompanyAlias }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
