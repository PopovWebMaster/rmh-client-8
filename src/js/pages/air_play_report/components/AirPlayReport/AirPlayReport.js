
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirPlayReport.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const AirPlayReportComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airPlayReport'>

            AirPlayReport

        </PageContainer>
    )

};


export function AirPlayReport( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirPlayReportComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
