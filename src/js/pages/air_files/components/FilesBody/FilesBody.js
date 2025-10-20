
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilesBody.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

const FilesBodyComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'filesBody'>
            { children }
        </div>
    )

};


export function FilesBody( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilesBodyComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
