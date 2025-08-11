
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
// import { S_CenterRight } from './../S_CenterRight/S_CenterRight.js';
import { ScheduleRight } from './../ScheduleRight/ScheduleRight.js';
import { ScheduleTopPanel } from './../ScheduleTopPanel/ScheduleTopPanel.js';

import { SetStartingDateNowData } from './../SetStartingDateNowData/SetStartingDateNowData.js';
import { SetDayDataFromServer } from './../SetDayDataFromServer/SetDayDataFromServer.js';

import { S_EventsList } from './../S_EventsList/S_EventsList.js';
import { S_ReleaseList } from './../S_ReleaseList/S_ReleaseList.js';

import { CreateScheduleButton } from './../CreateScheduleButton/CreateScheduleButton.js';
import { DownloadExcelButton } from './../DownloadExcelButton/DownloadExcelButton.js';


const AirScheduleComponent = ( props ) => {

    let {

    } = props;

    return (
        <PageContainer className = 'airSchedule'>

            <SetStartingDateNowData>

                <ScheduleTopPanel>

                    <ScheduleCalendar />
                    <CreateScheduleButton />

                    <div className = 'ScheduleTopPanel_right'>
                        <DownloadExcelButton />
                    </div>

                </ScheduleTopPanel>
                
                <ScheduleBody>

                    <SetDayDataFromServer>
                        <ScheduleStatistics />

                        <ScheduleCenter>

                            <S_CenterTopButtons></S_CenterTopButtons>

                            <S_CenterBody>

                                <S_EventsList />
                                <S_ReleaseList />

                            </S_CenterBody>

                        </ScheduleCenter>

                        <ScheduleRight>
                            <div>exp</div>
                        </ScheduleRight>

                    </SetDayDataFromServer>

                </ScheduleBody>
            </SetStartingDateNowData>

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
