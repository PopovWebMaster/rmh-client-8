
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutSegmentButton.scss';

import { selectorData as layoutSlice, setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../../redux/layoutSlice.js';

import {  setSpinnerIsActive } from './../../../../../../redux/spinnerSlice.js';

import { selectorData as cutEventEditorSlise, setSutEventData } from './../../../../../../redux/cutEventEditorSlise.js';

import { EVENT_TYPE } from './../../../../../../config/layout.js';

import { CutEventEditor } from './../../../../../../components/CutEventEditor/CutEventEditor.js';

import { get_grid_event_parts_arr } from './components/CutEditorComponent/vendors/get_grid_event_parts_arr.js';
import { get_max_duration } from './components/CutEditorComponent/vendors/get_max_duration.js';
import { get_event_style } from './../../../../../../helpers/get_event_style.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { add_new_cut_group_into_dayEventsList } from './vendors/add_new_cut_group_into_dayEventsList.js'

import { marge_dayList_and_catList } from './../../../../../../components/CutEventEditor/marge_dayList_and_catList.js';

const CutSegmentButtonComponent = ( props ) => {

    let {
        id,
        gridCurrentDay,

        gridDayEventsListById,
        gridDayEventsList,
        eventListById,

        gridOneDayList,
        eventsPartsList,
        setSutEventData,
        setSpinnerIsActive,
        setGridDayEventsList,
        setGridDayEventsIsChanges,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ showStatus, setShowStatus ] = useState( true );

    useEffect( () => {
        if( gridDayEventsListById[ id ] ){
            let { firstSegmentId } = gridDayEventsListById[ id ];
            let event_id = gridDayEventsListById[ id ].eventId;
            let { type } = eventListById[ event_id ];
            if( type === EVENT_TYPE.FILE ){
                setShowStatus( getShowStatus( firstSegmentId ) );
            }else{
                setShowStatus( false );
            };

        }else{
            setShowStatus( false );
        };

    }, [ gridDayEventsListById ] );


    const click = ( status ) => {
        if( status ){
            setIsOpen( true );

            let eventParts = get_grid_event_parts_arr( gridOneDayList, id );
            let { eventId } = eventParts[ 0 ];
            let eventStyle = get_event_style( eventId );
            let eventName = eventListById[ eventId ].name;

            setSutEventData({
                eventParts,
                maxDurationTime:    get_max_duration( id ),
                eventId,
                eventStyle,
                eventName,
            });
        };
    }

    const getShowStatus = ( first_segment_id ) => {
        let result = false;
        if( first_segment_id === null ){
            result = true;
        }else if( first_segment_id === id ){
            result = true;
        };
        return result;
    }

    const saveHandler = () => {

        let dayList = marge_dayList_and_catList( gridDayEventsList[ gridCurrentDay ], eventsPartsList );

        setSpinnerIsActive( true );
        send_request_to_server({
            route: `set-grid-events-day-list-after-cutting`,
            data: { 
                dayNum: gridCurrentDay,
                dayList,
            },
            successCallback: ( response ) => {

                if( response.ok ){
                    setSpinnerIsActive( false );
                    setGridDayEventsList( response.list );
                    setGridDayEventsIsChanges( false );
                    setIsOpen( false );
                };

            },
        });
    }

    return (
        <div className = 'cutSegmentButton'>

            <CutEventEditor
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                saveHandler = { saveHandler }
            />

            <div 
                className = { `CSB_btn ${showStatus? 'isActive': ''}` }
                onClick = { () => { click( showStatus ) } }
            >
                <span className = 'icon-scissors'></span>
            </div> 
            
        </div>
    )

};

export function CutSegmentButton( props ){

    const layout = useSelector( layoutSlice );
    const cutEventEditor = useSelector( cutEventEditorSlise );


    
    const dispatch = useDispatch();
    
    return (
        <CutSegmentButtonComponent
            { ...props }

            eventsPartsList = { cutEventEditor.eventsPartsList }


            gridDayEventsListById = { layout.gridDayEventsListById }
            gridDayEventsList = { layout.gridDayEventsList }

            eventListById = { layout.eventListById  }
            gridOneDayList = { layout.gridOneDayList }
            gridCurrentDay = { layout.gridCurrentDay }



            setSutEventData =               { ( obj ) => { dispatch( setSutEventData( obj ) ) } }
            setSpinnerIsActive =            { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridDayEventsList =          { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setGridDayEventsIsChanges =     { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }

            
        />
    );


}
