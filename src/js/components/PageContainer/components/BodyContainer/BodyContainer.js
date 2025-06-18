
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './BodyContainer.scss';


const BodyContainerComponent = ( props ) => {

    let {
        children
    } = props;
    

    return (
        <div className = 'bodyContainer'>
            { children }
        </div>
    )

};

export function BodyContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <BodyContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
