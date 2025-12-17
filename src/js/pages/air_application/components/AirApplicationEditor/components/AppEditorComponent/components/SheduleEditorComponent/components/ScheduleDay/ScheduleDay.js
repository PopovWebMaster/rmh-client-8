
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ScheduleDay.scss';

// import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as scheduleSlise } from './../../../../../../../../../../redux/scheduleSlise.js';

import { ScheduleDayHeader } from './components/ScheduleDayHeader/ScheduleDayHeader.js';
import { ScheduleDayTimePoint } from './components/ScheduleDayTimePoint/ScheduleDayTimePoint.js';
import { ScheduleDayEmptyPoint } from './components/ScheduleDayEmptyPoint/ScheduleDayEmptyPoint.js';

const ScheduleDayComponent = ( props ) => {

    let {
        Schedule,
        YYYY_MM_DD,
        year,
        mounth,
        date,
        dayNum,
        dayName,
        dayNameShort,
        timePoints,
        pointsLength,
        releaseLength,
        dayDuration,


        allTimePointsGroupeList,

    } = props;

    let [ pointsList, setPointsList ] = useState( [] );

    useEffect( () => {
        let list = get_list( timePoints, allTimePointsGroupeList );
        setPointsList( list );
    }, [
        timePoints,
        allTimePointsGroupeList,
    ]);



    const get_list = ( timePoints, allTimePointsGroupeList ) => {
        let result = [];

        // console.dir({
        //     timePoints,
        //     allTimePointsGroupeList
        // });

        for( let i = 0; i < allTimePointsGroupeList.length; i++ ){
            let { sec_list, interval } = allTimePointsGroupeList[ i ];

            // console.dir( allTimePointsGroupeList[ i ] );

            let empty_item = {
                is_empty: true,
            };

            let items = [];

            let empty_count = 0;

            for( let y = 0; y < sec_list.length; y++ ){
                if( timePoints[ sec_list[ y ] ] ){
                    let item = { ...timePoints[ sec_list[ y ] ] };
                    item.is_empty = false;
                    item.className = `day_item_${interval.from}_${interval.to}`;
                    items.push( item );
                }else{
                    // items.push( empty_item );
                    empty_count++;
                };
            };

            // for( let y = 0; y < empty_count + 1; y++ ){
            //     if( y < sec_list.length ){
            //         items.push( empty_item );
            //     };
                
            // };

            // console.dir( 'items' );
            // console.dir( items );





            // if( items.length > 0 ){
                result = [ ...result, ...items ];

            // }else{
            //     result.push( empty_item );
            // };

            

        }



        return result;
    }



    const create = ( list /*obj, all_TimePointsGroupeList*/ ) => {

        // let arr = Object.keys( obj );

        // console.dir({
        //     arr,
        //     allTimePointsGroupeList
        // });

        // let list = get_list( obj, all_TimePointsGroupeList );
        // console.dir({
        //     time_points: obj,
        //     allTimePointsGroupeList,
        //     list
        // });

        
        let div = list.map( ( item, index ) => {

            if( item.is_empty ){
                return <ScheduleDayEmptyPoint key =           { index }/>

            }else{
                let {
                    fill_count,
                    sec,
                    title,
                    time,
                    grid_event_id,
                    is_reserved = null,
                    reserved_name = null,
                    className,

                } = item;

                return (
                    <ScheduleDayTimePoint
                        key =           { index }
                        fill_count =    { fill_count }
                        sec =           { sec }
                        title =         { title }
                        time =          { time }
                        YYYY_MM_DD =    { YYYY_MM_DD }
                        Schedule =      { Schedule }
                        grid_event_id = { grid_event_id }
                        is_reserved =   { is_reserved }
                        reserved_name = { reserved_name }
                        className = { className }


                    />
                ); 
            };

        } );

        // let div = arr.map( ( obj_key, index ) => {
        //     let {
        //         fill_count,
        //         sec,
        //         title,
        //         time,
        //         grid_event_id,
        //         is_reserved = null,
        //         reserved_name = null,

        //     } = obj[ obj_key ];

        //     return (
        //         <ScheduleDayTimePoint
        //             key =           { index }
        //             fill_count =    { fill_count }
        //             sec =           { sec }
        //             title =         { title }
        //             time =          { time }
        //             YYYY_MM_DD =    { YYYY_MM_DD }
        //             Schedule =      { Schedule }
        //             grid_event_id = { grid_event_id }
        //             is_reserved =   { is_reserved }
        //             reserved_name = { reserved_name }


        //         />
        //     );
        // } );

        return div

    }

    return (
        <div className = 'SEC_CharDay'>

            <ScheduleDayHeader 
                Schedule = { Schedule }
                YYYY_MM_DD =    { YYYY_MM_DD }
                year =          { year }
                dayNum =        { dayNum }
                dayName =       { dayName }
                dayNameShort =  { dayNameShort }
                date =          { date }
                mounth =        { mounth }
                pointsLength = { pointsLength }
                releaseLength = { releaseLength }
                dayDuration = { dayDuration }
            />

            { create( pointsList ) }

        </div>
    )

};

export function ScheduleDay( props ){

    const schedule = useSelector( scheduleSlise );
    // const dispatch = useDispatch();

    return (
        <ScheduleDayComponent
            { ...props }

            allTimePointsGroupeList = { schedule.allTimePointsGroupeList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
