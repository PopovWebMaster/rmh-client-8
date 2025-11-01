
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './EmptyTimeSegment.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';
import { GrigItemWrap } from './../GrigItemWrap/GrigItemWrap.js';
import { get_height_em } from './vendors/get_height_em.js';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AddNewGridEventComponent } from './../AddNewGridEventComponent/AddNewGridEventComponent.js';
import { ConfirmationOfSaving } from './../ConfirmationOfSaving/ConfirmationOfSaving.js';
import { save_grid_events_changes_on_server } from './../../vendors/save_grid_events_changes_on_server.js';

import { IsAllowedContainer } from './../../../../../../components/IsAllowedContainer/IsAllowedContainer.js';

const EmptyTimeSegmentComponent = ( props ) => {

    let {
        // segmentIndex,
        startTime,
        durationTime,

        gridDayEventsIsChanges,

        gridEmptySegmentMaxHeightEm,
        gridEmptySegmentMinHeightEm,


    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isConfirm, setIsConfirm ] = useState( false );

    let [ isAllowed, setIsAllowedResult ] = useState( false );

    const clickAdd = () => {

        // if( gridDayEventsIsChanges ){
        //     setIsConfirm( true );
        // }else{
        //     setIsOpen( true );
        // };

        if( isAllowed ){
            if( gridDayEventsIsChanges ){
                save_grid_events_changes_on_server( () => {
                    setIsOpen( true );
                } );
            }else{
                setIsOpen( true );
            };
        };

    };

    const saveFirst = () => {
        save_grid_events_changes_on_server( () => {
            setIsOpen( true );
        } );
    }

    return (
        <GrigItemWrap
            startTime =     { startTime }
            durationTime =  { durationTime }
        >

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '90vw'
                height =    '80vh'
                title = 'Новое событие сетки'
                showCurrentDayName = { true }
            >
                <AddNewGridEventComponent 
                    isOpen =    { isOpen }
                    setIsOpen = { setIsOpen }

                    timeSpaceFrom = { startTime }
                    timeSpaceTo =   { startTime + durationTime }

                />

            </AlertWindowContainer>

            <ConfirmationOfSaving 
                isOpen = { isConfirm }
                setIsOpen = { setIsConfirm }
                comfirmHandler = { saveFirst }
            />



            <div 
                className = 'emptyTimeSegment'
                style = { { height: get_height_em( durationTime, gridEmptySegmentMinHeightEm, gridEmptySegmentMaxHeightEm ) } }
            >

                <IsAllowedContainer
                    accessName =            'layout_grid_edit'
                    setIsAllowedResult =    { setIsAllowedResult }
                >

                    <div className = 'ETS_add'>
                        <span 
                            className = 'icon-plus'
                            onClick = { clickAdd }
                        ></span>
                    </div>
                </IsAllowedContainer>
                
            </div>

        </GrigItemWrap>

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
