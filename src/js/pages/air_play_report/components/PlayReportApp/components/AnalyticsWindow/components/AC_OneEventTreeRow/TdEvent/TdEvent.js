
import React, { useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';
import { selectorData as playReportAnalyticsSlise } from './../../../../../../../../../redux/playReportAnalyticsSlise.js';

import './TdEvent.scss';

import { AnalitycsEventsTreeClass } from './../../../../../../../../../classes/AnalitycsEventsTreeClass.js';

const TdEventComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        eventCount,
        isFirstEvent,

        eventListById,

        evenstTree,

    } = props;

    let [ chackValue, setChackValue ] = useState( false );

    useEffect( () => {

        let val = true;
        for( let fileName in evenstTree[ category_id ][ event_id ] ){
            let { isUsed } = evenstTree[ category_id ][ event_id ][ fileName ];
            if( isUsed === false ){
                val = false;
                break;
            };
        };

        setChackValue( val );

    }, [ evenstTree ] );


    const chack = ( e ) => {

        let AnalitycsEventsTree = new AnalitycsEventsTreeClass();
        AnalitycsEventsTree.CreateFromStore();

        let next_value = !chackValue;

        for( let fileName in evenstTree[ category_id ][ event_id ] ){
            AnalitycsEventsTree.SetChanges({
                category_id,
                event_id,
                fileName,
                changeObject: {
                    isUsed: next_value
                },
            });
            
        };

        AnalitycsEventsTree.SetEventsTreeToStore();


    };


    const get_td = () => {

        let { name, style } = eventListById[ event_id ];

        return (
            <td 
                rowSpan = { eventCount.count } 
                className = 'TdEvent'
            >
                <input
                    type =      'checkbox'
                    value =     { true }
                    checked =   { chackValue }
                    onChange =  { chack }
                />
                <span
                    style = { style }
                >{ name }</span>
            </td>
        ) 

    }
    
    return (<>{ isFirstEvent? get_td(): '' }</>
       

    )

};

export function TdEvent( props ){

    const layout = useSelector( layoutSlice );
    const playReportAnalytics = useSelector( playReportAnalyticsSlise );


    const dispatch = useDispatch();

    return (
        <TdEventComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }

            evenstTree = { playReportAnalytics.evenstTree }




            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
