
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimeTrack.scss';

import { selectorData as layoutSlice }  from './../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time }          from './../../../../../../helpers/convert_sec_to_time.js';
import { round_to_number }              from './../../../../../../helpers/round_to_number.js';


import { add_curtain_to_body }          from './vendors/add_curtain_to_body.js';
import { add_event_mouse_move }         from './vendors/add_event_mouse_move.js';

let flag = true;

const TimeTrackComponent = ( props ) => {

    let {
        timeSpaceTo,
        timeSpaceFrom,
        target,
        startTime,
        setTimeTarget,
        duration,
        setStartTime,


    } = props;


    let [ sliderWidth, setSliderWidth ] = useState( 0 );
    let [ sliderLeft, setSliderLeft ] = useState( 0 );
    // let [ currentTimeSec, setCurrentTimeSec] = useState( 0 );
    // console.dir( 'TimeTrack' );
    // console.dir({
    //     timeSpaceTo,
    //     timeSpaceFrom,
    //     target,
    //     startTime,
    //     setTimeTarget,
    //     duration,
    //     sliderWidth,
    //     sliderLeft,
    //     flag,
    // });


    useEffect( () => {
        if( duration === null ){
            setSliderWidth( 0 );
            setSliderLeft( 0 );
            // flag = true;
        }else{
            let slider_width_proc = round_to_number( ( duration * 100 )/(timeSpaceTo - timeSpaceFrom ), 5 )  ;
            if( slider_width_proc <= 1){
                slider_width_proc = 1;
            };
            setSliderWidth( slider_width_proc );

            setSliderLeft( getSliderLeft() );

        };

        flag = true;

    }, [ duration ] );

    useEffect( () => {

        if( flag ){
            setSliderLeft( getSliderLeft() );
        }else{
            flag = true;
        };

    }, [ startTime ] );

    const getSliderLeft = () => {

        let intervel = timeSpaceTo - timeSpaceFrom;
        let scaleTime = startTime - timeSpaceFrom;

        let slider_left_proc = ( scaleTime * 100 )/(intervel + duration );
        let width_proc = ( duration * 100 )/intervel;
        let slider_width_sec = duration;
        let slider_width_proc = ( duration * 100 )/intervel;

        if( width_proc <= 1){
            width_proc = 1;
            slider_width_proc = intervel * 1/100;
            slider_left_proc = (( scaleTime * 100 )/( intervel + slider_width_proc ));
        };
        let leftProc = slider_left_proc * ( 100 + width_proc ) / 100 ;

        return leftProc;
    }

    let trackRef = useRef();
    let sliderRef = useRef();

    const mouse_down = ( e ) => {

        let { clientX } = e;
        let sliderRECT = sliderRef.current.getBoundingClientRect()
        let slider_left = sliderRECT.left;
        let slider_width = sliderRECT.width;

        let trackRECT = trackRef.current.getBoundingClientRect()
        let track_left = trackRECT.left;
        let track_right = trackRECT.right;
        let track_width = trackRECT.width;
        let ratio = clientX - slider_left;

        add_curtain_to_body();
        add_event_mouse_move( ( cursor ) => {

            flag = false;
            if( cursor - ratio >= track_left && cursor + slider_width - ratio <= track_right ){

                let track_x = cursor - ratio - track_left;
                let left_proc = ( track_x * 100 / track_width );
                // let next_startTime = ( ( timeSpaceTo - timeSpaceFrom ) * left_proc ) / 100;
                setSliderLeft( left_proc );
                // setStartTime( Math.round( next_startTime ) );


                let startTime = Math.round( (( timeSpaceTo - timeSpaceFrom - duration ) * (( left_proc * 100 ) / ( 100 - sliderWidth )) ) / 100 );
                setStartTime( timeSpaceFrom + startTime );

            }else{
                if( cursor - ratio < track_left ){
                    setSliderLeft( 0 );
                    setStartTime( timeSpaceFrom );
                }else if( cursor + slider_width - ratio > track_right ){
                    setSliderLeft( 100 - sliderWidth );
                    setStartTime( timeSpaceTo - duration );
                };
            };
        }, slider_click );
    }

    const slider_click = () => {
        if( target === 'start' ){
            setTimeTarget( 'finish' );
        }else{
            setTimeTarget( 'start' );
        };
    }



    return (<>{
        duration === null? '': (
            <div className = 'G_ANG_TS_track_wrap'>

                <div className = 'G_ANG_TS_track_time_point'>
                    <span>{ convert_sec_to_time( timeSpaceFrom ) }</span>
                </div>

                <div 
                    className = 'G_ANG_TS_track'
                    ref = { trackRef }
                >
                    <div 
                        className = 'G_ANG_TS_slider'
                        style = {{
                            left: `${sliderLeft}%`,
                            width: `${sliderWidth}%`,
                        }}
                        ref = { sliderRef }
                        onMouseDown = { mouse_down }
                    >

                        { target === 'start'? (
                            <div className = 'G_ANG_TS_slider_time left'>
                                <span>{ convert_sec_to_time( startTime ) }</span>

                            </div>
                        ): (
                            <div className = 'G_ANG_TS_slider_time right'>
                                <span>{ convert_sec_to_time( startTime + duration ) }</span>

                            </div>
                        ) }
                        {/* <div className = { `G_ANG_TS_slider_time ${ target === 'start'? 'left': 'right' }` }>
                            <span>{ convert_sec_to_time( currentTimeSec ) }</span>

                        </div> */}
                    </div>
                </div>

                <div className = 'G_ANG_TS_track_time_point'>
                    <span>{ convert_sec_to_time( timeSpaceTo ) }</span>
                    {/* <span>{ convert_sec_to_time( startTime - duration ) }</span> */}

                </div>
            </div>
        )
    }</>);

};

export function TimeTrack( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <TimeTrackComponent
            { ...props }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
