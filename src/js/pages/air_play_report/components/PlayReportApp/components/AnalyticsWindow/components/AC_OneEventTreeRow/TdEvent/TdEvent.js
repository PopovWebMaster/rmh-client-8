// TdEvent

// TdCategory

// AC_OneEventTreeRow


import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as layoutSlice } from './../../../../../../../../../redux/layoutSlice.js';


import './TdEvent.scss';


// import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';



const TdEventComponent = ( props ) => {

    let {

        // index,
        // list_length = 0,
        category_id,
        event_id,
        eventCount,
        isFirstEvent,

        eventListById,

    } = props;

    let [ chackValue, setChackValue ] = useState( false );


    const chack = ( e ) => {
        console.dir({
            category_id,
            event_id,
            eventCount,
            isFirstEvent,
        });
    };


    const get_td = () => {

        let { name, style } = eventListById[ event_id ];

        // console.dir( eventListById[ event_id ] );

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
    const dispatch = useDispatch();

    return (
        <TdEventComponent
            { ...props }

            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }



            // setAnalitycsIsActive = { ( val ) => { dispatch( setAnalitycsIsActive( val ) ) } }

        />
    );


}
