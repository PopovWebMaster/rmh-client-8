
import React, { useRef, useEffect, useState } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './SelectEventsList.scss';

import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';

import { OneSelectedEvent } from './../OneSelectedEvent/OneSelectedEvent.js';

const SelectEventsListComponent = ( props ) => {

    let {
        selectedEvents,
        removeSelectedEvent,
    } = props;

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            let {
                category_id, event_id, name, style, type
            } = item;

            return (
                <OneSelectedEvent
                    key =                   { index }
                    event_id =              { event_id }
                    category_id =           { category_id }
                    name =                  { name }
                    style =                 { style }
                    type =                  { type }
                    removeSelectedEvent =   { removeSelectedEvent }
                />
            );

        } );

        return div;

    };


    

    return (
        <div className = 'PR_ASC_SelectEventsList'>

            <ScrollContainer height = '10vh' >

                <div className = 'PR_ASC_SelectEventsList_wrap'>
                    { create( selectedEvents ) }
                </div>

            </ScrollContainer>
 
        </div>

    )

};

export function SelectEventsList( props ){

    // const playReport = useSelector( playReportSlice );
    // const dispatch = useDispatch();

    return (
        <SelectEventsListComponent
            { ...props }
            // searchFocus = { playReport.searchFocus }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
