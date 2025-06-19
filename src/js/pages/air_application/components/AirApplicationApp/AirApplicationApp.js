
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirApplicationApp.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const AirApplicationAppComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airApplicationApp'>

            AirApplicationApp

        </PageContainer>
    )

};


export function AirApplicationApp( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirApplicationAppComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
