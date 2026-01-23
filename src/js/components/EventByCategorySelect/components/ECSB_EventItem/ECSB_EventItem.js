
import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as layoutSlice } from './../../../../redux/layoutSlice.js';

import './ECSB_EventItem.scss';


const ECSB_EventItemComponent = ( props ) => {

    let {
        durationTime,
        isActive,
        eventId,
        name,
        style,
        eventClick,

        selectedEventId,

    } = props;


    const click = ( id ) => {
        if( isActive ){
            eventClick( id );
        };
    }

    return (
        <div 
            className = { `ECSB_EventItem ${isActive? 'isActive': '' } ${ selectedEventId === eventId? 'isSelected': '' }` }
            onClick = { () => { click( eventId ) } }
        >

            <span className = 'ECSB_EI_dur'>{ durationTime }</span>
            <span 
                className = 'ECSB_EI_ev'
                style = { style }
            >{ name }</span>

           

        </div>
    )

};

export function ECSB_EventItem( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <ECSB_EventItemComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // categoryListById = { layout.categoryListById }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
