
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './StartTimeWithEdit.scss';

import { selectorData as layoutSlice } from './../../../../../../../../redux/layoutSlice.js';
import { convert_sec_to_time } from './../../../../../../../../helpers/convert_sec_to_time.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { StartTimeEditComponent } from './../StartTimeEditComponent/StartTimeEditComponent.js';

const StartTimeWithEditComponent = ( props ) => {

    let {
        startTime,
        isKeyPoint = false,
        id = null,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const clickAdd = () => {
        setIsOpen( true );
    };
    
    return (<>
        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            width =     '90vw'
            height =    '60vh'
            title = 'Редактр времени выхода'
            showCurrentDayName = { true }
        >
            <StartTimeEditComponent 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                id = { id }

            />
        </AlertWindowContainer>

        <span 
            className = { `ETS_time ${isKeyPoint? 'isKeyPoint': ''}` }
            onClick = { clickAdd }
        >{ convert_sec_to_time( startTime ) }</span>
    </>)

};

export function StartTimeWithEdit( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <StartTimeWithEditComponent
            { ...props }
            // gridCurrentDay = { layout.gridCurrentDay }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
