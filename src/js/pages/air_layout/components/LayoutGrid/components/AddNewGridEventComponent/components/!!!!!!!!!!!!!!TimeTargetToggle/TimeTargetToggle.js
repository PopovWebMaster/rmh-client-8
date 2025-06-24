
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TimeTargetToggle.scss';

import { selectorData as layoutSlice }    from './../../../../../../../../redux/layoutSlice.js';

const TimeTargetToggleComponent = ( props ) => {

    let {
        eventId,
        timeTarget,
        setTimeTarget,
        eventListById,

    } = props;

    //   let [ timeTarget, setTimeTarget ] = useState( 'start' ); // 'finish' 

    let [ isReady, setIsReady ] = useState( false );
    // let [ time, setTime ] = useState( '' );

    useEffect( () => {
        if( eventId === null ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ eventId ] );


    return (<>
    { isReady? (
        <div className = 'G_ANG_TimeTargetToggle'>
            <span className = 'name'>Временной ориентир события </span>
            <span 
                onClick = { () => { setTimeTarget('start') } }
                className = { `bth ${ timeTarget === 'start'? 'isActive': '' }` } 
            >Начало</span>

            <span 
                onClick = { () => { setTimeTarget('finish') } }
                className = { `bth ${ timeTarget === 'finish'? 'isActive': '' }` } 
            >Окончание</span>
        </div>

    ): '' }
    </>)

};

export function TimeTargetToggle( props ){

    const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <TimeTargetToggleComponent
            { ...props }
            eventList = { layout.eventList }
            eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
