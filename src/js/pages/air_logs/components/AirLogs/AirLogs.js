
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirLogs.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const AirLogsComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airLogs'>

            AirLogs

        </PageContainer>
    )

};


export function AirLogs( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirLogsComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
