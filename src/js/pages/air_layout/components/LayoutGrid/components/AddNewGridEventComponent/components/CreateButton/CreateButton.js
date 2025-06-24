
import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './CreateButton.scss';

const CreateButtonComponent = ( props ) => {

    let {
        eventId,
        createHandler

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( eventId === null ){
            setIsReady( false);
        }else{
            setIsReady( true );
        };

    }, [ eventId ] );


    return (
        <div className = 'G_ANG_CreateButton_wrap'>
            { isReady? (
                <div 
                    className = 'G_ANG_CreateButton'
                    onClick = { createHandler }
                >
                    <span className = 'icon-plus'></span>
                    <span className = 'value'>Добавить</span>
                </div>

            ): '' }
        </div>
    );
};

export function CreateButton( props ){

    // const layout = useSelector( layoutSlice );
    // const dispatch = useDispatch();

    return (
        <CreateButtonComponent
            { ...props }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }


            // setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }


        />
    );


}
