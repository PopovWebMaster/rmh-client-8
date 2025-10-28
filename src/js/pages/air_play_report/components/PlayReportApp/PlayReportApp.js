
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './PlayReportApp.scss';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
import { SearchPanel } from './components/SearchPanel/SearchPanel.js';
import { SetCalendarData } from './components/SetCalendarData/SetCalendarData.js';

import { ListControlPanel } from './components/ListControlPanel/ListControlPanel.js';
import { PlayReportList } from './components/PlayReportList/PlayReportList.js';
import { ListButtonsLeft } from './components/ListButtonsLeft/ListButtonsLeft.js';
import { PlayReportListContainer } from './components/PlayReportListContainer/PlayReportListContainer.js';
import { GrabScrollingEvent } from './components/GrabScrollingEvent/GrabScrollingEvent.js';

import { DetailDataWindow } from './components/DetailDataWindow/DetailDataWindow.js';

import { AnalyticsWindow } from './components/AnalyticsWindow/AnalyticsWindow.js';
 

const PlayReportAppComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer className = 'playReportApp' >
            <SetCalendarData>

                <SearchPanel />
                
                <ListControlPanel />

                <PlayReportListContainer>

                    <GrabScrollingEvent />
                    <ListButtonsLeft />
                    <PlayReportList />
                
                </PlayReportListContainer>

                <DetailDataWindow />

                <AnalyticsWindow />

            </SetCalendarData>
        </PageContainer>
    

    )

};

export function PlayReportApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <PlayReportAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
