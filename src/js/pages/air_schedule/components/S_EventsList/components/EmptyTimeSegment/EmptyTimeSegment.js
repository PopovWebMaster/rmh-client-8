
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EmptyTimeSegment.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { SchEventContainer } from './../SchEventContainer/SchEventContainer.js';


import { get_height_em } from './vendors/get_height_em.js';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AddNewEventComponent } from './components/AddNewEventComponent/AddNewEventComponent.js';
// import { AddNewGridEventComponent } from './../AddNewGridEventComponent/AddNewGridEventComponent.js';
// import { ConfirmationOfSaving } from './../ConfirmationOfSaving/ConfirmationOfSaving.js';
// import { save_grid_events_changes_on_server } from './../../vendors/save_grid_events_changes_on_server.js';



const EmptyTimeSegmentComponent = ( props ) => {

    let {
        startTime,
        durationTime,
        nextStartTime,
        gridEmptySegmentMaxHeightEm,
        gridEmptySegmentMinHeightEm,


    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const clickAdd = () => {
        setIsOpen( true );
    };

    return (
        <SchEventContainer
            startTime =     { startTime }
            durationTime =  { durationTime }
            isEmpty = { true }
            nextStartTime = { nextStartTime }
        >

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '90vw'
                height =    '80vh'
                title = 'Новое событие'
                showCurrentDayName = { true }
            >

                <AddNewEventComponent
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }

                    timeSpaceFrom = { startTime }
                    timeSpaceTo =   { startTime + durationTime }
                />

            </AlertWindowContainer>

            <div 
                className = 'emptyTimeSegment'
                style = { { height: get_height_em( durationTime, gridEmptySegmentMinHeightEm, gridEmptySegmentMaxHeightEm ) } }
            >
                <div className = 'ETS_add'>
                    <span 
                        className = 'icon-plus'
                        onClick = { clickAdd }
                    ></span>
                </div>
            </div>

        </SchEventContainer>

    )

};

export function EmptyTimeSegment( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <EmptyTimeSegmentComponent
            { ...props }
            gridDayEventsIsChanges = { layout.gridDayEventsIsChanges }
            gridEmptySegmentMaxHeightEm = { layout.gridEmptySegmentMaxHeightEm }
            gridEmptySegmentMinHeightEm = { layout.gridEmptySegmentMinHeightEm }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
