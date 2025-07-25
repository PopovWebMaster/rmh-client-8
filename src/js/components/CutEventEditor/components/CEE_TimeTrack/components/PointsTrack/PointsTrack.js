
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PointsTrack.scss';

import { selectorData as cutEventEditorSlise } from './../../../../../../redux/cutEventEditorSlise.js';

import { get_points } from './vendors/get_points.js';

import { PointControlSlider } from './../PointControlSlider/PointControlSlider.js';


const PointsTrackComponent = ( props ) => {

    let {
        eventsPartsList,
    } = props;

    let [ points, setPoints ] = useState( [] );

    useEffect( () => {

        setPoints( get_points() );

    }, [ eventsPartsList ] );

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            return (
                <PointControlSlider 
                    key =               { index }
                    point =             { item.point }
                    pointIndex =        { index }
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
    const cutEventEditor = useSelector( cutEventEditorSlise );
    // const dispatch = useDispatch();
    
    return (
        <PointsTrackComponent
            { ...props }
            eventsPartsList = { cutEventEditor.eventsPartsList }

            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
