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

import { RowCounter } from './RowCounter/RowCounter.js';

import { round_to_number } from './../../../../../../../../helpers/round_to_number.js';
import { TdDurationTime } from './TdDurationTime/TdDurationTime.js';

import { AC_EmptyRow } from './../AC_EmptyRow/AC_EmptyRow.js';



const AC_OneEventTreeRowComponent = ( props ) => {

    let {

        list,

        eventListById,
        categoryListById,

    } = props;

    let [ allCount, setAllCount ] = useState( 0 );
    let [ allDuration, setAllDuration ] = useState( 0 );

    let [ allPremiersCount, setAllPremiersCount ] = useState( 0 );
    let [ allPremiersDuration, setAllPremiersDuration ] = useState( 0 );




    useEffect( () => {

        let all_counts = 0;
        let all_duration_sec = 0;
        let all_premier_counts = 0;
        let all_premier_duration = 0;


        for( let i = 0; i < list.length; i++ ){
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
            } = list[ i ];

            if( isUsed ){
                all_counts = all_counts + count;
                all_duration_sec = all_duration_sec + ( duration * count );

                if( isPremiere ){
                    all_premier_counts = all_premier_counts + 1;
                    all_premier_duration =all_premier_duration + duration;
                };


            };

        };

        setAllCount( all_counts );
        setAllDuration( all_duration_sec );
        setAllPremiersCount( all_premier_counts );
        setAllPremiersDuration( all_premier_duration );

       

    }, [ list ] );





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
                        isUsed =        { isUsed }
                    />
                    <TdIsPremiere
                        category_id =   { category_id }
                        event_id =      { event_id }
                        fileName =      { fileName }
                        isPremiere =    { isPremiere }
                        isUsed =    { isUsed }
                    />
                    <TdCount
                        category_id =   { category_id }
                        event_id =      { event_id }
                        fileName =      { fileName }
                        count =         { count }
                        isUsed =    { isUsed }
                    />

                    <TdDurationSec
                        duration = { duration }
                        isUsed =    { isUsed }
                    />

                    <TdDurationTime
                        duration = { duration }
                        isUsed =    { isUsed }
                    />

                    <TdDurationAllSec
                        durationAllSec = { durationAllSec }
                        isUsed =    { isUsed }
                    />

                    <TdDurationAllTime
                        durationAllSec = { durationAllSec }
                        isUsed =    { isUsed }
                    />

                    <TdDurationAllDayProcent
                        procent =   { procent }
                        isUsed =    { isUsed }
                    />


                </tr>
            )

        } );


        return tr;

    }


    return (
        <>
            { create( list ) }
            <RowCounter
                allCount = { allCount }
                allDuration = { allDuration }
                allPremiersCount = { allPremiersCount }
                allPremiersDuration = { allPremiersDuration }
            />

            <AC_EmptyRow />
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
