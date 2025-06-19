
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirLayoutApp.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const AirLayoutAppComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airLayoutApp'>

            AirLayoutApp

        </PageContainer>
    )

};


export function AirLayoutApp( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirLayoutAppComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
