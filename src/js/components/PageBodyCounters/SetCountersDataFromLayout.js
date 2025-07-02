
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../redux/layoutSlice.js';
import { selectorData as countersSlise, setCounterList } from './../../redux/countersSlise.js';

import { DEFAULT_CATEGORY } from './../../config/layout.js'

const SetCountersDataFromLayoutComponent = ( props ) => {

    let {
        children,

        gridCurrentDay,
        gridDayEventsList,

        eventListById,
        categoryListById,

        setCounterList,

    } = props;

    useEffect( () => {

        let list = gridDayEventsList[ gridCurrentDay ];

        let counter_list = [];

        for( let i = 0; i < list.length; i++ ){
            let { 
                eventId,
                durationTime,
                is_premiere,
            } = list[ i ];

            let category = get_category_by_event_id( eventId );

            counter_list.push({
                category,
                duration: durationTime,
                is_premiere,
            });
        };

        setCounterList( counter_list );

    }, [
        gridCurrentDay,
        gridDayEventsList,
    ] );

    const get_category_by_event_id = ( eventId ) => {
        let category = {};

        if( eventListById[ eventId ] ){
            
            let category_id = eventListById[ eventId ].category_id;

            if( categoryListById[ category_id ] ){
                category = categoryListById[ category_id ];
            }else{
                category = DEFAULT_CATEGORY
            };
        };
        return category;
    }


    
    return (
        <>{ children }</>

    )

};

export function SetCountersDataFromLayout( props ){

    const layout = useSelector( layoutSlice );
    const counters = useSelector( countersSlise );
    const dispatch = useDispatch();

    return (
        <SetCountersDataFromLayoutComponent
            { ...props }

            gridCurrentDay =    { layout.gridCurrentDay }
            gridDayEventsList = { layout.gridDayEventsList }
            eventListById =     { layout.eventListById }
            categoryListById =  { layout.categoryListById }

            setCounterList = { ( arr ) => { dispatch( setCounterList( arr ) ) } }


        />
    );


}
