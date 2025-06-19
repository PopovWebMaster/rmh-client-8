
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirMainApp.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const AirMainAppComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airMainApp'>

            airMainApp

        </PageContainer>
    )

};


export function AirMainApp( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirMainAppComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
