
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageContentForAll.scss';


const PageContentForAllComponent = ( props ) => {

    let {

    } = props;


    return (
        <div className = 'pageContentForAll'>

            <div className = 'maxLogo'>
                <h1><span>Р М Х</span></h1>
                <h4>Донецк (ДНР)</h4>
            </div>

        </div>
    )

};


export function PageContentForAll( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <PageContentForAllComponent
            { ...props }
            // userInfo = { userInfo }
            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
