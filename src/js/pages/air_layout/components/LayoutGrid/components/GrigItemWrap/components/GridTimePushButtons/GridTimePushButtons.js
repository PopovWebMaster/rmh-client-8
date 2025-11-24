

import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './GridTimePushButtons.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { set_grid_event_changes_to_store } from './../../../../vendors/set_grid_event_changes_to_store.js';
import { access_right } from './../../../../../../../../helpers/access_right.js';



const GridTimePushButtonsComponent = ( props ) => {

    let {
        id,

        gridDayEventsList,
        gridCurrentDay,

    } = props;

    const clickUp = () => {
        if( access_right( 'layout_grid_edit' ) ){
            for( let i = 0; i < gridDayEventsList[ gridCurrentDay ].length; i++ ){
                if( gridDayEventsList[ gridCurrentDay ][ i ].id === id ){
                    let { durationTime, startTime } = gridDayEventsList[ gridCurrentDay ][ i ];

                    if( gridDayEventsList[ gridCurrentDay ][ i - 1 ] ){
                        let nextStartTime = gridDayEventsList[ gridCurrentDay ][ i - 1 ].startTime + gridDayEventsList[ gridCurrentDay ][ i - 1 ].durationTime + 1;
                        if( startTime !== nextStartTime ){
                            set_grid_event_changes_to_store( id, { startTime: nextStartTime } );
                        };
                    };

                    break;
                };
            };
        };
    }

    const clickDown = () => {
        if( access_right( 'layout_grid_edit' ) ){
            for( let i = 0; i < gridDayEventsList[ gridCurrentDay ].length; i++ ){
                if( gridDayEventsList[ gridCurrentDay ][ i ].id === id ){
                    let { durationTime, startTime } = gridDayEventsList[ gridCurrentDay ][ i ];

                    if( gridDayEventsList[ gridCurrentDay ][ i + 1 ] ){
                        let nextStartTime = gridDayEventsList[ gridCurrentDay ][ i + 1 ].startTime - durationTime - 1;
                        if( startTime !== nextStartTime ){
                            set_grid_event_changes_to_store( id, { startTime: nextStartTime } );
                        };
                    };
                    break;
                };
            };
        };
        
    }



    return (
        <div className = 'gridTimePushButtons'>
            <span
                className = 'icon-up-1'
                onClick = { clickUp }
            ></span>

            <span
                className = 'icon-down-1'
                onClick = { clickDown }
            ></span>
        </div>
    )

};

export function GridTimePushButtons( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <GridTimePushButtonsComponent
            { ...props }
            // gridOneDayList = { layout.gridOneDayList }
            gridDayEventsList = { layout.gridDayEventsList }
            gridCurrentDay = { layout.gridCurrentDay }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
