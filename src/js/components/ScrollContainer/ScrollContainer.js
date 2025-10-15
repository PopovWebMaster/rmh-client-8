
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './ScrollContainer.scss';


const ScrollContainerComponent = ( props ) => {

    let {
        children,
        height = null,
    } = props;
    

    return (
        <div 
            className = 'scrollContainer'
            style = { height === null? {}: { height } }
        >
            { children }
        </div>
    )

};

export function ScrollContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <ScrollContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
