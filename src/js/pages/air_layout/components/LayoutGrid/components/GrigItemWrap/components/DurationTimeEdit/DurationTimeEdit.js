
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './DurationTimeEdit.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
// import { StartTimeEditComponent } from './../StartTimeEditComponent/StartTimeEditComponent.js';
import { DurationEditComponent } from './../DurationEditComponent/DurationEditComponent.js';

import { access_right } from './../../../../../../../../helpers/access_right.js';

const DurationTimeEditComponent = ( props ) => {

    let {
        durationTime,
        id = null,
        linkedFile,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const clickAdd = () => {
        if( access_right( 'layout_grid_edit' ) ){
            setIsOpen( true );
        };

    };
    
    return (<>
        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '30em'
            height =    '18em'
            title = 'Длительность блока'
            showCurrentDayName = { true }
        >

            <DurationEditComponent
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                id =            { id }
                durationTime =  { durationTime }
                linkedFile =    { linkedFile }
            />

        </AlertWindowContainer>

        <span 
            className = 'ETS_duration_block'
            onClick = { clickAdd }
        >{ convert_sec_to_time( durationTime ) }</span>
    </>)

};

export function DurationTimeEdit( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <DurationTimeEditComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
