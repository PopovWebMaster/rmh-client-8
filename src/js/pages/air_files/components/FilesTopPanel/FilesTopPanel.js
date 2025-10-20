
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilesTopPanel.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const FilesTopPanelComponent = ( props ) => {

    let {
        children
    } = props;

    return (
        <div className = 'filesTopPanel'>
            { children }
        </div>
    )

};


export function FilesTopPanel( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilesTopPanelComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
