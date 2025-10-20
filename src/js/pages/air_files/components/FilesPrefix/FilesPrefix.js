
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilesPrefix.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { FPHeader } from './components/FPHeader/FPHeader.js';



const FilesPrefixComponent = ( props ) => {

    let {

    } = props;

    return (
        <div className = 'filesPrefix'>
            <FPHeader />

            
            




            
        </div>
    )

};


export function FilesPrefix( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilesPrefixComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
