
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LinkedFilesItems.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { EVENT_TYPE } from './../../../../../../../../config/layout.js';

const LinkedFilesItemsComponent = ( props ) => {

    let {
        eventId,
        id,
        startTime,
        durationTime,
        eventListById,

    } = props;

    let [ list, setList ] = useState( [] );
    let [ eventType, setEventType ] = useState( '' );

    useEffect( () => {
        if( eventListById[ eventId ] ){
            let { linked_file, type } = eventListById[ eventId ];

            if( linked_file === null ){
                setList( [] );
                setEventType('');
            }else{
                setList( linked_file );
                setEventType( type );
            };

        };

    }, [ eventId, eventListById, startTime, durationTime ] );

    const createFreeTime = ( allDuration ) => {
        if( eventType === EVENT_TYPE.BLOCK ){
            return (
                <div
                    className = 'CTS_LinkedFilesItems_item'
                >
                    <div
                        className = 'CTS_LFI_time'
                    >
                        <span className = 'CTS_LFI_time_fact' >{ convert_sec_to_time( startTime + allDuration ) }</span>
                        <span className = 'CTS_LFI_duration'>{ convert_sec_to_time( durationTime - allDuration ) }</span>
                    </div>

                    <input
                        type = 'text'
                        className = 'CTS_LFI_file_name_inp_free'
                        value = { 'остаток времени' }
                        onChange = { () => {} }
                    />

                </div>
            )

        }else{
            return '';
        };

    }

    const create = ( arr ) => {

        let allDuration = 0;

        let div = arr.map( ( item, index ) => {
            let {
                name,
                duration,
            } = item;

            let startTime_sec = startTime + allDuration;
            allDuration = allDuration + duration;

            return (
                <React.Fragment  key = { index }>
                <div
                    className = 'CTS_LinkedFilesItems_item'
                >
                    <div
                        className = 'CTS_LFI_time'
                    >
                        <span className = 'CTS_LFI_time_fact' >{ convert_sec_to_time( startTime_sec ) }</span>
                        <span className = 'CTS_LFI_duration'>{ convert_sec_to_time( duration ) }</span>
                    </div>

                    <input
                        type = 'text'
                        className = 'CTS_LFI_file_name_inp'
                        value = { name }
                        onChange = { () => {} }
                    />

                </div>

                { arr[ index + 1 ]? '': createFreeTime( allDuration ) }

            </React.Fragment>);

        } );

        return div;

    };

    return (
        <div className = 'CTS_LinkedFilesItems'>
            { create( list ) }
        </div>
    )

};

export function LinkedFilesItems( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <LinkedFilesItemsComponent
            { ...props }
            layout = { layout }
            eventListById = { layout.eventListById }
            categoryListById = { layout.categoryListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
