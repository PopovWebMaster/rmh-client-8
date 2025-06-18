
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './SiteBackground.scss';


const SiteBackgroundComponent = ( props ) => {

    let {
        children
    } = props;
    

    const get_puth = () => {
        if( IS_DEVELOPMENT ){
            return 'url( /assets/img/fonwall_ru-sundown-sea-backdrop.jpeg )';
        }else{
            return 'url( /public/assets/img/fonwall_ru-sundown-sea-backdrop.jpeg )';
        };
    };
    return (
        <div
            className = 'siteBackground'
            style = {{
                backgroundImage: get_puth(),
            }}
        >
            { children }
        </div>
    )

};

export function SiteBackground( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <SiteBackgroundComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
