
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './S_CenterBody.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const S_CenterBodyComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'S_CenterBody'>

            { children }
            
        </div>
    )

};


export function S_CenterBody( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <S_CenterBodyComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
