
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { 
//     selectorData as cutEventEditorSlise,
//     setEditorIsOpen,
//     setEventsPartsList,
//     setEventId,
//     setEventStyle,
//     setMaxDurationTime,

// } from './../../redux/cutEventEditorSlise.js';

import './CutEventEditor.scss';

import { AlertWindowContainer } from './../AlertWindowContainer/AlertWindowContainer.js';

import { CEE_Component } from './components/CEE_Component/CEE_Component.js';

const CutEventEditorComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        saveHandler,
    } = props;

    
    return (
        <div className = 'cutEventEditor'>
           <AlertWindowContainer
                isOpen =                { isOpen }
                setIsOpen =             { setIsOpen }
                width =                 '90vw'
                height =                '90vh'
                showCurrentDayName =    { true }
            >
                <>{ isOpen? (
                    <CEE_Component
                        saveHandler = { saveHandler }
                    />
                ): '' }</>

            </AlertWindowContainer>
            
        </div>
    )

};

export function CutEventEditor( props ){

    // const cutEventEditor = useSelector( cutEventEditorSlise );
    const dispatch = useDispatch();

    return (
        <CutEventEditorComponent
            { ...props }


        />
    );


}
