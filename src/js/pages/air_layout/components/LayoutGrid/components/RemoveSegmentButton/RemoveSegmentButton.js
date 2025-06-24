
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './RemoveSegmentButton.scss';

import { selectorData as layoutSlice } from './../../../../../../redux/layoutSlice.js';


const RemoveSegmentButtonComponent = ( props ) => {

    let {
        id,
        clickHandler,
        gridDayEventsListById
    } = props;
    let [ isActive, setIsActive ] = useState( false );

    useEffect( () => {
        if( gridDayEventsListById[ id ] ){
            let { firstSegmentId } = gridDayEventsListById[ id ];
            if( firstSegmentId === null ){
                setIsActive( true );
            }else{
                if( firstSegmentId === id ){
                    setIsActive( true );
                }else{
                    setIsActive( false );
                };

            };
        }else{
            setIsActive( false );
        };
        
        // console.dir( 'gridDayEventsListById[ id ]' );
        // console.dir( gridDayEventsListById[ id ] );

    }, [ gridDayEventsListById, id ] );

    return (
        <>{
            isActive? (
                <div className = 'removeSegmentButton'>
                    <div 
                        className = 'RIB_btn'
                        onClick = { clickHandler }
                    >
                        <span className = 'icon-cancel-2'></span>
                    </div>
                </div>
            ): ''
        }</>
        
    )

};

export function RemoveSegmentButton( props ){

        const layout = useSelector( layoutSlice );
        // const navigation = useSelector( navigationSlice );
        // const dispatch = useDispatch();
    

    return (
        <RemoveSegmentButtonComponent
            { ...props }
            gridDayEventsListById = { layout.gridDayEventsListById }
            // setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
