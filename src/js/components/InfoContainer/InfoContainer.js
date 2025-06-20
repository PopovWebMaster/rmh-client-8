
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './InfoContainer.scss';

const InfoContainerComponent = ( props ) => {

    let {
        title = false,
        margin = '0 0',
        children,

    } = props;
    
    return (
        <div 
            className = 'infoContainer'
            style = { { margin } }
        >
            <div className = 'infoBlockWrap'>
                { title === false? '': <h1>{ title }</h1>  }
                { children }
            </div>
            
        </div>
    )

};

export function InfoContainer( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <InfoContainerComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
