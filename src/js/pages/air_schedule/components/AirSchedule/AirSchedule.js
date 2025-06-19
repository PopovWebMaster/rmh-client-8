
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirSchedule.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const AirScheduleComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airSchedule'>

            AirSchedule

        </PageContainer>
    )

};


export function AirSchedule( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AirScheduleComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
