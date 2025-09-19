

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ScheduleInfoAlertMessage.scss';

import { selectorData as scheduleResultSlise, setInfoMessageText } from './../../../../redux/scheduleResultSlise.js';
import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';



const ScheduleInfoAlertMessageComponent = ( props ) => {

    let {
        infoMessageText,
        setInfoMessageText,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ text, setText ] = useState( '' );

    useEffect( () => {
        if( isOpen ){

        }else{
            setText( '' );
            setInfoMessageText( '' );
        };

    }, [ isOpen ] );

    useEffect( () => {
        if( infoMessageText.trim() !== '' ){

            let timeId = setTimeout( () => {
                setText( infoMessageText.trim() );
                setIsOpen( true );
                clearTimeout( timeId );
            }, 1000 );


        };

    }, [ infoMessageText ]);

    return (
        <div
            className = 'scheduleInfoAlertMessage'
        >

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = ''
                width = '25vw'
                height = '20vh'
            >

                <AWConfirm
                    text = { text } 
                    type = 'confirm'
                    continueHandler =   { () => { setIsOpen( false ) } }
                    cancelHandler =     { () => { setIsOpen( false ) } }
                    titleContinue = 'Продолжить'
                    titlecancel = { null } 
                />

            </AlertWindowContainer>

           
        </div>
        
    )

};


export function ScheduleInfoAlertMessage( props ){

    const scheduleResult = useSelector( scheduleResultSlise );
    const dispatch = useDispatch();

    return (
        <ScheduleInfoAlertMessageComponent
            { ...props }

            infoMessageText = { scheduleResult.infoMessageText }

            setInfoMessageText = { ( val ) => { dispatch( setInfoMessageText( val ) ) } }


        />
    );


}
