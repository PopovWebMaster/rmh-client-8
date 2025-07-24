
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CutSegmentButton.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';


// import { CutEditorComponent } from './components/CutEditorComponent/CutEditorComponent.js';

// import { EVENT_TYPE } from './../../../../../../config/layout.js';

const CutSegmentButtonComponent = ( props ) => {

    let {
        gridEventId,

        gridDayEventsListById,
        eventListById,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ showStatus, setShowStatus ] = useState( true );
    let [ firstSegmentId, setFirstSegmentId ] = useState( null );
    let [ durationTime, setDurationTime ] = useState( 0 );
    let [ startTime, setStartTime ] = useState( 0 );
    let [ isPremiere, setIsPremiere] = useState( false );


    // useEffect( () => {
    //     // if( gridDayEventsListById[ id ] ){
    //     //     let { 
    //     //         firstSegmentId,
    //     //         durationTime,
    //     //         startTime,
    //     //         eventId,
    //     //         is_premiere,
    //     //     } = gridDayEventsListById[ id ];

    //     //     let { type } = eventListById[ eventId ];
    //     //     if( type === EVENT_TYPE.FILE ){
    //     //         // setShowStatus( true );
    //     //         setShowStatus( getShowStatus( firstSegmentId ) );
    //     //     }else{
    //     //         setShowStatus( false );
    //     //     };

    //     //     // setShowStatus( getShowStatus( firstSegmentId ) );
    //     //     setFirstSegmentId( firstSegmentId );
    //     //     setDurationTime( durationTime );
    //     //     setStartTime( startTime );
    //     //     setIsPremiere( is_premiere );



    //     // }else{
    //     //     setShowStatus( false );
    //     //     // setIsEctive( false );
    //     // };

    // }, [ gridDayEventsListById ] );


    const click = ( status ) => {
        if( status ){
            setIsOpen( true )
        };
    }

    // const getShowStatus = ( first_segment_id ) => {
    //     let result = false;
    //     if( first_segment_id === null ){
    //         result = true;
    //     }else if( first_segment_id === gridEventId ){
    //         result = true;
    //     };
    //     return result;
    // }

    return (
        <div className = 'cutSegmentButton'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '90vw'
                height = '90vh'
                showCurrentDayName = { true }
            >
                {/* <CutEditorComponent 
                    isOpen =            { isOpen }
                    setIsOpen =         { setIsOpen }
                    id =                { id }
                    firstSegmentId =    { firstSegmentId }
                    durationTime =      { durationTime }
                    startTime =         { startTime }
                    isPremiere =        { isPremiere }
                /> */}
    
            </AlertWindowContainer>

            <div 
                className = { `CSB_btn ${showStatus? 'isActive': ''}` }
                onClick = { () => { click( showStatus ) } }
            >
                <span className = 'icon-scissors'></span>
            </div> 
            
        </div>
    )

};

export function CutSegmentButton( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        const dispatch = useDispatch();
    

    return (
        <CutSegmentButtonComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            eventListById = { layout.eventListById  }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
