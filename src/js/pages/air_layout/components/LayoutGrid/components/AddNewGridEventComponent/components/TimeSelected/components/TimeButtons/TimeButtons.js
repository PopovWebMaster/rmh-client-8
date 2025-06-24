
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimeButtons.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';

const TimeButtonsComponent = ( props ) => {

    let {
        timeSpaceTo,
        timeSpaceFrom,
        duration,
        startTime,
        setStartTime,


    } = props;

    const click_left = ( sec ) => {
        let next_val = startTime - sec;

        if( next_val >= timeSpaceFrom ){
            setStartTime( next_val );
        };
    };

    const click_right = ( sec ) => {
        let next_val = startTime + sec;

        if( next_val <= timeSpaceTo - duration ){
            setStartTime( next_val );
        };
    };

    return (<>{
        duration === null? '': (
            <div className = 'G_ANG_TS_TimeButtons'>

                <div
                    className = 'btn'
                    onClick = { () => { click_left( 60 ) } }
                >
                    <span className = 'icon icon-left'></span>
                    <span className = 'text'>60s</span>
                </div>

                <div
                    className = 'btn'
                    onClick = { () => { click_left( 10 ) } }
                >
                    <span className = 'icon icon-left'></span>
                    <span className = 'text'>10s</span>
                </div>

                <div
                    className = 'btn marginRight'
                    onClick = { () => { click_left( 1 ) } }
                >
                    <span className = 'icon icon-left'></span>
                    <span className = 'text'>1s</span>
                </div>

                <div
                    className = 'btn'
                    onClick = { () => { click_right( 1 ) } }
                >
                    <span className = 'text'>1s</span>
                    <span className = 'icon icon-right'></span>
                </div>

                <div
                    className = 'btn'
                    onClick = { () => { click_right( 10 ) } }
                >
                    <span className = 'text'>10s</span>
                    <span className = 'icon icon-right'></span>
                </div>

                <div
                    className = 'btn'
                    onClick = { () => { click_right( 60 ) } }
                >
                    <span className = 'text'>60s</span>
                    <span className = 'icon icon-right'></span>
                </div>

               
            </div>
        )
    }</>);

};

export function TimeButtons( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <TimeButtonsComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
