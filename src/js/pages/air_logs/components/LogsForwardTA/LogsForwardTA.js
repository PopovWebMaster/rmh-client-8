
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './LogsForwardTA.scss';

import { TopHeaderPanel } from './components/TopHeaderPanel/TopHeaderPanel.js';
import { ListWindows } from './components/ListWindows/ListWindows.js';
 
const LogsForwardTAComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <div className = 'logsForwardTA'>
            
            <TopHeaderPanel />

            <ListWindows />

        </div>
    )

};

export function LogsForwardTA( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LogsForwardTAComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
