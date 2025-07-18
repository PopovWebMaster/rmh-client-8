
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AirSchedule.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
import { ScheduleCalendar } from './../ScheduleCalendar/ScheduleCalendar.js';
import { ScheduleBody } from './../ScheduleBody/ScheduleBody.js';
import { ScheduleStatistics } from './../ScheduleStatistics/ScheduleStatistics.js';
import { ScheduleCenter } from './../ScheduleCenter/ScheduleCenter.js';
import { S_CenterTopButtons } from './../S_CenterTopButtons/S_CenterTopButtons.js';
import { S_CenterBody } from './../S_CenterBody/S_CenterBody.js';
import { S_CenterRight } from './../S_CenterRight/S_CenterRight.js';
import { ScheduleRight } from './../ScheduleRight/ScheduleRight.js';


const AirScheduleComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airSchedule'>

            <ScheduleCalendar />

            <ScheduleBody>

                <ScheduleStatistics />

                <ScheduleCenter>
                    <S_CenterTopButtons>
                        <div>btn</div>
                        <div>btn 2</div>
                        <div>btn 3</div>
                    </S_CenterTopButtons>

                    <S_CenterBody>
                        <div>list</div>

                    </S_CenterBody>

                    

                </ScheduleCenter>

                <ScheduleRight>
                    <div>exp</div>

                </ScheduleRight>
                
            </ScheduleBody>
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
