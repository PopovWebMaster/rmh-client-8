
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveCutResultBtn.scss';

import { selectorData as layoutSlice, setGridDayEventsList, setGridDayEventsIsChanges } from './../../../../../../../../redux/layoutSlice.js';

import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';

import { add_new_cut_group_into_dayEventsList } from './vendors/add_new_cut_group_into_dayEventsList.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

const SaveCutResultBtnComponent = ( props ) => {

    let {

        setIsOpen,

        gridEventsParts,
        gridOneDayList,

        gridCurrentDay,
        gridDayEventsList,

        currentPage,

        setSpinnerIsActive,
        setGridDayEventsList,
        setGridDayEventsIsChanges,

    } = props;

    const click = () => {

        setSpinnerIsActive( true );

        let newarr = add_new_cut_group_into_dayEventsList( gridEventsParts );

        send_request_to_server({
            route: `set-grid-events-day-list-after-cutting`,
            data: { 
                dayNum: gridCurrentDay,
                dayList: newarr[ gridCurrentDay ],
                
            },

            successCallback: ( response ) => {
                
                console.dir( 'response' );
                console.dir( response );

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
        <div className = 'AOASGE_SaveCutResultBtn'>
            <div 
                className = 'btn_wrap'
                onClick = { click }
            >
                <span className = 'icon icon-plus'></span>
                <span className = 'text'>Добавть</span>
            </div>
        </div>
    )

};

export function SaveCutResultBtn( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <SaveCutResultBtnComponent
            { ...props }
            gridOneDayList = { layout.gridOneDayList }
            gridCurrentDay = { layout.gridCurrentDay }
            gridDayEventsList = { layout.gridDayEventsList }
            // eventListById = { layout.eventListById }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setGridDayEventsIsChanges = { ( val ) => { dispatch( setGridDayEventsIsChanges( val ) ) } }


        />
    );


}
