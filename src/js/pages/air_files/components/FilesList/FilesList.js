// FilesList

// ScheduleCenter


import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilesList.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';


const FilesListComponent = ( props ) => {

    let {
        
    } = props;

    return (
        <div className = 'filesList'>

            
        </div>
    )

};


export function FilesList( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilesListComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
