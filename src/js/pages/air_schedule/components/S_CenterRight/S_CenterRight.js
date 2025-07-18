
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './S_CenterRight.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const S_CenterRightComponent = ( props ) => {

    let {
        children
    } = props;

    return (<>
        

        <div className = 'S_CenterRight'>
            <div className = 'S_CenterRightBlackHole'>dsf</div>
            <div className = 'S_CenterRightBody'>
                 { children }
            </div>
        </div>
        
    </>)

};


export function S_CenterRight( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <S_CenterRightComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
