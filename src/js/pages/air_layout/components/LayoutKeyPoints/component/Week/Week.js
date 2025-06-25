
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Week.scss';

import { selectorData as layoutSlice, setWeekKeyPointList } from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';
import { DEFAULT_CATEGORY } from './../../../../../../config/layout.js';

import { Day } from './../Day/Day.js';

const WeekComponent = ( props ) => {

    let {
        keyPointsCurrentEventId,
        gridDayEventsList,
        eventListById,
        categoryListById,
        setWeekKeyPointList
    } = props;


    useEffect( () => {

        let arr = [ [], [], [], [], [], [], [] ];

        if( keyPointsCurrentEventId !== null ){

            for( let dayNum = 0; dayNum < 7; dayNum++ ){

                for( let i = 0; i < gridDayEventsList[ dayNum ].length; i++ ){
                    let {
                        id,
                        eventId,
                        firstSegmentId,
                        startTime,
                    } = gridDayEventsList[ dayNum ][ i ];

                    if( eventId === keyPointsCurrentEventId ){
                        if( firstSegmentId === null || firstSegmentId === id ){

                            let time_3 = convert_sec_to_time( startTime );
                            let arr_time = time_3.split( ':' );
                            let time = `${arr_time[0]}:${arr_time[1]}`;

                            let { category_id, name } = eventListById[ eventId ];

                            let colorBG = DEFAULT_CATEGORY.colorBG;
                            let colorText = DEFAULT_CATEGORY.colorText;

                            if( categoryListById[ category_id ] ){
                                colorBG = categoryListById[ category_id ].colorBG;
                                colorText = categoryListById[ category_id ].colorText;
                            };

                            arr[ dayNum ].push({
                                time,
                                name,
                                colorBG,
                                colorText,
                            });
                        };
                    };
                };
            };
        };

        setWeekKeyPointList( arr );



    }, [ keyPointsCurrentEventId ] );


    return (
        <div className = 'LP_Week'>
            
            <Day 
                dayName =   { 'Пн' }
                dayNum =    { 0 }
            />

            <Day 
                dayName =   { 'Вт' }
                dayNum =    { 1 }
            />

            <Day 
                dayName =   { 'Ср' }
                dayNum =    { 2 }
            />

            <Day 
                dayName =   { 'Чт' }
                dayNum =    { 3 }
            />

            <Day 
                dayName =   { 'Пт' }
                dayNum =    { 4 }
            />

            <Day 
                dayName =   { 'Сб' }
                dayNum =    { 5 }
            />

            <Day 
                dayName =   { 'Вс' }
                dayNum =    { 6 }
            />
            
        </div>
    )

};

export function Week( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <WeekComponent
            { ...props }
            keyPointsCurrentEventId = { layout.keyPointsCurrentEventId }
            gridDayEventsList = { layout.gridDayEventsList }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            setWeekKeyPointList = { ( arr ) => { dispatch( setWeekKeyPointList( arr ) ) } }

        />
    );


}
