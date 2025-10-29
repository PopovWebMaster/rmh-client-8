// AC_OneEventTreeRow


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../redux/playReportAnalyticsSlise.js';
import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';


import './AC_OneEventTreeRow.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { TdCategory } from './TdCategory/TdCategory.js';
import { TdEvent } from './TdEvent/TdEvent.js';
import { TdFileName } from './TdFileName/TdFileName.js';
import { TdIsPremiere } from './TdIsPremiere/TdIsPremiere.js';
import { TdCount } from './TdCount/TdCount.js';
import { TdDurationSec } from './TdDurationSec/TdDurationSec.js';

import { TdDurationAllSec } from './TdDurationAllSec/TdDurationAllSec.js';
import { TdDurationAllTime } from './TdDurationAllTime/TdDurationAllTime.js';
import { TdDurationAllDayProcent } from './TdDurationAllDayProcent/TdDurationAllDayProcent.js';

import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';



const AC_OneEventTreeRowComponent = ( props ) => {

    let {

        list,

        eventListById,
        categoryListById,

    } = props;


    const create = ( arr ) => {

        let usedEvents = {};

        let day_sec = 24*60*60;

        let tr = arr.map( ( item, index ) => {
            let {
                category_id,
                event_id,
                fileName,
                count,
                duration,
                isPremiere,
                isUsed,
                startTime,
                eventCount,
            } = item;

            let isFirstEvent = true;
            if( usedEvents[ event_id ] ){
                isFirstEvent = false;
            };
            usedEvents[ event_id ] = true;

            let durationAllSec = count * duration;

            let procent = round_to_number( (durationAllSec * 100) /day_sec, 5 );

            

            return (
                <tr key = { index } >
                    <TdCategory
                        index =         { index }
                        list_length =   { arr.length - 1 }
                        category_id =   { category_id }
                    />

                    <TdEvent
                        category_id =   { category_id }
                        event_id =      { event_id }
                        eventCount =    { eventCount }
                        isFirstEvent =  { isFirstEvent }
                    />
                    <TdFileName
                        category_id =   { category_id }
                        event_id =      { event_id }
                        fileName =      { fileName }
                    />
                    <TdIsPremiere
                        category_id =   { category_id }
                        event_id =      { event_id }
                        fileName =      { fileName }
                        isPremiere =    { isPremiere }
                    />
                    <TdCount
                        category_id =   { category_id }
                        event_id =      { event_id }
                        fileName =      { fileName }
                        count =         { count }
                    />

                    <TdDurationSec
                        duration = { duration }
                    />
                    <TdDurationAllSec
                        durationAllSec = { durationAllSec }
                    />

                    <TdDurationAllTime
                        durationAllSec = { durationAllSec }
                    />

                    <TdDurationAllDayProcent
                        procent = { procent }
                    />


                </tr>
            )

        } );

        return tr;

    }



            {/* <tr>
                <td rowSpan={5}>Погода</td>
                <td>Погода no rek</td>
                <td>PRK_POGODA_DONECK_NO_REK_20251028.mp4</td>
                <td>премьера</td>
                <td>60</td>
                <td>15</td>
                <td>900</td>
                <td>0.005%</td>
                <td>00:12:23</td>
            </tr>

            <tr>
                <td></td>
                <td>PRK_POGODA_DONECK_NO_REK_20251028!!!!!.mp4</td>
                <td></td>
                <td>60</td>

                <td>15</td>
                <td>900</td>
                <td>0.005%</td>
                <td>00:12:23</td>
            </tr> */}
    
    return (
        <>
            { create( list ) }
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </>

    )

};

export function AC_OneEventTreeRow( props ){

    const playReportAnalytics = useSelector( playReportAnalyticsSlise );
    const layout = useSelector( layoutSlice );


    
    const dispatch = useDispatch();

    return (
        <AC_OneEventTreeRowComponent
            { ...props }
            analitycsIsActive = { playReportAnalytics.analitycsIsActive }
            evenstTree = { playReportAnalytics.evenstTree }


            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
