
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PointsTrack.scss';

// import { selectorData as layoutSlice } from './../../../../../../../../../../redux/layoutSlice.js';

import { get_points } from './vendors/get_points.js';

import { PointControlSlider } from './../PointControlSlider/PointControlSlider.js';


const PointsTrackComponent = ( props ) => {

    let {
        maxDurationTime,
        gridEventsParts,
    } = props;

    let [ points, setPoints ] = useState( [] );

    useEffect( () => {

        let res = get_points( gridEventsParts, maxDurationTime );

        setPoints( res );

        // console.dir( 'points' );
        // console.dir( res );


    }, [ gridEventsParts ] );

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <PointControlSlider 
                    key =               { index }
                    point =             { item.point }
                    spaceFrom =         { item.spaceFrom }
                    spaceTo =           { item.spaceTo }
                    pointIndex =        { index }
                    maxDurationTime =   { maxDurationTime }
                />
            );
        } );

        return div;

    }


    return (
        <div className = 'CGETT_points_track'>

           { create( points ) }


        </div>

                
    )

};

export function PointsTrack( props ){
    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();
    
    return (
        <PointsTrackComponent
            { ...props }
            // gridDayEventsListById = { layout.gridDayEventsListById }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
