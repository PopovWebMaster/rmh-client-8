
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OneSector.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';

import { convert_sec_to_time } from './../../../../../../helpers/convert_sec_to_time.js';

import { EmptyTimeSegment } from './../EmptyTimeSegment/EmptyTimeSegment.js';

import { CompletedTimeSegment } from './../CompletedTimeSegment/CompletedTimeSegment.js';

import { GRID_SEGMENT_TYPE } from './../../../../../../config/layout.js';

const OneSectorComponent = ( props ) => {

    let {
        sector_start_time,
        sector_completed_duration,
        sector_duration,
        sector_list,

    } = props;


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { type } = item;
            if( type === GRID_SEGMENT_TYPE.COMPLETED ){
                let {
                    id,
                    firstSegmentId,
                    eventId,
                    notes,
                    isKeyPoint,
                    startTime,
                    durationTime,
                    cutPart,
                    is_premiere,


                } = item;


                return (
                    <CompletedTimeSegment 
                        key =               { index }
                        id =                { id }
                        firstSegmentId =    { firstSegmentId }
                        eventId =           { eventId }
                        notes =             { notes }
                        isKeyPoint =        { isKeyPoint }
                        startTime =         { startTime }
                        durationTime =      { durationTime }
                        cutPart =           { cutPart }
                        is_premiere =       { is_premiere }

                    />
                );
            }else if( type === GRID_SEGMENT_TYPE.EMPTY ){
                let {
                    startTime,
                    durationTime,
                } = item;
                return (
                    <EmptyTimeSegment 
                        segmentIndex =  { index }
                        key =           { index }
                        startTime =     { startTime }
                        durationTime =  { durationTime }
                    />
                );
            };

        } );

        return div;

    };

    return (<>

        {/* { sector_list.length === 1? (
            <EmptyTimeSegment 
                segmentIndex =  { 0 }
                startTime =     { sector_list[ 0 ].startTime }
                durationTime =  { sector_list[ 0 ].durationTime }
            />
        ): ( */}
            <div 
                className = { `GDE_OneSector` }
                id = { `sector_${sector_start_time}` }
            >
                <div className = 'GDE_OS_header'>
                    <div className = 'GDE_OS_header_time'>
                        <span>{ convert_sec_to_time( sector_start_time ) }</span>
                    </div>

                    <div className = 'GDE_OS_header_time_empty'>
                        <span className = 'name'>Свободно: </span>
                        <span className = 'value'>{ convert_sec_to_time( sector_duration - sector_completed_duration ) }</span>
                    </div>
                </div>

                <div className = 'GDE_OS_body'>

                    <div className = 'GDE_OS_body_left'>

                        <span className = 'GDE_OS_body_left_timeEnd'>{ convert_sec_to_time( sector_start_time + sector_duration ) }</span>
                    </div>

                    <div className = 'GDE_OS_body_right'>
                        { create( sector_list ) }
                    </div>
                </div>
            </div>
        {/* ) } */}
    
    

    </>)

};

export function OneSector( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <OneSectorComponent
            { ...props }
            gridOneDayList = { layout.gridOneDayList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
