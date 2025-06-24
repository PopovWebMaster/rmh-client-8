
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddItem.scss';

import { selectorData as layoutSlice, setGridDayEventsList } from './../../../../../../../../redux/layoutSlice.js';
// import { selectorData as navigationSlice }              from './../../../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }                           from './../../../../../../../../redux/spinnerSlice.js';

// import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';

import { AddSegmentButton } from './../../../AddSegmentButton/AddSegmentButton.js';

const AddItemComponent = ( props ) => {

    let {
        id,
        firstSegmentId,
        setGridDayEventsList,
        setSpinnerIsActive,

    } = props;

    const click = () => {
        alert( 'AddItem' );
        console.dir( 'firstSegmentId' );
        console.dir( firstSegmentId );

    }



    return (
        <div className = 'CTS_AddItem'>
            <AddSegmentButton 
                clickHandler = { click }
            />
        </div>
    )

};

export function AddItem( props ){

        // const layout = useSelector( layoutSlice );
        const dispatch = useDispatch();
    

    return (
        <AddItemComponent
            { ...props }
            setGridDayEventsList = { ( val ) => { dispatch( setGridDayEventsList( val ) ) } }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

        />
    );


}
