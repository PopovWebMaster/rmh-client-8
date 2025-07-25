
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TimeArrowsBtn.scss';

import { selectorData as cutEventEditorSlise, setEventsPartsList }from './../../../../../../redux/cutEventEditorSlise.js';

import { get_time_space_for_one_part } from './../../vendors/get_time_space_for_one_part.js';

const TimeArrowsBtnComponent = ( props ) => {

    let {
        index,
        
        eventsPartsList,
        setEventsPartsList,

    } = props;

    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {
        if( eventsPartsList[ index + 1 ] ){
            setIsShow( true );



        }else{
            setIsShow( false );
        };

    }, [ eventsPartsList, index ] );


    const click_left = ( sec ) => {
        let startTime_0 =       eventsPartsList[ index ].startTime;
        let durationTime_0 =    eventsPartsList[ index ].durationTime;
        let startTime_1 =       eventsPartsList[ index + 1 ].startTime;
        let durationTime_1 =    eventsPartsList[ index + 1 ].durationTime;

        let { 
            timeSpaceFrom,
            timeSpaceTo,
        } = get_time_space_for_one_part( index );

        let val = startTime_1 - sec;

        let arr = [];
        
        if( timeSpaceFrom <= val && timeSpaceTo >= val ){

            for( let i = 0; i < eventsPartsList.length; i++ ){

                if( i === index ){
                    let startTime = startTime_0;
                    let durationTime = durationTime_0 - sec;
                    let item = { ...eventsPartsList[ i ] };
                    item.startTime = startTime;
                    item.durationTime = durationTime;
                    arr.push( item );

                }else if(  i === index + 1 ){

                    let startTime = startTime_1 - sec;
                    let durationTime = durationTime_1 + sec;
                    let item = { ...eventsPartsList[ i ] };
                    item.startTime = startTime;
                    item.durationTime = durationTime;
                    arr.push( item );

                }else{
                    arr.push( { ...eventsPartsList[ i ] } );
                };

            };
            setEventsPartsList( arr );
        };

        

    };


    const click_right = ( sec ) => {
        let startTime_0 =       eventsPartsList[ index ].startTime;
        let durationTime_0 =    eventsPartsList[ index ].durationTime;
        let startTime_1 =       eventsPartsList[ index + 1 ].startTime;
        let durationTime_1 =    eventsPartsList[ index + 1 ].durationTime;

        let { 
            timeSpaceFrom,
            timeSpaceTo,
        } = get_time_space_for_one_part( index );

        let val = startTime_1 + sec;

        let arr = [];
        
        if( timeSpaceFrom <= val && timeSpaceTo >= val ){

            for( let i = 0; i < eventsPartsList.length; i++ ){

                if( i === index ){
                    let startTime = startTime_0;
                    let durationTime = durationTime_0 + sec;
                    let item = { ...eventsPartsList[ i ] };
                    item.startTime = startTime;
                    item.durationTime = durationTime;
                    arr.push( item );

                }else if(  i === index + 1 ){

                    let startTime = startTime_1 + sec;
                    let durationTime = durationTime_1 - sec;
                    let item = { ...eventsPartsList[ i ] };
                    item.startTime = startTime;
                    item.durationTime = durationTime;
                    arr.push( item );

                }else{
                    arr.push( { ...eventsPartsList[ i ] } );
                };

            };
            setEventsPartsList( arr );
        };

        

    };

    return (<>{ isShow? (
        <div className = 'AOASGE_TimeButtons'>

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


    ): '' }</>
        
    )

};

export function TimeArrowsBtn( props ){

    const cutEventEditor = useSelector( cutEventEditorSlise );
    const dispatch = useDispatch();

    return (
        <TimeArrowsBtnComponent
            { ...props }

            eventsPartsList = { cutEventEditor.eventsPartsList }

            setEventsPartsList = { ( val ) => { dispatch( setEventsPartsList( val ) ) } }


        />
    );


}
