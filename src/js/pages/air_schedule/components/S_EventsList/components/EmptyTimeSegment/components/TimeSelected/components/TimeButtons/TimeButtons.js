
import React, { useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimeButtons.scss';

// import { selectorData as layoutSlice }    from './../../../../../../../../../../redux/layoutSlice.js';

import { InputDuration } from './../../../../../../../../../../components/InputDuration/InputDuration.js';
import { convert_time_str_to_sec } from './../../../../../../../../../../helpers/convert_time_str_to_sec.js';

const TimeButtonsComponent = ( props ) => {

    let {
        timeSpaceTo,
        timeSpaceFrom,
        duration,
        startTime,
        setStartTime,


    } = props;

    let [ SS, setSS ] = useState( '' );
    let [ MM, setMM ] = useState( '' );
    let [ HH, setHH ] = useState( '' );

    const enter_input = () => {
        let hh = '00';
        let mm = '00';
        let ss = '00';
        if( HH !== '' ){
            hh = HH;
        };
        if( MM !== '' ){
            mm = MM;
        };
        if( SS !== '' ){
            ss = SS;
        };

        let sec = convert_time_str_to_sec( `${hh}:${mm}:${ss}` );
        if( sec >= timeSpaceFrom && sec <= timeSpaceTo - duration ){
            setStartTime( sec );
        };

        setSS('');
        setMM('');
        setHH('');

    }


    const click_left = ( sec ) => {
        let next_val = startTime - sec;

        if( next_val >= timeSpaceFrom ){
            console.dir( 'next_val' );
            console.dir( next_val );

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

                <div className = 'time_input'>

                    <InputDuration 
                        HH = { HH }
                        MM = { MM }
                        SS = { SS }
                        setHH = { setHH }
                        setMM = { setMM }
                        setSS = { setSS }

                        enterHandler = { enter_input }
                    
                    />
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
